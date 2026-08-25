import { FAQ_ITEMS } from '@/lib/data/contact';

export default function FaqSection() {
  return (
    <section className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
      <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
        Frequently Asked Questions
      </h2>

      <div className='space-y-4'>
        {FAQ_ITEMS.map((faq) => (
          <details
            key={faq.id}
            className='cursor-pointer rounded-lg border border-amber-200 bg-amber-50 p-6'
          >
            <summary className='text-lg font-bold text-gray-900'>
              {faq.question}
            </summary>

            <p className='mt-3 text-gray-700'>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
