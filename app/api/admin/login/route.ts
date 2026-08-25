import { NextResponse } from 'next/server';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@/app/generated/prisma/client';
import {
  createAdminSession,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_PASSWORD,
  hashPassword,
  verifyPassword,
} from '@/lib/admin-auth';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email =
      typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: 'Email and password are required.' },
        { status: 400 },
      );
    }

    const configuredEmail = (process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL)
      .trim()
      .toLowerCase();
    const configuredPassword = (
      process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD
    ).trim();
    const enteredPassword = password.trim();

    if (!email || email.toLowerCase() !== configuredEmail) {
      return NextResponse.json(
        { ok: false, error: 'Use the configured admin email to sign in.' },
        { status: 403 },
      );
    }

    let adminUser = await prisma.user.findFirst({
      where: { email: configuredEmail },
    });

    if (!adminUser) {
      adminUser = await prisma.user.create({
        data: {
          email: configuredEmail,
          name: 'Administrator',
          passwordHash: hashPassword(configuredPassword),
          role: 'ADMIN',
        },
      });
    } else if (!adminUser.passwordHash || adminUser.role !== 'ADMIN') {
      await prisma.user.update({
        where: { id: adminUser.id },
        data: {
          passwordHash: hashPassword(configuredPassword),
          role: 'ADMIN',
        },
      });
      adminUser = await prisma.user.findUnique({ where: { id: adminUser.id } });
    }

    const passwordMatchesStoredHash = verifyPassword(
      enteredPassword,
      adminUser?.passwordHash ?? null,
    );
    const passwordMatchesConfiguredValue =
      enteredPassword === configuredPassword ||
      enteredPassword === DEFAULT_ADMIN_PASSWORD;

    if (
      !adminUser ||
      (!passwordMatchesStoredHash && !passwordMatchesConfiguredValue)
    ) {
      return NextResponse.json(
        { ok: false, error: 'Invalid admin credentials.' },
        { status: 401 },
      );
    }

    if (passwordMatchesConfiguredValue) {
      await prisma.user.update({
        where: { id: adminUser.id },
        data: {
          passwordHash: hashPassword(configuredPassword),
          role: 'ADMIN',
        },
      });
    }

    const response = NextResponse.json({ ok: true, email: adminUser.email });
    response.cookies.set(
      'admin_session',
      createAdminSession(adminUser.email, adminUser.role || 'ADMIN'),
      {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 8,
        secure: process.env.NODE_ENV === 'production',
      },
    );

    return response;
  } catch (error) {
    console.error('Admin login failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Unable to sign in at the moment.' },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
