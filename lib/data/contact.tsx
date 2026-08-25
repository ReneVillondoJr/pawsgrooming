import type {
  ContactFaq,
  ContactFormData,
  ContactInfo,
  ContactSocial,
} from '@/types/contacts';

/* =========================================================
   CONTACT INFORMATION
========================================================= */

export const CONTACT_INFO: ContactInfo = {
  location: '123 Pet Avenue',
  address: 'Lovely City, ST 12345',
  phone: '(555) 123-4567',
  email: 'hello@pawsgrooming.com',
  responseTime: 'Response within 24 hours',
  hours: [
    'Monday - Friday: 9:00 AM - 6:00 PM',
    'Saturday: 10:00 AM - 4:00 PM',
    'Sunday: Closed',
  ],
};

/* =========================================================
   SOCIAL MEDIA
========================================================= */

export const CONTACT_SOCIALS: ContactSocial[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    href: '#',
    icon: '📘',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: '#',
    icon: '📷',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    href: '#',
    icon: '🐦',
  },
];

/* =========================================================
   GROOMING SERVICES
========================================================= */

export const GROOMING_SERVICES = [
  'Full Grooming Service',
  'Spa & Wellness Package',
  'Bath & Dry Service',
  'Nail & Paw Care',
  'De-shedding Treatment',
  'Breed-Specific Styling',
  'Puppy Grooming Package',
  'Senior Dog Care',
] as const;

/* =========================================================
   DEFAULT CONTACT FORM
========================================================= */

export const DEFAULT_CONTACT_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  dogName: '',
  dogBreed: '',
  service: 'Full Grooming Service',
  date: '',
  time: '',
  message: '',
};

/* =========================================================
   FAQ
========================================================= */

export const FAQ_ITEMS: ContactFaq[] = [
  {
    id: 'grooming-frequency',
    question: 'How often should my dog be groomed?',
    answer:
      "Generally, we recommend grooming every 4-8 weeks depending on your dog's breed and coat type. Breeds with longer coats may need more frequent grooming.",
  },

  {
    id: 'stay-during-grooming',
    question: 'Can I stay during the grooming?',
    answer:
      "For the best results, we recommend allowing our groomers to work without distractions. However, you're welcome to call us for updates on your pup's progress!",
  },

  {
    id: 'anxious-dog',
    question: 'What if my dog is anxious or aggressive?',
    answer:
      'We have experience with anxious and nervous dogs. Please mention this during booking so we can give your pup the special care and attention they need.',
  },

  {
    id: 'mobile-grooming',
    question: 'Do you offer mobile grooming?',
    answer:
      "Currently, we offer in-salon grooming only. However, we're planning to launch mobile grooming services soon. Contact us for more information!",
  },

  {
    id: 'cancellation',
    question: 'What is your cancellation policy?',
    answer:
      'We ask for 24-hour notice for cancellations. Late cancellations may incur a 50% fee. We understand emergencies happen—just give us a call!',
  },
];
