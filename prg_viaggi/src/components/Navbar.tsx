import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold">Italia Tours</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">{t('nav.home')}</a>
            <a href="#tailored" className="text-gray-700 hover:text-blue-600">{t('nav.tailored')}</a>
            <a href="#packages" className="text-gray-700 hover:text-blue-600">{t('nav.packages')}</a>
            <a href="#club" className="text-gray-700 hover:text-blue-600">{t('nav.club')}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">{t('nav.contact')}</a>
            
            <button
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              {language === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}