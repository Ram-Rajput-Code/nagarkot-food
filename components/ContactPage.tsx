"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle, Instagram, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { COMPANY_INFO } from '../app/constants';

export const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${encodeURIComponent(formState.name)}%0A` +
      `*Email:* ${encodeURIComponent(formState.email)}%0A` +
      `*Phone:* ${encodeURIComponent(formState.phone)}%0A` +
      `*Message:* ${encodeURIComponent(formState.message)}`;
    
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  const qrCodes = [
    { label: 'Call Us', value: `tel:${COMPANY_INFO.mobile}`, icon: Phone, color: 'text-blue-600' },
    { label: 'WhatsApp', value: `https://wa.me/${COMPANY_INFO.whatsapp}`, icon: CheckCircle, color: 'text-emerald-600' },
    { label: 'Instagram', value: COMPANY_INFO.instagram, icon: Instagram, color: 'text-pink-600' },
    { label: 'Email Us', value: `mailto:${COMPANY_INFO.email}`, icon: Mail, color: 'text-red-600' },
  ];

  return (
    <div className="pt-24">
      <div className="bg-emerald-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-emerald-200 max-w-2xl mx-auto">Have questions or want to place a bulk order? Get in touch with our team.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-4 rounded-2xl mr-6">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-4 rounded-2xl mr-6">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">{COMPANY_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-4 rounded-2xl mr-6">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">{COMPANY_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-4 rounded-2xl mr-6">
                    <Instagram className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                    <a 
                      href={COMPANY_INFO.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline"
                    >
                      @ugnajiii
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="bg-emerald-100 p-4 rounded-full mb-6">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your inquiry has been received. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Inquiry</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                      placeholder="+91 000 000 0000"
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                      placeholder="Tell us about your requirements..."
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-2xl mb-4">
                <QrCode className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Scan to Connect</h2>
              <p className="text-gray-600 mt-2">Quickly reach us by scanning these QR codes with your phone camera.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {qrCodes.map((qr, index) => (
                <div key={index} className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                  <div className="mb-4 p-2 bg-gray-50 rounded-xl border border-gray-100">
                    <QRCodeSVG 
                      value={qr.value} 
                      size={140}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <div className={`flex items-center font-bold ${qr.color}`}>
                    <qr.icon className="w-4 h-4 mr-2" />
                    {qr.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
