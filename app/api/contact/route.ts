import { NextResponse } from "next/server";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const dogName = typeof body.dogName === "string" ? body.dogName.trim() : "";
    const dogBreed = typeof body.dogBreed === "string" ? body.dogBreed.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const date = typeof body.date === "string" ? body.date.trim() : "";
    const time = typeof body.time === "string" ? body.time.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !phone || !dogName || !dogBreed) {
      return NextResponse.json(
        { error: "Name, email, phone, dog name, and dog breed are required." },
        { status: 400 },
      );
    }

    const savedRequest = await prisma.contactPage.create({
      data: {
        name,
        email,
        phone: phone || null,
        dogName: dogName || null,
        dogBreed: dogBreed || null,
        service: service || null,
        date: date || null,
        time: time || null,
        message: message || null,
      },
    });

    return NextResponse.json({ ok: true, data: savedRequest }, { status: 201 });
  } catch (error) {
    console.error("Contact booking save failed:", error);
    return NextResponse.json(
      { error: "Unable to save your booking request right now." },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
