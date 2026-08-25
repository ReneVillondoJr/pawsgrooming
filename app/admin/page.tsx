import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = verifyAdminSession(
    cookieStore.get(ADMIN_SESSION_COOKIE)?.value,
  );

  if (!session) {
    redirect('/admin/login');
  }

  try {
    const bookings = await prisma.contactPage.findMany({
      orderBy: [{ date: 'asc' }, { name: 'asc' }],
    });

    return (
      <main className='min-h-screen bg-gray-50 text-gray-900'>
        <section className='bg-linear-to-r from-amber-400 to-orange-400 py-16 text-black'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h1 className='mt-3 text-4xl font-bold sm:text-5xl'>
              Client visit bookings
            </h1>
            <p className='mt-3 max-w-2xl text-lg text-amber-950/90'>
              Review every contact request, including the preferred visit date
              and time for each client.
            </p>
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <div className='mb-6 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-white p-6 shadow-sm sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>
                All booking requests
              </h2>
              <p className='mt-1 text-gray-600'>
                Total entries: {bookings.length}
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span className='rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800'>
                Sorted by preferred visit date
              </span>
              <form action='/api/admin/logout' method='POST'>
                <button
                  type='submit'
                  className='rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-50'
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>

          {bookings.length === 0 ?
            <div className='rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm'>
              <p className='text-lg font-semibold text-gray-900'>
                No booking requests yet.
              </p>
              <p className='mt-2 text-gray-600'>
                Clients will appear here as soon as they submit the contact
                form.
              </p>
            </div>
          : <div className='overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm'>
              <table className='min-w-full divide-y divide-gray-200 text-left text-sm'>
                <thead className='bg-amber-50 text-gray-900'>
                  <tr>
                    <th className='px-4 py-3 font-semibold'>Client</th>
                    <th className='px-4 py-3 font-semibold'>Contact</th>
                    <th className='px-4 py-3 font-semibold'>Dog</th>
                    <th className='px-4 py-3 font-semibold'>Service</th>
                    <th className='px-4 py-3 font-semibold'>Visit date</th>
                    <th className='px-4 py-3 font-semibold'>Visit time</th>
                    <th className='px-4 py-3 font-semibold'>Notes</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-100 text-gray-700'>
                  {bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className='align-top hover:bg-amber-50/40'
                    >
                      <td className='px-4 py-4'>
                        <p className='font-semibold text-gray-900'>
                          {booking.name}
                        </p>
                        <p className='text-gray-500'>ID #{booking.id}</p>
                      </td>
                      <td className='px-4 py-4'>
                        <p>{booking.email}</p>
                        <p className='text-gray-500'>
                          {booking.phone || 'No phone provided'}
                        </p>
                      </td>
                      <td className='px-4 py-4'>
                        <p className='font-medium text-gray-900'>
                          {booking.dogName || '—'}
                        </p>
                        <p className='text-gray-500'>
                          {booking.dogBreed || 'Breed not provided'}
                        </p>
                      </td>
                      <td className='px-4 py-4'>{booking.service || '—'}</td>
                      <td className='px-4 py-4'>{booking.date || '—'}</td>
                      <td className='px-4 py-4'>{booking.time || '—'}</td>
                      <td className='px-4 py-4 max-w-xs whitespace-pre-wrap'>
                        {booking.message || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </section>
      </main>
    );
  } finally {
    await prisma.$disconnect();
  }
}
