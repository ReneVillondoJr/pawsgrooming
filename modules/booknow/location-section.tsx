import { MapPin } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className='mt-16 bg-gray-100 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
          Find Us
        </h2>

        <div className='flex h-96 items-center justify-center rounded-lg bg-gray-300'>
          <div className='text-center'>
            <MapPin className='mx-auto mb-4 h-16 w-16 text-amber-600' />

            <p className='font-semibold text-gray-700'>Philippines City</p>

            <p className='mt-2 text-gray-600'>
              Interactive map would be embedded here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
