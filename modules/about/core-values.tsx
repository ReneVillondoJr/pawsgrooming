import { ABOUT_VALUES } from '@/lib/data/about';

export default function CoreValues() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <h2 className='mb-12 text-center text-4xl font-bold text-gray-900'>
        Our Core Values
      </h2>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {ABOUT_VALUES.map((value) => (
          <div
            key={value.title}
            className='rounded-lg border border-amber-200 bg-linear-to-br from-amber-50 to-orange-50 p-8 transition hover:shadow-lg'
          >
            <div className='mb-4 text-5xl'>{value.icon}</div>

            <h3 className='mb-2 text-xl font-bold text-gray-900'>
              {value.title}
            </h3>

            <p className='text-gray-700'>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
