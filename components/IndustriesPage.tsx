"use client";

import Image from 'next/image';

export const IndustriesPage = () => (
  <div className="pt-24">
    <div className="bg-emerald-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries Served</h1>
        <p className="text-emerald-200 max-w-2xl mx-auto">Supplying premium makhana to various sectors across the globe.</p>
      </div>
    </div>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: 'Retail & Supermarkets', desc: 'Supplying packaged makhana to major retail chains and local supermarkets.', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=70&w=600' },
            { title: 'Hotels & Restaurants', desc: 'Premium snacks for the hospitality industry, perfect for bars and welcome kits.', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=70&w=600' },
            { title: 'Corporate Gifting', desc: 'Healthy and premium gift hampers for corporate events and festivals.', img: 'https://images.unsplash.com/photo-1549463591-147604343a34?auto=format&fit=crop&q=70&w=600' },
            { title: 'Export Markets', desc: 'Wholesale distribution to international markets with global compliance.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=70&w=600' },
          ].map((ind, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl shadow-lg h-80">
              <Image src={ind.img} alt={ind.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-2xl font-bold mb-2">{ind.title}</h3>
                <p className="text-gray-200 text-sm">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
