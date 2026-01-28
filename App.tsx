
import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { PRODUCTS, SKIN_TIPS } from './constants.tsx';
import { Product } from './types';

interface CartItem extends Product {
  quantity: number;
}

interface User {
  name: string;
  email: string;
}

// Auth Page Component
const AuthPage = ({ onLogin }: { onLogin: (user: User) => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    onLogin({ name: formData.name || 'Jane Doe', email: formData.email });
    navigate(from, { replace: true });
  };

  return (
    <div className="py-24 px-4 flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white rounded-[3rem] p-10 md:p-14 border border-stone-100 shadow-2xl shadow-stone-200/50">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold serif mb-3">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-stone-500 text-sm">Join the Lumina inner circle for curated care.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full p-4 bg-stone-50 rounded-2xl border-none focus:ring-2 focus:ring-amber-800 transition-all outline-none" 
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
          )}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full p-4 bg-stone-50 rounded-2xl border-none focus:ring-2 focus:ring-amber-800 transition-all outline-none" 
              placeholder="email@example.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Password</label>
            <input 
              required
              type="password" 
              className="w-full p-4 bg-stone-50 rounded-2xl border-none focus:ring-2 focus:ring-amber-800 transition-all outline-none" 
              placeholder="••••••••"
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <button className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200 uppercase tracking-widest text-xs">
            {isLogin ? 'Enter Lumina' : 'Begin Journey'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-amber-800 transition-colors"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already a member? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-stone-100 transition-colors shadow-sm"
          aria-label="Close details"
        >
          <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="w-full md:w-1/2 bg-stone-50 h-72 md:h-auto relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent md:hidden"></div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-14 overflow-y-auto flex flex-col">
          <div className="mb-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="h-px w-8 bg-amber-700"></span>
              <span className="text-amber-700 font-bold uppercase tracking-[0.2em] text-[10px]">
                {product.category}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 serif mb-6 leading-[1.1]">
              {product.name}
            </h2>
            
            <p className="text-3xl text-stone-800 font-light mb-8 font-sans">
              ${product.price}.00
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-bold uppercase text-stone-400 tracking-[0.15em] mb-3">Targeted Skin Types</h4>
                <div className="flex flex-wrap gap-2">
                  {product.skinType.map(type => (
                    <span key={type} className="px-4 py-1.5 bg-stone-50 text-stone-700 text-[11px] font-bold rounded-full border border-stone-100">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase text-stone-400 tracking-[0.15em] mb-3">Product Philosophy</h4>
                <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button 
              onClick={() => { onAddToCart(product); onClose(); }}
              className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200 flex items-center justify-center space-x-3 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ onSelectProduct, onAddToCart }: { onSelectProduct: (p: Product) => void, onAddToCart: (p: Product) => void }) => (
  <div>
    <Hero />
    
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-4 serif">Our Best Sellers</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Discover the products our community loves most for achieving clear, radiant skin.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <div key={product.id} className="group flex flex-col">
              <div 
                className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 mb-6 relative cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors"></div>
              </div>
              <div className="text-center flex-grow">
                <p className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em] mb-2">{product.category}</p>
                <h3 className="text-lg font-bold text-stone-800 mb-1 serif">{product.name}</h3>
                <p className="text-stone-500 font-medium text-sm mb-4">${product.price}.00</p>
              </div>
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full py-3 bg-stone-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000&auto=format&fit=crop" alt="Skin Care Science" className="rounded-3xl shadow-2xl" />
        </div>
        <div className="mt-12 lg:mt-0">
          <h2 className="text-4xl font-bold text-stone-900 mb-6 serif">Nourishment Rooted in Nature</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            We believe skincare should be simple, effective, and ethically sourced.
          </p>
          <Link to="/products" className="inline-block bg-stone-800 text-white px-10 py-4 rounded-full font-bold hover:bg-stone-700 transition-all shadow-lg shadow-stone-200">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  </div>
);

const ProductsPage = ({ onSelectProduct, onAddToCart }: { onSelectProduct: (p: Product) => void, onAddToCart: (p: Product) => void }) => (
  <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 serif">The Essentials</h1>
      <p className="text-stone-500 max-w-xl mx-auto">A curated selection of our highest-performing treatments.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
      {PRODUCTS.map(product => (
        <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full group">
           <div className="h-72 overflow-hidden relative cursor-pointer" onClick={() => onSelectProduct(product)}>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
           </div>
           <div className="p-8 flex flex-col flex-grow">
             <div className="flex justify-between items-start mb-3">
               <div>
                <p className="text-[9px] font-bold text-amber-700 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="font-bold text-xl text-stone-800 serif">{product.name}</h3>
               </div>
               <span className="text-stone-900 font-medium text-lg">${product.price}</span>
             </div>
             <p className="text-stone-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{product.description}</p>
             <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => onSelectProduct(product)}
                  className="py-3 bg-stone-50 rounded-xl text-stone-800 font-bold text-xs uppercase tracking-widest hover:bg-stone-100 transition-all"
                >
                  Details
                </button>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="py-3 bg-stone-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-amber-800 transition-all"
                >
                  Add
                </button>
             </div>
           </div>
        </div>
      ))}
    </div>
  </div>
);

