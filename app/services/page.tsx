import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "Full Grooming Service",
      price: "$65 - $95",
      duration: "2-3 hours",
      description: "Complete grooming package including bath, blow-dry, haircut, nail trim, ear cleaning, and styling.",
      includes: [
        "Professional bath with premium shampoo",
        "Full body haircut or trim",
        "Nail trimming and filing",
        "Ear cleaning",
        "Eye area cleaning",
        "Final styling and fluff",
      ],
    },
    {
      id: 2,
      name: "Spa & Wellness Package",
      price: "$85 - $120",
      duration: "2.5-3 hours",
      description: "Luxurious spa experience with specialized treatments for coat and skin health.",
      includes: [
        "Organic shampoo and conditioner",
        "Warm water massage",
        "Deep conditioning treatment",
        "De-shedding service",
        "Paw pad conditioning",
        "Aromatherapy finish",
      ],
    },
    {
      id: 3,
      name: "Bath & Dry Service",
      price: "$35 - $55",
      duration: "1-1.5 hours",
      description: "Gentle bath with premium products and expert drying technique.",
      includes: [
        "Warm water bath",
        "Premium shampoo",
        "Gentle conditioning",
        "Professional drying",
        "Brush through",
      ],
    },
    {
      id: 4,
      name: "Nail & Paw Care",
      price: "$25 - $35",
      duration: "30-45 minutes",
      description: "Professional nail care and paw pad maintenance.",
      includes: [
        "Nail trimming",
        "Nail filing and shaping",
        "Paw pad care",
        "Optional nail painting",
        "Moisturizing treatment",
      ],
    },
    {
      id: 5,
      name: "De-shedding Treatment",
      price: "$40 - $60",
      duration: "1-1.5 hours",
      description: "Specialized service to reduce shedding and maintain healthy coat.",
      includes: [
        "Deshedding shampoo",
        "Deep conditioning",
        "High-velocity drying",
        "Undercoat removal",
        "Coat conditioning serum",
      ],
    },
    {
      id: 6,
      name: "Breed-Specific Styling",
      price: "$75 - $150",
      duration: "2-3.5 hours",
      description: "Creative cuts and professional styling tailored to your dog&apos;s breed.",
      includes: [
        "Breed-standard cut consultation",
        "Professional bath",
        "Precise styling and shaping",
        "Detail work and finishing",
        "Photo for your records",
      ],
    },
    {
      id: 7,
      name: "Puppy Grooming Package",
      price: "$45 - $65",
      duration: "1-2 hours",
      description: "Gentle introduction to grooming for young puppies (under 1 year).",
      includes: [
        "Gentle handling & introduction",
        "Lukewarm bath with mild shampoo",
        "Soft drying",
        "Light trimming",
        "Nail care",
        "Positive reinforcement",
      ],
    },
    {
      id: 8,
      name: "Senior Dog Care",
      price: "$55 - $85",
      duration: "1.5-2.5 hours",
      description: "Specialized care for senior dogs with extra comfort and attention.",
      includes: [
        "Gentle handling & frequent breaks",
        "Warm water bath",
        "Extra conditioning",
        "Careful nail care",
        "Non-slip surfaces",
        "Joint-friendly positioning",
      ],
    },
  ];

  const pricing = [
    { size: "Small (under 15 lbs)", fullGroom: "$65-75", bath: "$35-40", nails: "$25" },
    { size: "Medium (15-35 lbs)", fullGroom: "$75-85", bath: "$40-50", nails: "$30" },
    { size: "Large (35-75 lbs)", fullGroom: "$85-105", bath: "$50-65", nails: "$35" },
    { size: "Extra Large (over 75 lbs)", fullGroom: "$105-150", bath: "$65-85", nails: "$40" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-400 to-orange-400 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Professional grooming for every dog&apos;s unique needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-amber-200 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-amber-900">{service.name}</h3>
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full font-bold whitespace-nowrap ml-4">
                  {service.price}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">⏱️ Duration: {service.duration}</p>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="space-y-2">
                <p className="font-semibold text-amber-900">Includes:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Pricing Guide by Size</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-amber-600 text-white">
                  <th className="border border-amber-700 px-6 py-4 text-left font-bold">Dog Size</th>
                  <th className="border border-amber-700 px-6 py-4 text-left font-bold">Full Grooming</th>
                  <th className="border border-amber-700 px-6 py-4 text-left font-bold">Bath & Dry</th>
                  <th className="border border-amber-700 px-6 py-4 text-left font-bold">Nail Trim</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                    <td className="border border-amber-200 px-6 py-4 font-semibold text-gray-900">
                      {row.size}
                    </td>
                    <td className="border border-amber-200 px-6 py-4 text-gray-700">{row.fullGroom}</td>
                    <td className="border border-amber-200 px-6 py-4 text-gray-700">{row.bath}</td>
                    <td className="border border-amber-200 px-6 py-4 text-gray-700">{row.nails}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm">
            *Prices may vary based on coat condition, breed, and specific needs. Call for a free consultation.
          </p>
        </div>
      </section>

      {/* Special Offers */}
      <section className="bg-linear-to-r from-amber-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border-2 border-amber-400 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">First Visit Discount</h3>
              <p className="text-3xl font-bold text-amber-600 mb-2">15% OFF</p>
              <p className="text-gray-700">Get 15% off your first grooming appointment with us!</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-orange-400 text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-orange-900 mb-3">Package Deals</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">Save 10%</p>
              <p className="text-gray-700">Book 5 appointments and save 10% on each session!</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-red-400 text-center">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="text-2xl font-bold text-red-900 mb-3">Birthday Special</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">20% OFF</p>
              <p className="text-gray-700">Celebrate your pup&apos;s birthday with 20% off grooming!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-600 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Schedule?</h2>
          <p className="text-xl mb-8">Choose a service above and book your pup&apos;s grooming appointment today!</p>
          <Link
            href="/contact"
            className="bg-white text-amber-700 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg inline-block transition"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
