"use client";

import React from 'react';
import { ShieldCheck, Award, CheckCircle, Factory } from 'lucide-react';
import { CERTIFICATIONS } from '../app/constants';

export const QualityPage = () => (
  <div className="pt-24">
    <div className="bg-emerald-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Standards</h1>
        <p className="text-emerald-200 max-w-2xl mx-auto">Our commitment to hygiene, safety, and nutritional excellence.</p>
      </div>
    </div>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Uncompromising Quality</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Nagarkot Food, quality is not just a standard; it's our promise. We follow stringent quality control measures at every stage of production, from sourcing raw foxnuts to the final packaging of roasted makhana.
            </p>
            <div className="space-y-4">
              {[
                'Automated cleaning and grading of raw nuts.',
                'Precise roasting at controlled temperatures.',
                'Food-grade seasoning and flavouring.',
                'Multi-layer moisture-proof packaging.',
                'Regular lab testing for nutritional accuracy.'
              ].map((item, i) => (
                <div key={i} className="flex items-center text-gray-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mr-3" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="bg-emerald-50 p-8 rounded-3xl text-center border border-emerald-100">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {cert.icon === 'ShieldCheck' && <ShieldCheck className="text-emerald-600" />}
                  {cert.icon === 'Award' && <Award className="text-emerald-600" />}
                  {cert.icon === 'CheckCircle' && <CheckCircle className="text-emerald-600" />}
                  {cert.icon === 'Factory' && <Factory className="text-emerald-600" />}
                </div>
                <h3 className="font-bold text-gray-900">{cert.name}</h3>
                <p className="text-xs text-emerald-600 font-bold mt-1">Certified</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);
