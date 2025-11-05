import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Showcases from './components/Showcases.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">Magic Gates</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-gray-900 text-gray-600">Services</a>
            <a href="#showcases" className="hover:text-gray-900 text-gray-600">Portfolio</a>
            <a href="#contact" className="hover:text-gray-900 text-gray-600">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-white font-semibold">Enquire</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Showcases />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Magic Gates. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@magicgates.in" className="hover:text-gray-900">hello@magicgates.in</a>
            <span>•</span>
            <a href="tel:+919820000000" className="hover:text-gray-900">+91 98200 00000</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919820000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.45 0 .06 5.39.06 12a11.9 11.9 0 0 0 1.6 6l-1.66 6 6.17-1.62a11.97 11.97 0 0 0 5.9 1.58h.01c6.61 0 11.99-5.39 11.99-12 0-3.2-1.25-6.2-3.55-8.48ZM12.06 22.02c-1.89 0-3.73-.51-5.34-1.47l-.38-.22-3.66.96.98-3.56-.25-.37a9.91 9.91 0 0 1-1.64-5.39c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.02 2.9a9.91 9.91 0 0 1 2.91 7.02c0 5.47-4.45 9.95-9.97 9.95Zm5.73-7.36c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.21-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.52-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.32-.25-.6-.5-.52-.7-.53-.18-.01-.39-.01-.6-.01-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56s1.11 2.97 1.26 3.18c.15.21 2.18 3.33 5.28 4.68.74.32 1.32.5 1.77.64.74.23 1.41.2 1.94.12.59-.09 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.07-.12-.28-.2-.59-.36Z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
