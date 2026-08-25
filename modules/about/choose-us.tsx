import { WHY_CHOOSE_US } from '@/lib/data/about';

export default function WhyChooseUs() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <h2 className='mb-12 text-center text-4xl font-bold text-gray-900'>
        Why Choose PawsGrooming?
      </h2>

      <div className='space-y-6'>
        {WHY_CHOOSE_US.map((item) => (
          <div key={item.title} className='flex items-start gap-6'>
            <div className='shrink-0 text-3xl'>{item.icon}</div>

            <div>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>
                {item.title}
              </h3>

              <p className='text-gray-700'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
