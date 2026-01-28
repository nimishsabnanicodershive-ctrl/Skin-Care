
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  user: any;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, user, onLogout }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Beauty Tips', path: '/tips' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-bold text-stone-800 serif tracking-tight">LUMINA</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  location.pathname === link.path 
                  ? 'text-amber-700 border-b-2 border-amber-700' 
                  : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="relative group text-stone-700 hover:text-amber-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:block text-right">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Member</p>
                  <p className="text-xs font-semibold text-stone-800">{user.name}</p>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-2 text-stone-500 hover:text-red-600 transition-colors"
                  title="Log Out"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            ) : (
              <Link 
                to="/auth" 
                className="bg-stone-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-700 transition-all shadow-sm active:scale-95"
              >
                Join Lumina
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-stone-700 hover:text-amber-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium tracking-wide transition-colors duration-200 ${
                    location.pathname === link.path 
                    ? 'text-amber-700' 
                    : 'text-stone-500 hover:text-stone-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Cart and Auth Links */}
              <div className="pt-4 border-t border-stone-200">
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/cart" 
                    className="flex items-center text-base font-medium text-stone-700 hover:text-amber-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    Cart 
                    {cartCount > 0 && (
                      <span className="ml-2 bg-amber-700 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                  
                  {user ? (
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Member</p>
                        <p className="text-sm font-semibold text-stone-800">{user.name}</p>
                      </div>
                      <button 
                        onClick={() => {
                          onLogout();
                          setMobileMenuOpen(false);
                        }}
                        className="p-2 text-stone-500 hover:text-red-600 transition-colors"
                        title="Log Out"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <Link 
                      to="/auth" 
                      className="bg-stone-800 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-stone-700 transition-all shadow-sm active:scale-95 w-fit"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Join Lumina
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
