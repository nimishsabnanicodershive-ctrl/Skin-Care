
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#faf9f6] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-amber-700 font-bold uppercase tracking-widest text-sm mb-4">Science Meets Self-Care</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1] mb-6">
              Reveal Your Natural <span className="italic text-amber-800 font-serif">Luminosity</span>
            </h1>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Experience dermatologist-approved skincare formulations designed to nourish, protect, and revitalize your unique skin profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-stone-800 text-white px-8 py-4 rounded-full text-center font-bold hover:bg-stone-700 transition-all shadow-lg shadow-stone-200">
                Explore Collection
              </Link>
              <Link to="/tips" className="bg-white border border-stone-200 text-stone-800 px-8 py-4 rounded-full text-center font-bold hover:bg-stone-50 transition-all">
                View Beauty Journal
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop" 
                alt="Skincare Product" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <p className="text-stone-800 font-bold text-sm mb-1 italic font-serif">"My skin has never felt better."</p>
              <p className="text-stone-400 text-xs">— Sarah J., Verified User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
