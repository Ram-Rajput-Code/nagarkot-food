"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../app/constants';

export const ProductsPage = () => (
  <div className="pt-24">
    <div className="bg-emerald-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-emerald-200 max-w-2xl mx-auto">Discover our range of premium roasted makhana in various mouth-watering flavors.</p>
      </div>
    </div>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {PRODUCTS.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square"
                >
                  <div className={`absolute -inset-4 ${product.color} opacity-10 rounded-3xl blur-2xl`}></div>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="relative z-10 rounded-3xl shadow-2xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <div className="lg:w-1/2">
                <span className={`inline-block ${product.color} text-white px-4 py-1 rounded-full text-sm font-bold mb-4`}>
                  {product.flavor}
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <CheckCircle className={`w-5 h-5 ${product.textColor} mr-2`} />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I'm interested in ${product.name}`}
                    className={`${product.color} text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:opacity-90 transition-all`}
                  >
                    <MessageCircle className="mr-2 w-5 h-5" /> Inquiry on WhatsApp
                  </a>
                  <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all">
                    Technical Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
