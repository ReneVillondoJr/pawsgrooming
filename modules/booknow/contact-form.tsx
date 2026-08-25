'use client';

import { GROOMING_SERVICES } from '@/lib/data/contact';

import { useContactForm } from '@/hooks/use-contact-form';

export default function ContactForm() {
  const {
    formData,
    submitted,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className='lg:col-span-2'>
      <div className='rounded-lg border-2 border-amber-200 bg-linear-to-br from-amber-50 to-orange-50 p-8'>
        <h2 className='mb-6 text-3xl font-bold text-gray-900'>
          Book an Appointment
        </h2>

        {submitted && (
          <div className='mb-6 rounded-lg border border-green-400 bg-green-100 px-4 py-3 text-green-700'>
            <p className='font-bold'>✓ Thank you!</p>

            <p>
              We&apos;ve received your booking request and will contact you
              shortly to confirm your appointment.
            </p>
          </div>
        )}

        {status && (
          <div
            className={`mb-6 rounded-lg border px-4 py-3 ${
              status.type === 'success' ?
                'border-green-400 bg-green-100 text-green-700'
              : 'border-red-400 bg-red-100 text-red-700'
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-2 block font-semibold text-gray-900'>
                Full Name *
              </label>

              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your name'
                className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
              />
            </div>

            <div>
              <label className='mb-2 block font-semibold text-gray-900'>
                Email *
              </label>

              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='your@email.com'
                className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-2 block font-semibold text-gray-900'>
                Phone *
              </label>

              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder='(555) 123-4567'
                className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
              />
            </div>

            <div>
              <label className='mb-2 block font-semibold text-gray-900'>
                Dog&apos;s Name *
              </label>

              <input
                type='text'
                name='dogName'
                value={formData.dogName}
                onChange={handleChange}
                required
                placeholder='Fluffy'
                className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-2 block font-semibold text-gray-900'>
                Breed *
              </label>

              <input
                type='text'
                name='dogBreed'
                value={formData.dogBreed}
                onChange={handleChange}
                required
                placeholder='e.g., Golden Retriever'
                className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
              />
            </div>

            <div>
              <label className='mb-2 block font-semibold text-gray-900'>
                Service *
              </label>

              <select
                name='service'
                value={formData.service}
                onChange={handleChange}
                className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
              >
                {GROOMING_SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-2 block font-semibold text-gray-900'>
                Preferred Date *
              </label>

              <input
                type='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                required
                className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
              />
            </div>

            <div>
              <label className='mb-2 block font-semibold text-gray-900'>
                Preferred Time *
              </label>

              <input
                type='time'
                name='time'
                value={formData.time}
                onChange={handleChange}
                required
                className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
              />
            </div>
          </div>

          <div>
            <label className='mb-2 block font-semibold text-gray-900'>
              Additional Notes
            </label>

            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder='Any special requests or information about your dog...'
              className='w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-amber-600 focus:outline-none'
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full rounded-lg bg-amber-600 py-3 font-bold text-white transition hover:scale-105 hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-70'
          >
            {isSubmitting ? 'Saving your request...' : 'Book Appointment'}
          </button>

          <p className='text-center text-sm text-gray-600'>
            We&apos;ll confirm your booking via phone or email within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
}
