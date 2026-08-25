export default function AboutStory() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
        <div>
          <h2 className='mb-6 text-4xl font-bold text-gray-900'>Our Story</h2>

          <p className='mb-4 text-lg text-gray-700'>
            PawsGrooming was founded in 2016 with a simple mission: to provide
            professional, compassionate grooming services that make dogs feel
            loved and pampered.
          </p>

          <p className='mb-4 text-lg text-gray-700'>
            Our founder, Sarah Williams, combined her passion for dogs with her
            expertise in professional grooming to create a space where every dog
            is treated like family.
          </p>

          <p className='text-lg text-gray-700'>
            Today, PawsGrooming stands as a beacon of excellence in the pet
            grooming industry, known for our certified groomers, premium
            products, and unwavering commitment to animal welfare.
          </p>
        </div>

        <div className='text-center'>
          <div className='mb-4 text-9xl'>🐾</div>

          <div className='rounded-lg bg-linear-to-r from-amber-100 to-orange-100 p-8'>
            <p className='text-2xl font-bold text-amber-900'>
              &quot;Every dog deserves to feel beautiful and loved&quot;
            </p>

            <p className='mt-4 font-semibold text-amber-700'>
              — Sarah Williams, Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
