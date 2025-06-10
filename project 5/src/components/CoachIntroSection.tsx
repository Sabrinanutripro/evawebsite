import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';

const achievements = [
  {
    icon: GraduationCap,
    text: "Diplômée en nutrition"
  },
  {
    icon: Award,
    text: "10 ans d'expérience"
  },
  {
    icon: Heart,
    text: "Plus de 1000 clients satisfaits"
  }
];

export const CoachIntroSection = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-100 rounded-2xl -rotate-6 transform-gpu"></div>
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Coach Eva"
              className="rounded-2xl shadow-xl relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Votre coach Eva
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Passionnée par la nutrition et le bien-être, j'accompagne mes clients vers une relation saine avec l'alimentation depuis plus de 10 ans. Mon approche personnalisée vous permettra d'atteindre vos objectifs tout en respectant votre corps et vos besoins.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-gray-600">{achievement.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};