import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Heart, Sparkles, ArrowRight } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  { icon: Mail, href: '#', label: 'Email', color: 'hover:bg-red-500' },
];

const footerLinks = [
  {
    title: 'Programme',
    links: [
      { label: 'Comment ça marche', href: '#' },
      { label: 'Pour qui ?', href: '#' },
      { label: 'Témoignages', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Tarifs', href: '#' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Blog nutrition', href: '#' },
      { label: 'Recettes healthy', href: '#' },
      { label: 'Guide gratuit', href: '#' },
      { label: 'Podcast', href: '#' },
      { label: 'Newsletter', href: '#' },
    ],
  },
  {
    title: 'À propos',
    links: [
      { label: 'Eva Vacheau', href: '#' },
      { label: 'Notre mission', href: '#' },
      { label: 'Certifications', href: '#' },
      { label: 'Avis clients', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '#' },
      { label: 'CGV', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.05),transparent_50%)]"></div>

      {/* Pre-footer CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Prête à commencer ?</h3>
                <p className="text-stone-400">Transforme ta relation avec l'alimentation</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Je commence maintenant
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <motion.a
                href="#"
                className="text-2xl font-bold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-6 h-6 text-amber-400" />
                Eva Vacheau
              </motion.a>
              <p className="mt-4 text-stone-400 leading-relaxed">
                Naturopathe & coach nutrition, j'aide les femmes à transformer leur relation avec l'alimentation pour retrouver énergie, confiance et bien-être.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <p className="text-stone-300 font-medium">Suivez-moi</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center text-stone-400 ${social.color} hover:text-white transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-stone-300 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-stone-400 hover:text-amber-400 transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-400 text-sm">
              © {new Date().getFullYear()} Eva Vacheau. Tous droits réservés.
            </p>
            <div className="flex items-center gap-8 text-sm text-stone-400">
              <span>SIRET: 123 456 789 00012</span>
              <span>Paris, France</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};