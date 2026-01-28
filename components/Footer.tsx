
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold serif mb-6">Lumina</h2>
            <p className="text-stone-400 max-w-sm mb-6 leading-relaxed">
              Empowering individuals to embrace their natural beauty through science-backed formulations and personalized AI guidance.
            </p>
            <div className="flex space-x-4">
              {/* Simple Social Icons */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Shop</h4>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Contact</h4>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li>info@lumina.skin</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Beauty Lane, SF</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Lumina Skin Care. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
