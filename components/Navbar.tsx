"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { COMPANY_INFO } from '../app/constants';

export const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'quality', label: 'Quality' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="relative w-12 h-12 mr-3">
              <Image 
                src={COMPANY_INFO.logo} 
                alt={COMPANY_INFO.name} 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-lg leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>Nagarkot Food</h1>
              <p className={`text-xs ${scrolled ? 'text-emerald-600' : 'text-emerald-200'}`}>Ugna Ji Makhana</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  activePage === item.id 
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Inquiry
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-gray-900' : 'text-white'}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
