import React, { useState } from 'react';
import {
  X,
  Menu,
  ChevronDown,
  Globe,
  Search,
  ExternalLink,
} from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import type { LanguageType } from '../../types/index';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../i18n/languages';
import { isMeilisearchEnabled } from '../../lib/meilisearch';
import BetterBalerLogo from '../ui/BetterBalerLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { t, i18n } = useTranslation('common');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveMenu(null);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  const changeLanguage = (newLanguage: LanguageType) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="bg-white shadow-xs sticky top-0 z-50 border-b border-slate-200">
      {/* Official PH Top Flag Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1 px-4 border-b border-slate-800">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Republika ng Pilipinas • Lalawigan ng Aurora • Bayan ng Baler</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://bettergov.ph/join-us"
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              🚀 Join #CivicTech
            </a>
            <a
              href="https://baler.gov.ph"
              className="text-xs text-slate-300 hover:text-white transition-colors hidden sm:inline-flex items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              Official baler.gov.ph <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://www.gov.ph"
              className="text-xs text-slate-300 hover:text-white transition-colors hidden md:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              GOV.PH
            </a>
            <div className="flex items-center gap-1">
              <Globe className="h-3.5 w-3.5 text-slate-400" />
              <select
                value={i18n.language}
                onChange={e => changeLanguage(e.target.value as LanguageType)}
                className="text-[11px] border border-slate-700 rounded px-1.5 py-0.5 bg-slate-800 text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary-500 cursor-pointer"
              >
                {Object.entries(LANGUAGES).map(([code, lang]) => (
                  <option key={code} value={code}>
                    {lang.nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main header navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group py-1">
              <BetterBalerLogo height={62} className="shrink-0 transition-transform group-hover:scale-105" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainNavigation.map(item => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <Link
                    to={item.href}
                    className="flex items-center text-slate-700 hover:text-primary-600 font-semibold text-sm transition-colors py-2"
                  >
                    {t(`navbar.${item.label.replace(' ', '').toLowerCase()}`, item.label)}
                    <ChevronDown className="ml-1 h-4 w-4 text-slate-400 group-hover:text-primary-600 transition-colors" />
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center text-slate-700 hover:text-primary-600 font-semibold text-sm transition-colors py-2"
                  >
                    {t(`navbar.${item.label.replace(' ', '').toLowerCase()}`, item.label)}
                  </Link>
                )}
                {item.children && (
                  <div className="absolute left-0 mt-1 w-64 rounded-xl shadow-lg bg-white border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 p-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                      {item.label} Categories
                    </div>
                    {item.children.map(child => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="text-left block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/about"
              className="flex items-center text-slate-700 hover:text-primary-600 font-semibold text-sm transition-colors"
            >
              About
            </Link>

            {isMeilisearchEnabled && (
              <Link
                to="/search"
                className="flex items-center text-slate-700 hover:text-primary-600 font-semibold text-sm transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg"
              >
                <Search className="h-4 w-4 mr-1 text-slate-500" />
                Search
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-primary-600 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          {mainNavigation.map(item => (
            <div key={item.label}>
              {item.children ? (
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="w-full flex justify-between items-center px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
                >
                  {t(`navbar.${item.label.toLowerCase()}`, item.label)}
                  <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform ${
                      activeMenu === item.label ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={item.href}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
                >
                  {t(`navbar.${item.label.toLowerCase()}`, item.label)}
                </Link>
              )}
              {item.children && activeMenu === item.label && (
                <div className="pl-4 py-1 space-y-1 border-l-2 border-primary-200 my-1">
                  {item.children.map(child => (
                    <Link
                      key={child.label}
                      to={child.href}
                      onClick={closeMenu}
                      className="block px-3 py-1.5 text-xs text-slate-600 hover:text-primary-600 font-medium"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/about"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            About Baler Portal
          </Link>
          <a
            href="https://bettergov.ph/join-us"
            target="_blank"
            rel="noreferrer"
            className="block px-3 py-2 text-sm font-bold text-primary-700 bg-primary-50 rounded-lg mt-2"
          >
            🚀 Join #CivicTech Revolution
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
