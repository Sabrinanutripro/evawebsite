import { motion } from 'framer-motion';
import { FileText, CheckCircle2, Download, ArrowRight, Sparkles, BookOpen, Brain, Coffee, Apple, Scale } from 'lucide-react';

const categories = [
  {
    icon: Brain,
    title: "Comprendre ton corps",
    description: "Guides détaillés sur le fonctionnement de ton métabolisme",
    topics: [
      "Comment calculer tes besoins protéiques sans compter les calories",
      "Les mécanismes hormonaux de la perte de poids",
      "L'impact du stress sur ton métabolisme",
      "Le rôle des hormones dans la perte de poids"
    ],
    gradient: "from-purple-400 to-pink-400"
  },
  {
    icon: Scale,
    title: "Structuration des repas",
    description: "Fiches pratiques pour des repas équilibrés",
    topics: [
      "Comment structurer tes repas selon tes habitudes",
      "Les proportions idéales dans ton assiette",
      "Les meilleures combinaisons d'aliments",
      "Les timings optimaux pour tes repas"
    ],
    gradient: "from-blue-400 to-indigo-400"
  },
  {
    icon: Apple,
    title: "Guide des aliments",
    description: "Tout savoir sur les aliments à privilégier",
    topics: [
      "Les protéines végétales et animales à privilégier",
      "Les bonnes et mauvaises graisses",
      "Les fruits et légumes de saison",
      "Les alternatives saines aux aliments transformés"
    ],
    gradient: "from-emerald-400 to-teal-400"
  },
  {
    icon: Coffee,
    title: "Gestion du quotidien",
    description: "Astuces et conseils pratiques",
    topics: [
      "Les collations intelligentes",
      "Manger au restaurant sans culpabiliser",
      "Gérer les événements sociaux",
      "Adapter son alimentation en voyage"
    ],
    gradient: "from-amber-400 to-orange-400"
  }
];

const bonusGuides = [
  {
    title: "Régimes tendances",
    description: "Analyse détaillée des régimes populaires : jeûne intermittent, keto, détox...",
    icon: BookOpen
  },
  {
    title: "Recettes signature",
    description: "Collection de recettes healthy adaptées à tes objectifs",
    icon: Coffee
  },
  {
    title: "Guide des étiquettes",
    description: "Décrypter les étiquettes nutritionnelles comme une pro",
    icon: FileText
  }
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

export const ContentGuidesSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FDE68A' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Badge */}
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
              Bibliothèque de ressources premium
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Une collection complète de
            </span>
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              guides et fiches pratiques
            </span>
          </h2>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Plus de 50 ressources exclusives pour t'accompagner pas à pas dans ta transformation
          </p>
        </motion.div>

        {/* Main Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute -inset-4 bg-gradient-to-r ${category.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-full`}></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>

              {/* Topics list */}
              <ul className="space-y-3">
                {category.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 mt-1 text-${category.gradient.split('-')[2]}-500`} />
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bonus Guides Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.2),transparent_50%)]"></div>
          
          <div className="relative">
            <h3 className="text-2xl font-bold text-amber-900 mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-500" />
              Guides bonus exclusifs
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {bonusGuides.map((guide, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <guide.icon className="w-8 h-8 text-amber-500 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h4>
                  <p className="text-gray-600">{guide.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Download Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md">
            <Download className="w-5 h-5 text-amber-500" />
            <span className="text-gray-600">
              Accès immédiat à toutes les ressources dès ton inscription
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};