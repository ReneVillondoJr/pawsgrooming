export default function AboutPage() {
  const team = [
    {
      name: "Sarah Williams",
      role: "Head Groomer & Founder",
      expertise: "20+ years in professional grooming",
      emoji: "👩‍💼",
    },
    {
      name: "Mike Johnson",
      role: "Senior Groomer",
      expertise: "Breed-specific cuts & show grooming",
      emoji: "👨‍💼",
    },
    {
      name: "Emma Chen",
      role: "Spa Specialist",
      expertise: "Premium treatments & wellness care",
      emoji: "👩‍💼",
    },
    {
      name: "David Martinez",
      role: "Grooming Specialist",
      expertise: "Puppy grooming & special needs care",
      emoji: "👨‍💼",
    },
  ];

  const values = [
    {
      icon: "❤️",
      title: "Love for Dogs",
      description: "We treat every dog as if they were our own beloved pets.",
    },
    {
      icon: "✨",
      title: "Quality Service",
      description: "Excellence in every groom, every time, with attention to detail.",
    },
    {
      icon: "🌱",
      title: "Premium Care",
      description: "Using only the best organic and safe products for your pets.",
    },
    {
      icon: "🤝",
      title: "Customer Focus",
      description: "Your satisfaction and your dog&apos;s happiness are our priorities.",
    },
    {
      icon: "🎓",
      title: "Continuous Learning",
      description: "Staying updated with latest grooming techniques and trends.",
    },
    {
      icon: "🏆",
      title: "Professionalism",
      description: "Certified groomers with years of industry experience.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-400 to-orange-400 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About PawsGrooming</h1>
          <p className="text-xl">Your trusted partner in pet grooming excellence</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              PawsGrooming was founded in 2016 with a simple mission: to provide professional, 
              compassionate grooming services that make dogs feel loved and pampered. What started 
              as a small home-based business has grown into a full-service grooming salon trusted 
              by hundreds of pet owners.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our founder, Sarah Williams, combined her passion for dogs with her expertise in 
              professional grooming to create a space where every dog is treated like family. 
              We believe that proper grooming is not just about appearance—it&apos;s about health, 
              comfort, and happiness.
            </p>
            <p className="text-lg text-gray-700">
              Today, PawsGrooming stands as a beacon of excellence in the pet grooming industry, 
              known for our certified groomers, premium products, and unwavering commitment to 
              animal welfare.
            </p>
          </div>
          <div className="text-center">
            <div className="text-9xl mb-4">🐾</div>
            <div className="bg-linear-to-r from-amber-100 to-orange-100 p-8 rounded-lg">
              <p className="text-2xl font-bold text-amber-900">
                &quot;Every dog deserves to feel beautiful and loved&quot;
              </p>
              <p className="text-amber-700 font-semibold mt-4">— Sarah Williams, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border-l-4 border-amber-600 shadow-md">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide exceptional grooming services that enhance the health, comfort, and 
                beauty of dogs while treating each pet with love, respect, and professionalism. 
                We strive to make grooming a positive, stress-free experience for every dog.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-orange-600 shadow-md">
              <h3 className="text-3xl font-bold text-orange-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be recognized as the premier dog grooming destination in the region, known for 
                our dedication to animal welfare, innovation in grooming techniques, and creating 
                a welcoming community of pet lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg border border-amber-200 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Our Experienced Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition"
              >
                <div className="text-7xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-700 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose PawsGrooming?</h2>
        <div className="space-y-6">
          <div className="flex gap-6 items-start">
            <div className="text-3xl flex-shrink-0">✅</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Professional Groomers</h3>
              <p className="text-gray-700">Our team holds industry certifications and undergoes continuous training in the latest grooming techniques.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="text-3xl flex-shrink-0">✅</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality Products</h3>
              <p className="text-gray-700">We exclusively use organic, eco-friendly, and hypoallergenic products safe for all dog breeds and skin types.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="text-3xl flex-shrink-0">✅</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stress-Free Environment</h3>
              <p className="text-gray-700">Our calm, welcoming facility and gentle approach ensure your dog feels comfortable and safe.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="text-3xl flex-shrink-0">✅</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Service</h3>
              <p className="text-gray-700">We tailor our grooming services to meet your specific needs and your dog&apos;s unique personality.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="text-3xl flex-shrink-0">✅</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-700">We stand behind our work with a 100% satisfaction guarantee on all grooming services.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
