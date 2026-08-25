'use client';

import { useState } from 'react';

import { DEFAULT_CONTACT_FORM } from '@/lib/data/contact';

import type { ContactFormData, ContactStatus } from '@/types/contacts';

export function useContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(DEFAULT_CONTACT_FORM);

  const [submitted, setSubmitted] = useState(false);

  const [status, setStatus] = useState<ContactStatus | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Your booking request could not be saved.',
        );
      }

      setSubmitted(true);

      setStatus({
        type: 'success',
        message: 'Your booking request was saved successfully.',
      });

      setFormData(DEFAULT_CONTACT_FORM);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error ? error.message : 'Something went wrong.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    submitted,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
