import { GALLERY_ITEMS, GALLERY_STATS } from '@/lib/data/gallary';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Scissors, Sparkles } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Hero */}
      <section className='border-b bg-amber-50/60'>
        <div className='mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8'>
          <div className='mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm'>
            <Sparkles className='h-4 w-4' />
            Our Grooming Gallery
          </div>

          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Beautiful Grooming
            <span className='block text-amber-600'>Transformations</span>
          </h1>

          <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg'>
            Take a look at some of the happy pups we&apos;ve had the pleasure of
            grooming. Every dog receives personalized care and attention.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
        <div className='mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              Recent Grooming Work
            </h2>

            <p className='mt-2 text-sm text-gray-600 sm:text-base'>
              A collection of our favorite grooming styles.
            </p>
          </div>

          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <Scissors className='h-4 w-4' />
            Professional grooming
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {GALLERY_ITEMS.map((item) => (
            <Card
              key={item.id}
              className='group overflow-hidden border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md'
            >
              {/* Image / Preview */}
              <div className='relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_65%)]' />

                <div className='relative text-7xl transition-transform duration-200 group-hover:scale-110'>
                  {item.emoji}
                </div>

                <Badge
                  variant='secondary'
                  className='absolute left-4 top-4 border border-white/70 bg-white/90 text-gray-700 shadow-sm'
                >
                  {item.style}
                </Badge>
              </div>

              <CardContent className='p-5'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {item.breed}
                    </h3>

                    <p className='mt-1 text-sm font-medium text-amber-600'>
                      {item.style}
                    </p>
                  </div>

                  <div className='flex shrink-0 items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700'>
                    <Star className='h-3.5 w-3.5 fill-current' />
                    5.0
                  </div>
                </div>

                <p className='mt-4 text-sm leading-6 text-gray-600'>
                  {item.description}
                </p>

                <div className='mt-5 border-t pt-4'>
                  <p className='text-xs text-gray-500'>
                    Professional grooming service
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className='border-y bg-gray-50'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <div className='mb-10 text-center'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              By The Numbers
            </h2>

            <p className='mt-2 text-sm text-gray-600 sm:text-base'>
              Trusted by pet owners and loved by their pups.
            </p>
          </div>

          <div className='grid grid-cols-1 divide-y rounded-xl border bg-white shadow-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4'>
            {GALLERY_STATS.map((stat) => (
              <div
                key={stat.label}
                className='flex flex-col items-center justify-center px-6 py-8 text-center'
              >
                <div
                  className={`text-4xl font-bold tracking-tight sm:text-5xl ${stat.color}`}
                >
                  {stat.value}
                </div>

                <p className='mt-2 text-sm font-medium text-gray-600'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='overflow-hidden rounded-2xl border border-amber-200 bg-amber-50'>
          <div className='flex flex-col items-center justify-between gap-6 px-6 py-10 text-center sm:px-10 lg:flex-row lg:text-left'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>
                Ready for your pup&apos;s transformation?
              </h2>

              <p className='mt-2 max-w-xl text-sm leading-6 text-gray-600'>
                Give your dog the professional grooming experience they deserve.
              </p>
            </div>

            <a
              href='/contact'
              className='inline-flex h-11 items-center justify-center rounded-md bg-amber-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700'
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
