import { motion } from 'framer-motion';
import { Video, FileText, Utensils, Brain, Lock, BookOpen, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Video,
    title: "Des modules vidéos simples et clairs",
    description: "À regarder à ton rythme, quand tu veux, depuis ton espace privé",
    highlight: "Formation flexible",
    gradient: "from-blue-400 to-indigo-400"
  },
  {
    icon: FileText,
    title: "Des outils PDF pratiques",
    description: "Menus types, checklists, fiches de suivi, journaux d'observation",
    highlight: "Ressources complètes",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    icon: Utensils,
    title: "Une méthode alimentaire accessible",
    description: "Pour apprendre à bien manger sans frustration, ni culpabilité",
    highlight: "Approche bienveillante",
    gradient: "from-rose-400 to-orange-400"
  },
  {
    icon: Brain,
    title: "Des explications concrètes sur ton corps",
    description: "Pour comprendre ta digestion, ton métabolisme et tes émotions",
    highlight: "Compréhension globale",
    gradient: "from-teal-400 to-emerald-400"
  },
  {
    icon: Lock,
    title: "Un accès libre et immédiat",
    description: "Tu accèdes à tout dès ton inscription, sans attendre",
    highlight: "Disponibilité totale",
    gradient: "from-amber-400 to-orange-400"
  },
  {
    icon: BookOpen,
    title: "Un programme conçu pour l'autonomie",
    description: "Tu gardes les contenus à vie et avances à ton rythme",
    highlight: "Apprentissage durable",
    gradient: "from-violet-400 to-purple-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
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

export const WhatYouGetSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FDE68A' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 rounded-2xl shadow-sm mb-8"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center transform rotate-3">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-amber-900 font-medium">
              Tout est prêt pour toi
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Ce que tu vas recevoir
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              dans ton espace privé
            </span>
          </h2>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Un programme complet et structuré pour
            <span className="text-amber-600 font-medium"> transformer durablement ta relation avec l'alimentation</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 backdrop-blur-sm border border-white/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon container with dynamic gradient and glow effect */}
                <div className="mb-8 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -inset-3 bg-gradient-to-r ${benefit.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-full`}></div>
                </div>
                
                {/* Content with enhanced styling */}
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent text-sm font-semibold mb-4`}>
                    {benefit.highlight}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-amber-900 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-lg text-amber-700/80 italic">
            Tu peux commencer dès maintenant. Tout est déjà prêt pour toi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};