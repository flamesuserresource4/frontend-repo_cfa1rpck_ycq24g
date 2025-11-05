import React from 'react';

const services = [
  {
    title: 'Advisory & Portfolio Curation',
    desc: 'Personalized guidance for acquisitions, sales, and rentals based on your lifestyle and investment goals.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
    ),
  },
  {
    title: 'Primary & Resale Transactions',
    desc: 'End-to-end handling with transparent negotiations across top builders and private listings.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l2-2 4 4 8-8 4 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11"/></svg>
    ),
  },
  {
    title: 'Luxury Rentals',
    desc: 'Exclusive access to furnished and unfurnished premium rentals in gated communities.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .69.28 1.32.73 1.77.45.45 1.08.73 1.77.73A2 2 0 1 1 21 15h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    ),
  },
  {
    title: 'Home Loans & Documentation',
    desc: 'Seamless support for valuation, legal, and financing through trusted partners.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">White-glove experience from discovery to closing.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              <div className="mt-4 h-px w-16 bg-gray-200 group-hover:w-24 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
