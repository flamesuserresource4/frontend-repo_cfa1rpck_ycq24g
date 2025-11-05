import React, { useMemo, useRef, useState } from 'react';

const builderLogos = [
  { name: 'Lodha', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Lodha_Group_logo.svg/320px-Lodha_Group_logo.svg.png' },
  { name: 'Hiranandani', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Hiranandani_Developers_logo.svg/320px-Hiranandani_Developers_logo.svg.png' },
  { name: 'Godrej', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Godrej_Logo.svg/320px-Godrej_Logo.svg.png' },
  { name: 'Kalpataru', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Kalpataru_Logo.svg/320px-Kalpataru_Logo.svg.png' },
  { name: 'Oberoi Realty', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Oberoi_Realty_logo.png/320px-Oberoi_Realty_logo.png' },
  { name: 'Rustomjee', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Rustomjee_Logo.png/320px-Rustomjee_Logo.png' },
  { name: 'Raheja', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/K._Raheja_Group_logo.png/320px-K._Raheja_Group_logo.png' },
];

const properties = [
  {
    title: 'Lakeside Mansion — Powai',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Skyline Penthouse — Andheri',
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Garden Residences — Chandivali',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Premium Offices — Andheri East',
    img: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?q=80&w=1600&auto=format&fit=crop',
  },
];

function LogosMarquee() {
  const list = useMemo(() => [...builderLogos, ...builderLogos], []);
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-10 animate-[marquee_20s_linear_infinite] will-change-transform">
        {list.map((b, i) => (
          <div key={b.name + i} className="shrink-0 opacity-80 hover:opacity-100 transition">
            <img src={b.url} alt={b.name} className="h-10 object-contain" />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export default function Showcases() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % properties.length);
  const prev = () => setIndex((i) => (i - 1 + properties.length) % properties.length);

  return (
    <section id="showcases" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16">
          <div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Properties</h2>
                <p className="mt-3 text-gray-600">A glimpse of our luxury portfolio with premium amenities and iconic views.</p>
              </div>
              <div className="hidden sm:flex gap-3">
                <button onClick={prev} className="h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 grid place-items-center">‹</button>
                <button onClick={next} className="h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 grid place-items-center">›</button>
              </div>
            </div>
            <div className="mt-8 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((p, i) => (
                  <div key={p.title} className="group relative overflow-hidden rounded-2xl shadow-sm">
                    <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70"></div>
                    <div className="absolute inset-0 flex items-end p-4">
                      <div className="text-white">
                        <p className="text-sm uppercase tracking-wide text-white/80">Luxury Collection</p>
                        <p className="text-lg font-semibold">{p.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm uppercase tracking-wider text-gray-500">Trusted by leading developers</p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white/60 p-6 backdrop-blur">
              <LogosMarquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
