import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Contact us</h2>
          <p className="mt-3 text-gray-600">Speak with a senior advisor for a private viewing or valuation.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <p className="text-sm text-gray-500">Call / WhatsApp</p>
              <a href="https://wa.me/919820000000" target="_blank" rel="noreferrer" className="mt-1 block text-xl font-semibold text-gray-900">+91 98200 00000</a>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:hello@magicgates.in" className="mt-1 block text-xl font-semibold text-gray-900">hello@magicgates.in</a>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white sm:col-span-2">
              <p className="text-sm text-gray-500">Office</p>
              <p className="mt-1 text-lg font-medium text-gray-900">Powai, Mumbai — By appointment only</p>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input type="text" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input type="tel" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="+91" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-600">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Tell us what you're looking for"></textarea>
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white font-semibold shadow hover:bg-gray-800 transition w-full">
            Request a callback
          </button>
          <p className="mt-3 text-center text-xs text-gray-500">We respond within 2 hours during business days.</p>
        </form>
      </div>
    </section>
  );
}
