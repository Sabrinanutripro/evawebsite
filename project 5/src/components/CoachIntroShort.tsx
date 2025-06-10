import { motion } from 'framer-motion';
import { Check, Quote, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CoachIntroShort = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_50%)]"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Background decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-100/50 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-100/30 rounded-full blur-3xl"></div>
            
            {/* Image container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 to-orange-200/20 rounded-2xl -rotate-6 transform-gpu"></div>
              <div className="relative z-10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] aspect-[4/5] overflow-hidden">
                <img
                  src="https://26.staticbtf.eno.do/v1/22-default/d4f252ed9af1b33026db56bb26dc73b2/media.jpg"
                  alt="Eva Vacheau"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating achievement badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 bottom-8 bg-white shadow-xl rounded-2xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Certifiée</p>
                    <p className="text-xs text-gray-500">Naturopathie</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8 order-1 lg:order-2"
          >
            {/* Section title with icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Eva, ta coach & alliée bien-être
              </h2>
            </div>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-6 w-12 h-12 text-amber-200/50" />
              <div className="prose prose-lg text-gray-600">
                <p className="relative z-10 italic">
                  J'ai créé ce programme après avoir moi-même traversé une période de chaos physique et émotionnel.
                </p>
                <p>
                  Suite à une méningite virale et de nombreux déséquilibres (thyroïde, digestion, fatigue chronique…), j'ai trouvé dans la naturopathie une voie de guérison… et une mission de vie.
                </p>
                <p className="font-medium text-gray-900">
                  Aujourd'hui, j'aide les femmes comme toi à transformer leur rapport à la nourriture, à leur corps et à elles-mêmes — de façon durable et bienveillante.
                </p>
              </div>
            </div>

            {/* Achievements list */}
            <div className="space-y-4 mb-10">
              {[
                'Plus de 10 ans d\'expérience en nutrition',
                'Diplômée en naturopathie, micronutrition et neurosciences',
                'Déjà + de 1000 femmes accompagnées'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-3 rounded-xl hover:bg-white/80 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Link */}
            <Link
              to="/mon-histoire"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium bg-amber-50 px-6 py-3 rounded-xl hover:bg-amber-100 transition-colors"
            >
              Découvrir mon histoire complète
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};