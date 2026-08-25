import ContactHero from '@/modules/booknow/header';
import ContactInformation from '@/modules/booknow/contact-form';
import ContactForm from '@/modules/booknow/contact-form';
import LocationSection from '@/modules/booknow/location-section';
import FAQSection from '@/modules/booknow/faq-section';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
          <ContactInformation />

          <ContactForm />
        </div>
      </section>

      <LocationSection />

      <FAQSection />
    </main>
  );
}