const TipsPage = () => (
  <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 serif">Beauty Journal</h1>
      <p className="text-stone-500 max-w-xl mx-auto">Expert advice and routines to help you achieve your best skin yet.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {SKIN_TIPS.map(tip => (
        <div key={tip.id} className="group overflow-hidden rounded-[2.5rem] bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="aspect-video overflow-hidden">
            <img src={tip.image} alt={tip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="p-10">
            <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-3">{tip.category}</p>
            <h3 className="text-3xl font-bold text-stone-900 mb-4 serif">{tip.title}</h3>
            <p className="text-stone-600 leading-relaxed">{tip.content}</p>
            <button className="mt-8 text-stone-900 font-bold text-sm uppercase tracking-widest flex items-center group-hover:text-amber-800 transition-colors">
              Read More 
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactPage = () => (
  <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 serif">Get in Touch</h1>
        <p className="text-lg text-stone-600 mb-12 leading-relaxed">
          Have questions about our products or need a personalized skincare recommendation? Our team is here to help you glow.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 serif">Email Us</h4>
              <p className="text-stone-500">concierge@lumina.skin</p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 serif">Visit Our Studio</h4>
              <p className="text-stone-500">123 Beauty Lane, San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-stone-100 shadow-2xl shadow-stone-200/50">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">First Name</label>
              <input type="text" className="w-full p-4 bg-stone-50 rounded-2xl border-none focus:ring-2 focus:ring-amber-800 transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Last Name</label>
              <input type="text" className="w-full p-4 bg-stone-50 rounded-2xl border-none focus:ring-2 focus:ring-amber-800 transition-all outline-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Email Address</label>
            <input type="email" className="w-full p-4 bg-stone-50 rounded-2xl border-none focus:ring-2 focus:ring-amber-800 transition-all outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Your Message</label>
            <textarea rows={4} className="w-full p-4 bg-stone-50 rounded-2xl border-none focus:ring-2 focus:ring-amber-800 transition-all outline-none resize-none"></textarea>
          </div>
          <button className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

const CartPage = ({ cart, user, onRemove, onUpdateQuantity }: { cart: CartItem[], user: User | null, onRemove: (id: string) => void, onUpdateQuantity: (id: string, q: number) => void }) => {
  const [showPayment, setShowPayment] = useState(false);
  const total = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);

  if (cart.length === 0) {
    return (
      <div className="py-32 px-4 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold serif mb-6">Your Cart is Empty</h1>
        <p className="text-stone-500 mb-10">It looks like you haven't added any luminosity to your routine yet.</p>
        <Link to="/products" className="inline-block bg-stone-900 text-white px-10 py-4 rounded-full font-bold">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-16 serif text-center">Your Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-stone-200">
              <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold serif">{item.name}</h3>
                  <button onClick={() => onRemove(item.id)} className="text-stone-400 hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
                <p className="text-stone-500 text-sm mb-4">{item.category}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-stone-200 rounded-lg">
                    <button onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-3 py-1 hover:bg-stone-50">-</button>
                    <span className="px-4 font-medium">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-stone-50">+</button>
                  </div>
                  <span className="text-lg font-bold">${item.price * item.quantity}.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm sticky top-32">
            <h3 className="text-2xl font-bold serif mb-6">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal</span>
                <span>${total}.00</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="border-t border-stone-100 pt-4 flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>${total}.00</span>
              </div>
            </div>

            {!user ? (
               <Link 
                 to="/auth" 
                 state={{ from: { pathname: '/cart' } }}
                 className="w-full py-4 bg-amber-800 text-white rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-xl shadow-amber-100 text-center block"
               >
                 Login to Checkout
               </Link>
            ) : !showPayment ? (
              <button 
                onClick={() => setShowPayment(true)}
                className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200"
              >
                Proceed to Checkout
              </button>
            ) : (
              <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                <h4 className="font-bold text-stone-800 mb-4 uppercase tracking-widest text-xs">Payment Information</h4>
                <div className="space-y-4">
                  <input type="text" placeholder="Cardholder Name" className="w-full p-3 bg-stone-50 rounded-xl border-none outline-none focus:ring-1 focus:ring-stone-900 text-sm" />
                  <input type="text" placeholder="Card Number" className="w-full p-3 bg-stone-50 rounded-xl border-none outline-none focus:ring-1 focus:ring-stone-900 text-sm" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="w-full p-3 bg-stone-50 rounded-xl border-none outline-none focus:ring-1 focus:ring-stone-900 text-sm" />
                    <input type="text" placeholder="CVC" className="w-full p-3 bg-stone-50 rounded-xl border-none outline-none focus:ring-1 focus:ring-stone-900 text-sm" />
                  </div>
                  <button className="w-full py-4 bg-amber-800 text-white rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-xl shadow-amber-100 mt-4">
                    Complete Payment
                  </button>
                  <button onClick={() => setShowPayment(false)} className="w-full text-stone-400 text-xs font-bold uppercase tracking-widest py-2">Back to summary</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  // Wrapper for product interaction to ensure auth
  const handleProtectedAction = (action: () => void) => {
    if (!user) {
      // For simplicity in this demo, we'll just navigate.
      // In a real app, you might use a redirect state.
      window.location.hash = "#/auth";
      return;
    }
    action();
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
          user={user}
          onLogout={() => setUser(null)}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <HomePage 
                onSelectProduct={(p) => handleProtectedAction(() => setSelectedProduct(p))} 
                onAddToCart={(p) => handleProtectedAction(() => addToCart(p))} 
              />
            } />
            <Route path="/products" element={
              <ProductsPage 
                onSelectProduct={(p) => handleProtectedAction(() => setSelectedProduct(p))} 
                onAddToCart={(p) => handleProtectedAction(() => addToCart(p))} 
              />
            } />
            <Route path="/tips" element={<TipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={
              <CartPage 
                cart={cart} 
                user={user}
                onRemove={removeFromCart} 
                onUpdateQuantity={updateQuantity} 
              />
            } />
            <Route path="/auth" element={<AuthPage onLogin={setUser} />} />
          </Routes>
        </main>
        <Footer />
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={addToCart}
        />
      </div>
    </Router>
  );
};

export default App;
