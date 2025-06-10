import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const EmotionalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-500 to-amber-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span className="text-white/90 text-sm font-medium">
              Déjà + de 1000 femmes accompagnées
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Prête à transformer ta vie ?
          </h2>
          
          <div className="space-y-6 text-white/90 text-lg md:text-xl">
            <p>
              Tu n'as pas besoin d'un énième régime.<br />
              Tu as besoin d'un plan clair, d'une méthode fiable et d'un vrai déclic.
            </p>
            
            <p>
              Ce programme a déjà aidé des centaines de femmes à reprendre le pouvoir sur leur alimentation.<br />
              Et si c'était enfin ton tour ?
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-white text-orange-600 font-semibold rounded-full px-12 py-6 shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3"
          >
            Je commence ma transformation maintenant
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </motion.button>

          <div className="mt-12 flex items-center justify-center gap-8">
            <p className="text-white/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Places limitées
            </p>
            <div className="w-[1px] h-4 bg-white/20"></div>
            <p className="text-white/80">
              Garantie satisfaite ou remboursée
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};