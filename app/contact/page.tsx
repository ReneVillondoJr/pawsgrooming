"use client";

import { useState } from "react";

type StatusState = {
  type: "success" | "error";
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dogName: "",
    dogBreed: "",
    service: "Full Grooming",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<StatusState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Your booking request could not be saved.");
      }

      setSubmitted(true);
      setStatus({
        type: "success",
        message: "Your booking request was saved successfully.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        dogName: "",
        dogBreed: "",
        service: "Full Grooming",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-400 to-orange-400 py-16 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch to book your pup&apos;s grooming appointment</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-3xl shrink-0">📍</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700">123 Pet Avenue</p>
                  <p className="text-gray-700">Lovely City, ST 12345</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl shrink-0">📞</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                  <p className="text-sm text-gray-600">Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl shrink-0">📧</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">hello@pawsgrooming.com</p>
                  <p className="text-sm text-gray-600">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl shrink-0">🕐</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-3xl hover:scale-110 transition">📘</a>
                <a href="#" className="text-3xl hover:scale-110 transition">📷</a>
                <a href="#" className="text-3xl hover:scale-110 transition">🐦</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-linear-to-br from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-amber-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Book an Appointment</h2>

              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  <p className="font-bold">✓ Thank you!</p>
                  <p>We&apos;ve received your booking request and will contact you shortly to confirm your appointment.</p>
                </div>
              )}

              {status && (
                <div
                  className={`mb-6 border px-4 py-3 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-100 border-green-400 text-green-700"
                      : "bg-red-100 border-red-400 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Dog&apos;s Name *</label>
                    <input
                      type="text"
                      name="dogName"
                      value={formData.dogName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                      placeholder="Fluffy"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Breed *</label>
                    <input
                      type="text"
                      name="dogBreed"
                      value={formData.dogBreed}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                      placeholder="e.g., Golden Retriever"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                    >
                      <option>Full Grooming Service</option>
                      <option>Spa & Wellness Package</option>
                      <option>Bath & Dry Service</option>
                      <option>Nail & Paw Care</option>
                      <option>De-shedding Treatment</option>
                      <option>Breed-Specific Styling</option>
                      <option>Puppy Grooming Package</option>
                      <option>Senior Dog Care</option>
                    </select>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Preferred Time *</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Additional Notes</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 text-black"
                    placeholder="Any special requests or information about your dog..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
                >
                  {isSubmitting ? "Saving your request..." : "Book Appointment"}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We&apos;ll confirm your booking via phone or email within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-gray-700 font-semibold">Philippines city</p>
              <p className="text-gray-600 mt-2">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-amber-50 p-6 rounded-lg border border-amber-200 cursor-pointer">
            <summary className="font-bold text-gray-900 text-lg">How often should my dog be groomed?</summary>
            <p className="text-gray-700 mt-3">
              Generally, we recommend grooming every 4-8 weeks depending on your dog&apos;s breed and coat type. 
              Breeds with longer coats may need more frequent grooming.
            </p>
          </details>

          <details className="bg-amber-50 p-6 rounded-lg border border-amber-200 cursor-pointer">
            <summary className="font-bold text-gray-900 text-lg">Can I stay during the grooming?</summary>
            <p className="text-gray-700 mt-3">
              For the best results, we recommend allowing our groomers to work without distractions. 
              However, you&apos;re welcome to call us for updates on your pup&apos;s progress!
            </p>
          </details>

          <details className="bg-amber-50 p-6 rounded-lg border border-amber-200 cursor-pointer">
            <summary className="font-bold text-gray-900 text-lg">What if my dog is anxious or aggressive?</summary>
            <p className="text-gray-700 mt-3">
              We have experience with anxious and nervous dogs. Please mention this during booking 
              so we can give your pup the special care and attention they need.
            </p>
          </details>

          <details className="bg-amber-50 p-6 rounded-lg border border-amber-200 cursor-pointer">
            <summary className="font-bold text-gray-900 text-lg">Do you offer mobile grooming?</summary>
            <p className="text-gray-700 mt-3">
              Currently, we offer in-salon grooming only. However, we&apos;re planning to launch mobile 
              grooming services soon. Contact us for more information!
            </p>
          </details>

          <details className="bg-amber-50 p-6 rounded-lg border border-amber-200 cursor-pointer">
            <summary className="font-bold text-gray-900 text-lg">What is your cancellation policy?</summary>
            <p className="text-gray-700 mt-3">
              We ask for 24-hour notice for cancellations. Late cancellations may incur a 50% fee. 
              We understand emergencies happen—just give us a call!
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
