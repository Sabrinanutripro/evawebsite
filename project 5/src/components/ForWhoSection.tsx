import { motion } from 'framer-motion';
import { Check, X, MessageCircle, ArrowRight, Target, ShieldCheck } from 'lucide-react';

const forWhoItems = {
  included: [
    {
      text: "Tu veux retrouver ton énergie et perdre du poids durablement",
      description: "Tu es prête à adopter une approche progressive et durable, sans solution miracle ni régime restrictif.",
      icon: Target
    },
    {
      text: "Tu veux comprendre ton corps et tes signaux de faim",
      description: "Tu souhaites développer une relation saine avec ton corps et l'alimentation.",
      icon: ShieldCheck
    },
    {
      text: "Tu es fatiguée des régimes yo-yo et des restrictions",
      description: "Tu cherches une méthode qui respecte ton corps et tes besoins réels.",
      icon: Check
    },
    {
      text: "Tu veux des résultats qui durent dans le temps",
      description: "Tu es prête à transformer tes habitudes en profondeur, pas juste pour quelques semaines.",
      icon: Check
    },
    {
      text: "Tu as besoin d'un cadre clair et d'outils concrets",
      description: "Tu veux une méthode structurée avec des actions précises à mettre en place.",
      icon: Check
    }
  ],
  excluded: [
    {
      text: "Tu cherches une solution miracle rapide",
      description: "Ce programme demande un engagement régulier et une approche progressive.",
      icon: X
    },
    {
      text: "Tu veux continuer les régimes restrictifs",
      description: "Notre approche est basée sur l'équilibre et le respect de ton corps, pas sur les restrictions.",
      icon: X
    },
    {
      text: "Tu n'es pas prête à remettre en question tes habitudes",
      description: "Le changement nécessite une ouverture d'esprit et une volonté d'évolution.",
      icon: X
    },
    {
      text: "Tu préfères compter les calories que comprendre ton corps",
      description: "Nous privilégions une approche intuitive et éducative plutôt que mathématique.",
      icon: X
    },
    {
      text: "Tu cherches un programme sans accompagnement",
      description: "Notre méthode inclut un suivi et des outils pour t'accompagner dans ta transformation.",
      icon: X
    }
  ]
};

const stats = [
  {
    number: "87%",
    text: "des participantes perdent du poids dès le premier mois"
  },
  {
    number: "92%",
    text: "maintiennent leurs résultats après 6 mois"
  },
  {
    number: "95%",
    text: "recommandent le programme"
  }
];

export const ForWhoSection = () => {
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
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              À qui s'adresse
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              ce programme ?
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Ce programme n'est pas une méthode miracle.
            Il est fait pour les femmes prêtes à transformer durablement leur relation avec l'alimentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Pour toi si... */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100/30 rounded-full blur-2xl"></div>
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center transform rotate-3">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  Ce programme est fait pour toi si...
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {forWhoItems.included.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mt-1">
                          <item.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm md:text-base text-gray-900 font-medium mb-1 md:mb-2">{item.text}</p>
                          <p className="text-xs md:text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pas pour toi si... */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-100/30 rounded-full blur-2xl"></div>
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-rose-400 to-red-400 rounded-2xl flex items-center justify-center transform -rotate-3">
                    <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  Ce n'est pas pour toi si...
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {forWhoItems.excluded.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-rose-400 to-red-400 rounded-lg flex items-center justify-center mt-1">
                          <item.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm md:text-base text-gray-900 font-medium mb-1 md:mb-2">{item.text}</p>
                          <p className="text-xs md:text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-gray-600">{stat.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Tu hésites encore ?</h4>
                <p className="text-sm md:text-base text-gray-600">
                  Pose-moi tes questions sur Instagram <span className="text-amber-600 font-medium">@eva_nutrition_sante</span>
                </p>
              </div>
            </div>
            <motion.a
              href="https://instagram.com/eva_nutrition_sante"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-white px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-amber-600 font-medium text-sm md:text-base"
            >
              Me contacter
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};