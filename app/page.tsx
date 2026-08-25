import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: "🛁",
      title: "Full Grooming",
      description: "Complete grooming package including bath, cut, style, and finishing touches.",
    },
    {
      icon: "💆",
      title: "Spa Treatments",
      description: "Luxurious spa experience with premium shampoos and conditioning treatments.",
    },
    {
      icon: "✂️",
      title: "Nail & Paw Care",
      description: "Professional nail trimming, paw pad care, and nail painting services.",
    },
    {
      icon: "🧴",
      title: "Bath & Dry",
      description: "Gentle bath with premium products followed by expert drying.",
    },
    {
      icon: "🐕",
      title: "De-shedding",
      description: "Specialized treatment to reduce shedding and maintain coat health.",
    },
    {
      icon: "💅",
      title: "Styling & Design",
      description: "Creative breed-specific cuts and custom styling for special occasions.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      pet: "Max - Golden Retriever",
      comment: "PawsGrooming did an amazing job! Max looks and feels so much better. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      pet: "Luna - Poodle",
      comment: "The staff is incredibly professional and gentle with Luna. She's always happy after her visits!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      pet: "Charlie - Dachshund",
      comment: "Best grooming service in the city. Charlie comes home so clean and comfortable!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-400 via-orange-300 to-red-300 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Pup&apos;s <span className="text-white drop-shadow-lg">Perfect Makeover</span> Starts Here
              </h1>
              <p className="text-xl text-white drop-shadow-md">
                Professional grooming services that keep your beloved dogs looking fabulous and feeling great.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg inline-block text-center transition transform hover:scale-105"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-3 rounded-full font-bold text-lg inline-block text-center transition"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl">🐕</div>
              <p className="text-2xl font-bold mt-4 drop-shadow-md">Happy & Pampered Pups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PawsGrooming?</h2>
            <p className="text-xl text-gray-600">We care for your pet like they&apos;re our own</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-lg border-2 border-amber-200 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Certified Groomers</h3>
              <p className="text-gray-700">Our team consists of trained and certified professional groomers with years of experience.</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">💖</div>
              <h3 className="text-2xl font-bold text-orange-900 mb-3">Pet-Friendly Approach</h3>
              <p className="text-gray-700">We treat every dog with gentleness and care, creating a stress-free grooming experience.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-red-900 mb-3">Premium Products</h3>
              <p className="text-gray-700">We use only high-quality, organic grooming products safe for all dog breeds and skin types.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive grooming solutions for your beloved pets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-bold text-lg inline-block transition"
            >
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-r from-amber-600 to-orange-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-xl">Happy Dogs Groomed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5⭐</div>
              <p className="text-xl">Customer Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">8+</div>
              <p className="text-xl">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-xl">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from happy pet owners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.comment}&quot;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-amber-600">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 border-t-4 border-amber-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Pamper Your Pup?</h2>
          <p className="text-xl text-gray-700 mb-8">Book an appointment today and give your dog the grooming experience they deserve!</p>
          <Link
            href="/contact"
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg inline-block transition transform hover:scale-105"
          >
            Schedule Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
