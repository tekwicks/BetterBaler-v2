import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { footerNavigation } from '../../data/navigation';
import { Link } from 'react-router';
import BetterBalerLogo from '../ui/BetterBalerLogo';

const Footer: React.FC = () => {
  const getSocialIcon = (label: string) => {
    switch (label) {
      case 'Facebook':
        return <Facebook className="h-4 w-4" />;
      case 'Twitter':
        return <Twitter className="h-4 w-4" />;
      case 'Instagram':
        return <Instagram className="h-4 w-4" />;
      case 'YouTube':
        return <Youtube className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BetterBalerLogo variant="dark" height={52} />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              A community-run civic portal for the Municipality of Baler. Providing citizens, local entrepreneurs, and visitors with accessible information, municipal guides, and coastal updates.
            </p>

            <div className="space-y-2 text-xs text-slate-300 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary-400 shrink-0" />
                <span>Municipal Hall, Poblacion, Baler, Aurora 3200</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary-400 shrink-0" />
                <span>MDRRMO Hotline: 0920-594-1906</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary-400 shrink-0" />
                <span>info@baler.gov.ph</span>
              </div>
            </div>

            <div className="flex space-x-3">
              {footerNavigation.socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {getSocialIcon(link.label)}
                </a>
              ))}
            </div>
          </div>

          {footerNavigation.mainSections.map(section => (
            <div key={section.title}>
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 border-b border-slate-800/80 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-primary-300 text-xs transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-primary-300 text-xs transition-colors block py-0.5"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary-500" />
            <span>© 2026 Better Baler. Community-powered open data initiative under #BetterGovPH.</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/bettergovph/bettergov"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Open Source GitHub
            </a>
            <a
              href="https://data.gov.ph"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Philippine Open Data
            </a>
            <a
              href="https://www.foi.gov.ph"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              FOI Philippines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
