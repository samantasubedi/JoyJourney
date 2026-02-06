import Image from "next/image";

export default function Home() {
  return <div>
  <div className="min-h-screen bg-white font-sans text-slate-900">
 
    <nav className="flex items-center justify-between px-8 py-6 md:px-16">
      <div className="text-xl font-bold ">Joy Journey</div>
      <div className="flex gap-10 text-sm font-medium ">
        <a href="#" className="hover:text-blue-600 transition">Destinations</a>
        <a href="#" className="hover:text-blue-600 transition">Journeys</a>
        <a href="#" className="hover:text-blue-600 transition">About</a>
      </div>
      <button className="rounded-full bg-slate-900 px-5 py-2 text-sm text-white hover:bg-slate-800 transition">
        Book a Trip
      </button>
    </nav>

    <main className="px-8 pt-12 md:px-16 md:pt-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-light leading-tight tracking-tight md:text-7xl">
          Escape the <span className="italic">ordinary</span>, <br /> 
          explore the unknown.
        </h1>
        <p className="mt-8 max-w-lg text-lg text-slate-500 leading-relaxed">
          Curated travel experiences for those who seek silence, 
          architecture, and the hidden corners of the world.
        </p>
        

      </div>

 
    </main>
 <div className="flex justify-center">   <div className="mt-12 flex max-w-2xl items-center rounded-2xl border border-slate-100 bg-slate-50 p-2 shadow-sm">
          <input 
            type="text" 
            placeholder="Where to next?" 
            className="flex-1 bg-transparent px-4 py-2 outline-none"
          />
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
            Search
          </button>
        </div></div> 

  </div></div>;
}
