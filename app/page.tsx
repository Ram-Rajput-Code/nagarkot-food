"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from './constants';

// Import components
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { HomePage } from '../components/HomePage';
import { AboutPage } from '../components/AboutPage';
import { ProductsPage } from '../components/ProductsPage';
import { IndustriesPage } from '../components/IndustriesPage';
import { QualityPage } from '../components/QualityPage';
import { ContactPage } from '../components/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'products': return <ProductsPage />;
      case 'industries': return <IndustriesPage />;
      case 'quality': return <QualityPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">
        <a 
          href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
          className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all transform hover:scale-110 group relative"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border">
            Bulk Inquiry
          </span>
        </a>
        <a 
          href={`tel:${COMPANY_INFO.mobile}`}
          className="bg-emerald-800 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-900 transition-all transform hover:scale-110 group relative"
          title="Call Us"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border">
            Call Now
          </span>
        </a>
      </div>
    </div>
  );
}
