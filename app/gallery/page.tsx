export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      breed: "Golden Retriever",
      style: "Classic Cut",
      emoji: "🐕‍🦺",
      description: "Beautiful golden coat with perfect summer trim",
    },
    {
      id: 2,
      breed: "Poodle",
      style: "Show Cut",
      emoji: "🐩",
      description: "Luxurious groomed poodle with show-ready styling",
    },
    {
      id: 3,
      breed: "Schnauzer",
      style: "Breed-Specific",
      emoji: "🐕",
      description: "Traditional schnauzer cut with sharp lines",
    },
    {
      id: 4,
      breed: "Maltese",
      style: "Teddy Bear",
      emoji: "🧸",
      description: "Adorable teddy bear cut for fluffy coat",
    },
    {
      id: 5,
      breed: "Dachshund",
      style: "Maintenance Trim",
      emoji: "🐕",
      description: "Neat and tidy maintenance trim",
    },
    {
      id: 6,
      breed: "Pomeranian",
      style: "Fluffy Style",
      emoji: "🐕",
      description: "Fluffy grooming to enhance natural coat",
    },
    {
      id: 7,
      breed: "Shih Tzu",
      style: "Puppy Cut",
      emoji: "🐶",
      description: "Cute puppy cut - easy maintenance",
    },
    {
      id: 8,
      breed: "Cocker Spaniel",
      style: "Full Groom",
      emoji: "🐕",
      description: "Full professional grooming with perfect styling",
    },
    {
      id: 9,
      breed: "Bichon Frise",
      style: "Show Style",
      emoji: "☁️",
      description: "Cloud-like fluffy grooming style",
    },
    {
      id: 10,
      breed: "Yorkie",
      style: "Long Hair",
      emoji: "💁",
      description: "Maintained long hair with beautiful shine",
    },
    {
      id: 11,
      breed: "Mixed Breed",
      style: "Custom Cut",
      emoji: "🎨",
      description: "Custom grooming tailored to individual needs",
    },
    {
      id: 12,
      breed: "Labrador",
      style: "Bath & Dry",
      emoji: "🏊",
      description: "Professional bath and dry service",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-400 to-orange-400 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Grooming Gallery</h1>
          <p className="text-xl">See our beautiful transformations!</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="bg-linear-to-r from-amber-300 to-orange-300 p-12 flex items-center justify-center">
                <div className="text-7xl">{item.emoji}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.breed}</h3>
                <p className="text-amber-600 font-semibold mb-2">{item.style}</p>
                <p className="text-gray-700 text-sm">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-xs text-gray-500">⭐ 5 Star Client Rating</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-50 py-16 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">50+</div>
              <p className="text-lg text-gray-700">Different Breeds Groomed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-lg text-gray-700">Before & After Photos</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">98%</div>
              <p className="text-lg text-gray-700">Client Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-700 mb-2">1000+</div>
              <p className="text-lg text-gray-700">Happy Dogs Transformed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
