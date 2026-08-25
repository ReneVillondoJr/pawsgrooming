import { ABOUT_TEAM } from '@/lib/data/about';

export default function TeamSection() {
  return (
    <section className='bg-amber-50 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-12 text-center text-4xl font-bold text-amber-900'>
          Our Experienced Team
        </h2>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {ABOUT_TEAM.map((member) => (
            <div
              key={member.name}
              className='rounded-lg bg-white p-8 text-center shadow-md transition hover:shadow-lg'
            >
              <div className='mb-4 text-7xl'>{member.emoji}</div>

              <h3 className='mb-1 text-xl font-bold text-gray-900'>
                {member.name}
              </h3>

              <p className='mb-3 font-semibold text-amber-700'>{member.role}</p>

              <p className='text-sm text-gray-600'>{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
