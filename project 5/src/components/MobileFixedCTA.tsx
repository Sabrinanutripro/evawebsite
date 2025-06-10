import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const MobileFixedCTA = () => {
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-lg md:hidden z-40"
    >
      <motion.button
        onClick={handleClick}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
      >
        Je découvre les prix
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};