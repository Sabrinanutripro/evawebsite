import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const socialProof = [
  { avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
];

export const HeroSection = () => {
  const handleStartClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 md:pt-24">
      {/* Background Image with Mobile Optimization */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile-optimized image */}
          <source
            media="(max-width: 768px)"
            srcSet="https://26.staticbtf.eno.do/v1/20-default/7747a2ba7f7c8da8b3b76aa277cbd87b/mobile.jpg"
          />
          {/* Desktop image */}
          <img
            src="https://26.staticbtf.eno.do/v1/20-default/7747a2ba7f7c8da8b3b76aa277cbd87b/media.jpg"
            alt="Eva Vacheau"
            className="w-full h-full object-cover object-center md:object-right"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container relative z-20">
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left px-4 md:px-8 py-8 md:py-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 md:mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-white/90 text-sm font-medium">Méthode Stop aux 30 erreurs</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-montserrat text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
          >
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
              <span className="text-white drop-shadow-lg">Révélez</span>
              <span className="text-white drop-shadow-lg">votre meilleure</span>
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                version
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-base md:text-xl max-w-xl mb-6 md:mb-8 drop-shadow-lg leading-relaxed"
          >
            Un programme pour les femmes ambitieuses qui veulent transformer leur corps et rayonner de confiance.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartClick}
            className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-[0_8px_32px_rgba(251,191,36,0.25)] hover:shadow-[0_16px_48px_rgba(251,191,36,0.35)] transition-all mb-6 md:mb-12 inline-flex items-center justify-center gap-3"
          >
            Je commence ma transformation
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-3 md:gap-4"
          >
            <div className="flex -space-x-3 md:-space-x-4">
              {socialProof.map((profile, index) => (
                <img
                  key={index}
                  src={profile.avatar}
                  alt="Profile"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-white/90 text-xs md:text-sm drop-shadow-lg">
              Déjà suivi par <span className="text-amber-500 font-semibold">plus de 1000</span> femmes inspirantes
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator hidden md:block"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
        </motion.div>
      </div>
    </section>
  );
};