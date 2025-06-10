import { motion } from 'framer-motion';
import { Send, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

const benefits = [
  "Guide des 7 jours de menus healthy offert",
  "Conseils nutrition hebdomadaires",
  "Recettes exclusives",
  "Astuces bien-être"
];

export const NewsletterSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/40 to-orange-100/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-100/40 to-orange-100/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full shadow-sm mb-8"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-amber-900 font-medium text-sm">
                Newsletter bien-être & nutrition
              </span>
            </motion.div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Reçois chaque semaine des conseils
                <span className="block mt-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  pour prendre soin de toi
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Des conseils concrets et personnalisés pour une vie plus saine
              </p>
            </div>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Ton adresse email..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Je m'inscris et je reçois mon guide offert
                <Send className="w-5 h-5" />
              </motion.button>

              <p className="text-center text-sm text-gray-500 mt-4">
                En t'inscrivant, tu acceptes de recevoir nos emails. Tu pourras te désinscrire à tout moment.
                <br />
                <a href="#" className="text-amber-600 hover:text-amber-700 underline">
                  Politique de confidentialité
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};