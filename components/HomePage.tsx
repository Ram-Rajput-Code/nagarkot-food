"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Award, Star, Factory, Users, CheckCircle, TrendingUp, Box, Download, MessageCircle, Instagram } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../app/constants';

export const HomePage = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none bg-[url('https://cdn.jsdelivr.net/gh/Ram-Rajput-Code/ugnaji-website-assets/images/ugnaji.jpeg')] bg-repeat"></div>
      
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://cdn.jsdelivr.net/gh/Ram-Rajput-Code/ugnaji-website-assets/images/ugnaji.jpeg" 
            alt="Premium Makhana Background" 
            fill
            className="object-cover brightness-50"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-emerald-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Wholesale & Distribution
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Roasted <br />
              <span className="text-emerald-400">Flavourful Makhana</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-200">
              Experience the crunch of health with Ugna Ji. We manufacture the finest quality roasted makhana in various delicious flavors.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105"
              >
                Request Quote <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => setActivePage('products')}
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all"
              >
                View Products
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">About Nagarkot Food</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Pioneering Healthier Snacking with Ugna Ji</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nagarkot Food Product Pvt Ltd is a premier manufacturer of roasted flavoured makhana. Under our flagship brand <strong>Ugna Ji</strong>, we bring you the perfect blend of traditional nutrition and modern taste. 
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Premium Quality</h4>
                    <p className="text-sm text-gray-500">Handpicked foxnuts roasted to perfection.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Hygienic Process</h4>
                    <p className="text-sm text-gray-500">Automated manufacturing for zero contamination.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setActivePage('about')}
                className="text-emerald-600 font-bold flex items-center hover:text-emerald-700 transition-colors"
              >
                Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video"
            >
              <Image 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=70&w=800" 
                alt="Manufacturing Unit" 
                fill
                className="rounded-3xl shadow-2xl object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Range</h2>
            <h3 className="text-4xl font-bold text-gray-900">Explore Our Delicious Flavors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="h-64 overflow-hidden relative">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-4 right-4 ${product.color} text-white px-3 py-1 rounded-full text-xs font-bold z-10`}>
                    {product.flavor}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{product.description}</p>
                  <button 
                    onClick={() => setActivePage('products')}
                    className="w-full py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-600 hover:text-white transition-all"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-bold mb-8">Committed to Quality, Driven by Health</h3>
              <div className="space-y-8">
                {[
                  { title: 'Direct from Source', desc: 'We source the best foxnuts directly from farmers to ensure freshness.', icon: Box },
                  { title: 'Advanced Roasting', desc: 'Our roasting technology preserves nutrients while providing maximum crunch.', icon: TrendingUp },
                  { title: 'Wholesale Pricing', desc: 'Competitive pricing for distributors and bulk buyers worldwide.', icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-5">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-emerald-100/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-96">
              <div className="relative mt-8">
                <Image src="https://images.unsplash.com/photo-1626132646529-500637532938?auto=format&fit=crop&q=70&w=400" alt="Makhana Quality" fill className="rounded-2xl shadow-lg object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative">
                <Image src="https://images.unsplash.com/photo-1626132646529-500637532938?auto=format&fit=crop&q=70&w=401" alt="Makhana Packaging" fill className="rounded-2xl shadow-lg object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Partner with Ugna Ji?</h3>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto relative z-10">
              Join our distribution network or follow us on social media for updates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Inquiry
              </a>
              <a 
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition-all flex items-center justify-center"
              >
                <Instagram className="mr-2 w-5 h-5" /> Follow on Instagram
              </a>
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-emerald-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-900 transition-all flex items-center justify-center"
              >
                Request Catalogue <Download className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
