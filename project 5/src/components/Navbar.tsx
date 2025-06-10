import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Programme', href: '/#programme-intro' },
  { label: 'Contenu', href: '/#programme-details' },
  { label: 'Pour qui ?', href: '/#for-who' },
  { label: 'Résultats', href: '/#testimonials' },
  { label: 'Qui suis-je', href: '/#coach' },
  { label: 'Prix', href: '/#pricing' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleStartClick = () => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = '/#pricing';
      return;
    }
    
    // If we're already on the home page, just scroll to pricing
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ rotate: 12 }}
              className="relative w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/25 transition-shadow transform -rotate-6 overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]"></div>
              <Sparkles className="w-6 h-6 text-white relative z-10" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-medium tracking-wide text-lg text-white italic transform -skew-x-6">
                Eva Vacheau
              </span>
              <span className="text-xs text-amber-300/90 font-medium tracking-wider uppercase transform -skew-x-6">
                Naturopathe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full p-1.5">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-stone-300 hover:text-white transition-colors rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              onClick={handleStartClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all"
            >
              Je commence
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm text-stone-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="py-4 px-2 space-y-1 bg-stone-900/95 backdrop-blur-lg rounded-2xl shadow-lg mb-4 border border-white/10"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block px-4 py-3 text-stone-300 hover:text-amber-500 hover:bg-white/5 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="px-3 pt-3">
                <motion.button
                  onClick={handleStartClick}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Je commence
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};