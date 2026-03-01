import React from 'react'
import Navbar from './Navbar'

export const Home = () => {
  return (
     <main className="font-sans">

      {/* HERO SECTION */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover the Soul of Nepal
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Adventure. Culture. Himalayas. Spirituality.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg">
              Explore Destinations
            </button>
            <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg text-lg">
              Plan Your Trip
            </button>
          </div>
        </div>
      </section>

      {/* WHY VISIT NEPAL */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Visit Nepal?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Himalayas",
              desc: "Home of Mount Everest and breathtaking mountain views.",
            },
            {
              title: "Culture & Heritage",
              desc: "Temples, festivals and ancient traditions.",
            },
            {
              title: "Wildlife Safari",
              desc: "Explore Chitwan National Park and rare wildlife.",
            },
            {
              title: "Spiritual Journey",
              desc: "Birthplace of Buddha in Lumbini.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Kathmandu",
              img: "https://images.unsplash.com/photo-1588392382834-a891154bca4d",
            },
            {
              name: "Pokhara",
              img: "https://images.unsplash.com/photo-1617191517000-8b2e5c5e8f7f",
            },
            {
              name: "Chitwan",
              img: "https://images.unsplash.com/photo-1549887534-3dbf9e2a27fa",
            },
            {
              name: "Lukla",
              img: "https://images.unsplash.com/photo-1508264165352-258a6e6221ad",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={place.img}
                alt={place.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-red-600 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Experience Nepal?
        </h2>
        <button className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200">
          Book Your Adventure
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 Explore Nepal. All rights reserved.
      </footer>
    </main>
  )
}
export default Home