"use client";

import Image from 'next/image';
import { TrendingUp, Star, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../app/constants';

export const AboutPage = () => (
  <div className="pt-24">
    <div className="bg-emerald-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-emerald-200 max-w-2xl mx-auto">Learn about our journey, our values, and the people behind Nagarkot Food Products.</p>
      </div>
    </div>
    
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nagarkot Food Product Pvt Ltd was founded with a vision to provide healthy, nutritious, and delicious snacking options to the world. We specialize in the manufacturing of roasted flavoured makhana, also known as foxnuts or gorgon nuts.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our brand <strong>Ugna Ji</strong> represents our commitment to quality and authenticity. We believe that snacking shouldn't be a compromise on health, which is why we use only the finest ingredients and hygienic manufacturing processes.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-emerald-600 text-3xl font-bold mb-1">10+</h3>
                <p className="text-gray-500 text-sm font-medium uppercase">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-emerald-600 text-3xl font-bold mb-1">50+</h3>
                <p className="text-gray-500 text-sm font-medium uppercase">Team Members</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=70&w=800" alt="Leadership Team" fill className="rounded-3xl shadow-xl object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Our Vision', desc: 'To become a global leader in healthy snacking by providing innovative and nutritious food products.', icon: TrendingUp },
            { title: 'Our Mission', desc: 'To manufacture premium quality makhana using sustainable practices and empower our community.', icon: Star },
            { title: 'Our Values', desc: 'Integrity, Quality, Innovation, and Customer Satisfaction are at the heart of everything we do.', icon: CheckCircle },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {COMPANY_INFO.directors.map((director, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-6 flex items-center justify-center text-emerald-800 text-3xl font-bold">
                  {director.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{director}</h3>
                <p className="text-emerald-600 font-medium">Director</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);
