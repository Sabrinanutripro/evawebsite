import { motion } from 'framer-motion';
import { Brain, Utensils, Target, ArrowRight, Award } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: "Comprendre",
    description: "Tu vas apprendre à décoder les signaux de ton corps, ton métabolisme, ta digestion, et l'impact des aliments sur ton énergie.",
    gradient: "from-rose-400 to-amber-400"
  },
  {
    icon: Utensils,
    title: "Structurer",
    description: "Tu sauras organiser tes repas selon ton rythme, tes envies, et ton objectif — sans régime, sans dogme, sans frustration.",
    gradient: "from-amber-400 to-orange-400"
  },
  {
    icon: Target,
    title: "Appliquer",
    description: "Grâce aux fiches pratiques, aux vidéos claires et aux outils du quotidien, tu pourras transformer tes habitudes jour après jour.",
    gradient: "from-orange-400 to-red-400"
  }
];

export const ProgramIntroSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#fff7f0]">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBoMTAwdjEwMEgxMDB6IiBmaWxsPSJyZ2JhKDI1MSwgMTkxLCAzNiwgMC4wMykiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Eva's Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-none"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/20 to-orange-200/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] aspect-[3/4]">
              <img
                src="https://26.staticbtf.eno.do/v1/21-default/093c267aeb04548f98a30412312dff87/media.jpg"
                alt="Eva Vacheau"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Certification Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute top-6 -right-2 z-20"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-l-xl shadow-lg flex items-center gap-2 border-r-4 border-white">
                  <Award className="w-5 h-5" />
                  <span className="font-medium whitespace-nowrap">Naturopathe certifiée</span>
                </div>
              </motion.div>
            </div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-6 bottom-8 bg-white shadow-xl rounded-2xl p-4 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">12 ans</p>
                  <p className="text-xs text-gray-500">d'expertise</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg transform -rotate-1 shadow-lg mb-4">
                STOP AUX 30 ERREURS
              </span>
              <span className="block text-2xl text-gray-700 mt-4">
                Un programme nutritionnel conçu pour
              </span>
              <span className="block mt-3 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                comprendre, structurer et transformer durablement ton alimentation
              </span>
            </h2>

            <div className="prose prose-lg">
              <p className="text-gray-900 leading-relaxed">
                Ce programme n'est pas une méthode miracle. C'est une <span className="font-semibold">méthode pédagogique, précise et humaine</span>, construite sur <span className="font-semibold">12 années d'expertise</span> en nutrition, micronutrition et naturopathie.
              </p>
              
              <p className="text-gray-900 leading-relaxed">
                <span className="font-bold">STOP AUX 30 ERREURS</span> s'adresse aux femmes qui veulent <span className="font-semibold">reprendre le contrôle de leur alimentation</span> — sans culpabilité, sans frustration, et surtout <span className="font-semibold">sans se faire violence</span>.
              </p>

              <p className="text-gray-900 leading-relaxed">
                Tu y apprendras comment <span className="font-semibold">éviter les erreurs alimentaires</span> qui sabotent tes efforts, comment <span className="font-semibold">structurer des repas rassasiants et efficaces sans peser ni compter</span>, comment composer avec tes vraies habitudes de vie — et enfin comprendre <span className="font-semibold">comment fonctionne ton métabolisme, ton système digestif et tes signaux de faim</span>.
              </p>

              <p className="text-gray-900 leading-relaxed">
                Le programme est <span className="font-semibold">100% digital</span>, accessible dès l'inscription, et conçu pour être suivi <span className="font-semibold">à ton rythme, sans pression</span>.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Je découvre le programme complet
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Three Pillars */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon with organic shape background */}
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-[30%_70%_70%_30%/30%_30%_70%_70%] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -inset-4 bg-gradient-to-r ${pillar.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-full`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};