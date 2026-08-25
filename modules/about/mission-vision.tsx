export default function MissionVision() {
  return (
    <section className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='rounded-lg border-l-4 border-amber-600 bg-white p-8 shadow-md'>
            <h3 className='mb-4 text-3xl font-bold text-amber-900'>
              Our Mission
            </h3>

            <p className='text-lg text-gray-700'>
              To provide exceptional grooming services that enhance the health,
              comfort, and beauty of dogs while treating each pet with love,
              respect, and professionalism.
            </p>
          </div>

          <div className='rounded-lg border-l-4 border-orange-600 bg-white p-8 shadow-md'>
            <h3 className='mb-4 text-3xl font-bold text-orange-900'>
              Our Vision
            </h3>

            <p className='text-lg text-gray-700'>
              To be recognized as the premier dog grooming destination in the
              region, known for our dedication to animal welfare, innovation,
              and creating a welcoming community of pet lovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
