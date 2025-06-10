import { motion } from 'framer-motion';
import { Check, Shield, Star, ArrowRight, Lock, CreditCard } from 'lucide-react';

const standardFeatures = [
  "Accès complet au programme nutrition éducatif",
  "Plus de 50 fiches explicatives et ludiques",
  "Modules vidéos pédagogiques",
  "Accès immédiat et illimité à vie",
  "Outils de suivi & journal de progression"
];

const premiumFeatures = [
  "Tout ce qui est inclus dans l'offre précédente",
  "2 téléconsultations individuelles de 30 min avec Eva",
  "Bilan personnalisé pour rechercher les blocages métaboliques",
  "Suivi individuel + ajustements personnalisés"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

export const PricingSection = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Choisis l'option qui
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              te convient le mieux
            </span>
          </h2>
          
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
            Un investissement pour ta santé et ton bien-être
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          {/* Standard Plan */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500"
          >
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Programme "STOP AUX 30 ERREURS"
              </h3>
              <p className="text-sm md:text-base text-gray-600">Formation complète en autonomie</p>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="flex items-baseline mb-2 md:mb-4">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">169€</span>
                <span className="ml-2 text-sm md:text-base text-gray-600">TTC</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500">
                Ou 2x 84,50€ sans frais
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {standardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-amber-500 mt-1" />
                  <span className="text-sm md:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Je commence maintenant
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
          >
            {/* Best Value Badge */}
            <div className="absolute -right-12 top-6 md:top-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-1.5 md:py-2 transform rotate-45 text-xs md:text-sm font-medium">
              Meilleur choix
            </div>

            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-amber-500 fill-amber-500" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Programme + Coaching
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">Accompagnement personnalisé avec Eva</p>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="flex items-baseline mb-2 md:mb-4">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">299€</span>
                <span className="ml-2 text-sm md:text-base text-gray-600">TTC</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500">
                Ou 2x 149,50€ sans frais
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-amber-500 mt-1" />
                  <span className="text-sm md:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Je réserve ma place avec accompagnement
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">
            <Lock className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
            <span className="text-xs md:text-sm text-gray-600">
              Accès immédiat après achat
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3 bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
            <span className="text-xs md:text-sm text-gray-600">
              Satisfait ou remboursé sous 14 jours
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3 bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">
            <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
            <span className="text-xs md:text-sm text-gray-600">
              Paiement 100% sécurisé
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};