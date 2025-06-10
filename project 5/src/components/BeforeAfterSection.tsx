import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const results = [
  {
    name: "Sarah, 34 ans",
    beforeImage: "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    afterImage: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "3 mois",
    testimonial: "J'ai retrouvé mon énergie et ma confiance en moi ! Plus de ballonnements, plus de fringales. Je me sens enfin en harmonie avec mon corps.",
    results: ["-8kg", "Digestion améliorée", "Plus d'énergie"]
  },
  {
    name: "Marie, 42 ans",
    beforeImage: "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    afterImage: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "4 mois",
    testimonial: "Enfin une approche qui marche ! J'ai appris à manger sainement sans me priver. Les kilos sont partis naturellement, sans effet yoyo.",
    results: ["-12kg", "Meilleur sommeil", "Plus de vitalité"]
  }
];

export const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + results.length) % results.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Des résultats concrets
            </span>
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              et durables
            </span>
          </h2>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Découvre les transformations de femmes comme toi qui ont suivi le programme
          </p>
        </motion.div>

        <div className="relative">
          <div className="transition-all duration-500 ease-in-out transform"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${index === currentIndex ? 'block' : 'hidden'} grid lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Before/After Images */}
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={result.beforeImage}
                        alt="Avant"
                        className="w-full h-full object-cover aspect-[3/4]"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Avant
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={result.afterImage}
                        alt="Après"
                        className="w-full h-full object-cover aspect-[3/4]"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Après
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative">
                  <Quote className="absolute top-6 right-6 w-20 h-20 text-amber-100" />
                  
                  <div className="relative">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 relative z-10">
                      "{result.testimonial}"
                    </p>

                    <div className="space-y-6">
                      {/* Results Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {result.results.map((achievement, i) => (
                          <div key={i} className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl text-center">
                            <p className="font-semibold text-amber-900">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                        <div>
                          <p className="font-semibold text-gray-900">{result.name}</p>
                          <p className="text-gray-500">Programme suivi pendant {result.duration}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                        >
                          Je me lance
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md text-amber-600 hover:text-amber-700 transition-colors"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md text-amber-600 hover:text-amber-700 transition-colors"
              disabled={currentIndex === results.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-amber-500 w-6'
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