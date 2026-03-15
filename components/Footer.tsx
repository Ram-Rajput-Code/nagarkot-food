"use client";

import Image from 'next/image';
import { Mail, MapPin, Phone, MessageCircle, ChevronRight, Instagram } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../app/constants';

export const Footer = ({ setActivePage }: { setActivePage: (p: string) => void }) => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center mb-6">
            <div className="relative w-12 h-12 mr-3">
              <Image 
                src={COMPANY_INFO.logo} 
                alt={COMPANY_INFO.name} 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="font-bold text-xl">Nagarkot Food</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Leading manufacturer and wholesaler of premium roasted flavoured makhana. Quality and health in every bite.
          </p>
          <div className="flex space-x-4">
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"><MessageCircle className="w-5 h-5" /></a>
            <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"><Mail className="w-5 h-5" /></a>
            <a href={`tel:${COMPANY_INFO.mobile}`} className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors"><Phone className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-emerald-600 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Products', 'Industries', 'Quality', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => setActivePage(item.toLowerCase().replace(' ', ''))}
                  className="text-gray-400 hover:text-emerald-500 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" /> {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-emerald-600 pb-2 inline-block">Our Flavors</h3>
          <ul className="space-y-3">
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <button 
                  onClick={() => setActivePage('products')}
                  className="text-gray-400 hover:text-emerald-500 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" /> {product.flavor}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-emerald-600 pb-2 inline-block">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-400 text-sm">{COMPANY_INFO.address}</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              <span className="text-gray-400 text-sm">{COMPANY_INFO.mobile}</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              <span className="text-gray-400 text-sm">{COMPANY_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
