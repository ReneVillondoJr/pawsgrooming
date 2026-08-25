export type ContactInfo = {
  location: string;
  address: string;
  phone: string;
  email: string;
  responseTime: string;
  hours: string[];
};

export type ContactSocial = {
  id: string;
  name: string;
  href: string;
  icon: string;
};

export type ContactFaq = {
  id: string;
  question: string;
  answer: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  dogName: string;
  dogBreed: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

export type ContactStatus = {
  type: 'success' | 'error';
  message: string;
};
