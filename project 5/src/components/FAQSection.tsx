import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Combien de temps dure le programme ?",
    answer: "Le programme s'étend sur 8 semaines, avec un suivi personnalisé tout au long du parcours."
  },
  {
    question: "Comment se déroule le suivi ?",
    answer: "Vous bénéficiez d'un accès à la plateforme en ligne, des consultations hebdomadaires et un support continu via notre groupe privé."
  },
  {
    question: "Le programme est-il remboursé ?",
    answer: "Certaines mutuelles peuvent prendre en charge une partie du programme. Nous vous fournirons les documents nécessaires."
  },
  {
    question: "Puis-je suivre le programme à distance ?",
    answer: "Oui, le programme est entièrement accessible à distance, avec des consultations en visioconférence."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-gray-600">
            Tout ce que vous devez savoir sur le programme
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-orange-500" />
                ) : (
                  <Plus className="w-5 h-5 text-orange-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};