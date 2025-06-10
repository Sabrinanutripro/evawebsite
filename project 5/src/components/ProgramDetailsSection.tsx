import { motion } from 'framer-motion';
import { Brain, Scale, ShieldCheck, Apple, Coffee, ArrowRight, Sparkles, Star, CheckCircle2 } from 'lucide-react';

const modules = [
  {
    number: "01",
    icon: Brain,
    title: "Les mécanismes bloquant la perte de poids",
    objective: "Comprendre les raisons biologiques et hormonales qui freinent la perte de poids",
    description: "Dans ce premier module, je vais t'expliquer les mécanismes : digestifs, hormonaux, métaboliques et neuronaux qui malgré de gros efforts peuvent ralentir ton amaigrissement : Troubles du transit, troubles de la glycémie, déséquilibre thyroïdien, système nerveux ou impact du cycle menstruel féminin.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    gradient: "from-amber-400 to-orange-400",
    keyPoints: [
      "Comprendre ton métabolisme",
      "Identifier tes blocages hormonaux",
      "Analyser ton cycle digestif",
      "Équilibrer ton système nerveux"
    ]
  },
  {
    number: "02",
    icon: Scale,
    title: "Structuration des repas pour une perte de poids durable",
    objective: "Comment construire des repas équilibrés et adaptés à la perte de poids",
    description: "Dans ce second module, tu apprendras comment structurer facilement tes assiettes en perte de poids où que tu sois, à vue d'œil sans compter les calories et comment calculer tes besoins protéiques spécifiques selon ta situation personnelle (ton sexe, ton âge, ton niveau d'activité physique…) pour des résultats optimaux.",
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    gradient: "from-amber-400 to-orange-400",
    keyPoints: [
      "Composer des repas équilibrés",
      "Adapter les portions à tes besoins",
      "Organiser ta semaine alimentaire",
      "Gérer les repas à l'extérieur"
    ]
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Gérer les aliments industriels et les faux amis",
    objective: "Identifier les pièges des aliments transformés et des produits dits \"sains\"",
    description: "Dans ce 3ème module, tu constateras les nombreux pièges alimentaires que tu fréquentes sans doute au quotidien et qui sabotent ton amaigrissement : Les calories liquides, les aliments « sains » mais caloriques, les aliments à absolument bannir et ceux à limiter.",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    gradient: "from-amber-400 to-orange-400",
    keyPoints: [
      "Repérer les faux aliments sains",
      "Éviter les pièges marketing",
      "Choisir les bonnes alternatives",
      "Lire les étiquettes efficacement"
    ]
  },
  {
    number: "04",
    icon: Apple,
    title: "Bien choisir ses aliments pour optimiser la perte de poids",
    objective: "Apprendre à sélectionner les meilleurs aliments pour composer ses repas",
    description: "Dans ce module essentiel, je vais te guider pour choisir correctement tes aliments du quotidien en perte de poids : Les protéines comme les poissons, viandes, protéines végétales, mais aussi les sauces, yaourts, fromages, boissons végétales et sucrants.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    gradient: "from-amber-400 to-orange-400",
    keyPoints: [
      "Sélectionner les meilleures protéines",
      "Choisir les bonnes graisses",
      "Optimiser les glucides",
      "Intégrer les super-aliments"
    ]
  },
  {
    number: "05",
    icon: Coffee,
    title: "Optimiser les collations et les extras",
    objective: "Optimiser tes petits plaisirs du quotidien sans saboter ta progression",
    description: "Dans ce dernier module, nous verrons comment intégrer intelligemment les collations et extras dans ton quotidien, sans culpabilité et en gardant le cap sur tes objectifs.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    gradient: "from-amber-400 to-orange-400",
    keyPoints: [
      "Préparer des collations saines",
      "Gérer les envies de sucré",
      "Planifier les extras",
      "Maintenir le cap en soirée"
    ]
  }
];

export const ProgramDetailsSection = () => {
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
          className="text-center mb-16 md:mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-sm mb-6 md:mb-8"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center transform rotate-3">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-amber-900 font-medium text-sm md:text-base">
              Programme premium et structuré
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              5 modules pour transformer
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              durablement ton alimentation
            </span>
          </h2>
          
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
            Une approche progressive et complète pour reprendre le contrôle de ton alimentation
          </p>
        </motion.div>

        {/* Modules */}
        <div className="space-y-16 md:space-y-32">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Module number bubble */}
              <div className="absolute left-4 lg:left-[calc(50%-2rem)] -top-6 md:top-0 z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${module.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {module.number}
                </div>
              </div>

              <div className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 ${index % 2 === 0 ? 'lg:pr-[8%]' : 'lg:pl-[8%] lg:grid-flow-dense'}`}>
                {/* Content */}
                <div className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 ${index % 2 === 0 ? 'lg:ml-[16%]' : 'lg:order-2'}`}>
                  <div className="relative">
                    {/* Objective tag */}
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${module.gradient} bg-opacity-10 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6 text-sm`}>
                      <module.icon className={`w-3.5 h-3.5 md:w-4 md:h-4 text-${module.gradient.split('-')[2]}-500`} />
                      <span className={`text-xs md:text-sm font-medium text-${module.gradient.split('-')[2]}-700`}>
                        {module.objective}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                      {module.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                      {module.description}
                    </p>

                    {/* Key Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {module.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 bg-gradient-to-r from-amber-50 to-orange-50 p-2.5 md:p-3 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm font-medium text-gray-900">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : ''} mt-6 lg:mt-0`}>
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-gray-900 mb-6 md:mb-8">
              Tu as accès à l'intégralité des modules dès l'inscription.<br className="hidden md:block" />
              <span className="text-amber-600">Tu avances librement, à ton rythme.</span>
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto text-sm md:text-base"
            >
              Je commence dès aujourd'hui
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};