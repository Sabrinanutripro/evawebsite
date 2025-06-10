import { motion } from 'framer-motion';
import { Gift, BookOpen, Coffee, Users } from 'lucide-react';

const bonuses = [
  {
    icon: BookOpen,
    title: "Guide des recettes healthy",
    description: "Plus de 50 recettes équilibrées et délicieuses"
  },
  {
    icon: Coffee,
    title: "Consultation bonus",
    description: "Une séance individuelle supplémentaire"
  },
  {
    icon: Users,
    title: "Accès groupe privé",
    description: "Support et motivation de la communauté"
  }
];

export const BonusSection = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Bonus Offerts
              </h2>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Des extras exclusifs pour maximiser vos résultats
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-orange-400"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <bonus.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{bonus.title}</h3>
              <p className="text-gray-600">{bonus.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};