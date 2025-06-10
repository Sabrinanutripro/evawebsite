import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Marion C.",
    age: "34 ans",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    text: "J'ai perdu 6 kilos sans jamais me sentir frustrée. La méthode d'Eva est différente de tout ce que j'ai pu essayer avant. Elle m'a appris à comprendre mon corps et à faire les bons choix naturellement.",
    results: ["-6kg", "Plus d'énergie", "Meilleur sommeil"],
    duration: "3 mois",
    source: "Google"
  },
  {
    name: "Sophie D.",
    age: "42 ans",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    text: "Je ne pensais pas qu'un programme en ligne pouvait avoir autant d'impact. Mes ballonnements ont disparu dès la 3e semaine. J'ai enfin compris pourquoi mes précédents régimes ne fonctionnaient pas.",
    results: ["Digestion améliorée", "Plus de confiance", "-8kg"],
    duration: "4 mois",
    source: "Google"
  },
  {
    name: "Nadia B.",
    age: "38 ans",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    text: "Eva est d'une bienveillance rare. On sent que tout est fait avec cœur. Les explications sont claires, les outils sont pratiques, et le suivi est personnalisé. Je recommande à 100%.",
    results: ["Moins de stress", "Meilleure digestion", "-5kg"],
    duration: "2 mois",
    source: "Google"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
          {/* Google Reviews Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 md:gap-3 bg-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-sm mb-6 md:mb-8"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center">
              <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5 md:gap-1 mb-0.5 md:mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-900">
                4.9/5 sur Google (127 avis)
              </span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Elles ont transformé
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              leur vie grâce au programme
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="transition-all duration-500 ease-in-out transform"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${index === currentIndex ? 'block' : 'hidden'}`}
              >
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                  <Quote className="absolute top-6 right-6 w-16 md:w-24 h-16 md:h-24 text-amber-100" />
                  
                  <div className="relative">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-8 lg:gap-12">
                      {/* Left Column - Author Info */}
                      <div className="space-y-4 md:space-y-6">
                        <div className="relative">
                          <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 -right-3 bg-white rounded-lg md:rounded-xl shadow-lg p-1.5 md:p-2">
                            <div className="flex gap-0.5 md:gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-amber-400 fill-amber-400" />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}, {testimonial.age}</p>
                          <p className="text-gray-500 text-xs md:text-sm">Programme suivi pendant {testimonial.duration}</p>
                        </div>

                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            className="w-3.5 h-3.5 md:w-4 md:h-4"
                          />
                          Avis vérifié sur Google
                        </div>
                      </div>

                      {/* Right Column - Content */}
                      <div className="space-y-6 md:space-y-8">
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium relative z-10">
                          "{testimonial.text}"
                        </p>

                        {/* Results Grid */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                          {testimonial.results.map((result, i) => (
                            <div key={i} className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 md:p-4 rounded-lg md:rounded-xl text-center">
                              <p className="font-semibold text-amber-900 text-sm md:text-base">{result}</p>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center md:justify-start gap-2 text-sm md:text-base"
                        >
                          Je veux les mêmes résultats
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 md:gap-4 mt-8 md:mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 md:p-3 rounded-full bg-white shadow-md text-amber-600 hover:text-amber-700 transition-colors"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 md:p-3 rounded-full bg-white shadow-md text-amber-600 hover:text-amber-700 transition-colors"
              disabled={currentIndex === testimonials.length - 1}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-amber-500 w-4 md:w-6'
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};