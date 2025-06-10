import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, BookOpen, Brain, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  {
    year: "2011",
    title: "Le déclic",
    description: "Suite à une méningite virale, je découvre l'importance d'une approche holistique de la santé. C'est le début de ma passion pour la nutrition.",
    icon: Brain
  },
  {
    year: "2013",
    title: "Formation en Naturopathie",
    description: "Je commence ma formation approfondie en naturopathie, découvrant les liens profonds entre alimentation et santé globale.",
    icon: GraduationCap
  },
  {
    year: "2015",
    title: "Spécialisation en Nutrition",
    description: "Je me spécialise en nutrition et micronutrition, avec un focus particulier sur les déséquilibres hormonaux et digestifs.",
    icon: BookOpen
  },
  {
    year: "2018",
    title: "Lancement du Programme",
    description: "Création de mon programme signature, combinant mes connaissances en nutrition, naturopathie et accompagnement personnalisé.",
    icon: Sparkles
  }
];

const certifications = [
  "Diplôme de Naturopathie - CENATHO Paris",
  "Certification en Micronutrition - IEDM",
  "Formation en Neurosciences appliquées",
  "Spécialisation en Nutrition Hormonale Féminine"
];

export const EvaStoryPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Eva Vacheau background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mon Histoire
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              De patiente à naturopathe : comment ma propre guérison m'a menée à aider des centaines de femmes à transformer leur vie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
            {/* Left Column - Story */}
            <div className="prose prose-lg max-w-none">
              <h2>Le début de mon voyage</h2>
              <p>
                Mon histoire avec la nutrition et le bien-être n'a pas commencé dans les livres, mais dans un lit d'hôpital. À 25 ans, une méningite virale a bouleversé ma vie, déclenchant une cascade de déséquilibres : thyroïdiens, digestifs, fatigue chronique...
              </p>

              <p>
                Les médecins traditionnels, malgré leur bonne volonté, ne parvenaient pas à m'aider à retrouver mon énergie et mon bien-être. C'est là que j'ai découvert la naturopathie et la puissance d'une approche holistique de la santé.
              </p>

              <h2>La transformation</h2>
              <p>
                Ce qui a commencé comme une quête personnelle de guérison s'est transformé en une passion dévorante pour comprendre les mécanismes du corps humain, particulièrement chez les femmes. J'ai passé des années à étudier la nutrition, la naturopathie, les neurosciences et la micronutrition.
              </p>

              <p>
                Ma propre expérience m'a appris que la santé n'est pas qu'une question de calories ou de régimes restrictifs. C'est un équilibre délicat entre nutrition, gestion du stress, sommeil, et connexion corps-esprit.
              </p>

              <h2>Ma mission aujourd'hui</h2>
              <p>
                Après avoir accompagné plus de 1000 femmes, je sais que chaque parcours est unique. Ce qui me passionne, c'est de voir mes clientes retrouver leur énergie, leur confiance et leur joie de vivre en développant une relation saine avec leur corps et leur alimentation.
              </p>

              <p>
                Mon approche combine rigueur scientifique et bienveillance. Je crois profondément que la transformation durable passe par la compréhension et l'éducation, pas par les restrictions et la culpabilité.
              </p>
            </div>

            {/* Right Column - Timeline & Certifications */}
            <div className="space-y-12">
              {/* Timeline */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-amber-500" />
                  Parcours
                </h3>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-amber-200 last:border-transparent"
                    >
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <milestone.icon className="w-3 h-3 text-amber-600" />
                      </div>
                      <div className="text-sm text-amber-600 font-medium mb-1">
                        {milestone.year}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {milestone.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <GraduationCap className="w-5 h-5 text-amber-500 mt-1" />
                      <span className="text-gray-700">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};