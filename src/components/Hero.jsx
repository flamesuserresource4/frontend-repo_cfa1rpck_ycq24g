import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-white/40 to-white"></div>
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur">
              Mumbai • Powai • Chandivali • Andheri
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Magic Gates
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Advisory and trusted dealer for elite residential and commercial properties
              across Mumbai’s prime neighborhoods. We specialize in resale, primary sales,
              and luxury rentals with a curated portfolio starting from ₹1 Cr to ₹7 Cr.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white font-semibold shadow hover:bg-gray-800 transition">
                Get in touch
              </a>
              <a href="#showcases" className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-gray-900 border border-gray-300 hover:bg-gray-50 transition">
                Explore listings
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop" alt="client" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop" alt="client" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                <img src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjbGllbnR8ZW58MHwwfHx8MTc2MjMzNTQ3Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="client" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" />
              </div>
              <p>100+ high-net-worth clients served</p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2ae1?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury Mumbai skyline"
                className="h-full w-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <p className="text-sm uppercase tracking-wider text-white/80">Featured Neighbourhood</p>
                  <p className="text-lg font-semibold">Hiranandani Gardens, Powai</p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">Curated luxury</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -z-0 inset-x-0 -top-40 blur-3xl">
        <div className="mx-auto h-72 w-[40rem] rounded-full bg-gradient-to-tr from-indigo-200 via-purple-200 to-rose-200 opacity-60"></div>
      </div>
    </section>
  );
}
