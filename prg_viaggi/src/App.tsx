import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import { MapPin, Clock, Users, Star } from 'lucide-react';

function MainContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Italy landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl mb-8">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Tailor-Made Section */}
      <section id="tailored" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">{t('tailored.title')}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">{t('tailored.description')}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t('tailored.features').map((feature: string, index: number) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  {index === 0 && <MapPin className="h-6 w-6 text-blue-600" />}
                  {index === 1 && <Users className="h-6 w-6 text-blue-600" />}
                  {index === 2 && <Star className="h-6 w-6 text-blue-600" />}
                  {index === 3 && <Clock className="h-6 w-6 text-blue-600" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">{t('packages.title')}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">{t('packages.description')}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t('packages.items').map((item: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${index === 0 ? '1523531294919-4bcd7c65e216' : index === 1 ? '1533165427177-15d3d9a0b665' : '1516483638261-f4dbaf036963'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.duration}</p>
                  <p className="text-2xl font-bold text-blue-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Section */}
      <section id="club" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">{t('club.title')}</h2>
          <p className="text-xl text-center mb-12">{t('club.description')}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t('club.benefits').map((benefit: string, index: number) => (
              <div key={index} className="p-6 bg-white/10 rounded-lg text-center">
                <h3 className="text-lg font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">{t('contact.description')}</p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('contact.form.name')}</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('contact.form.email')}</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('contact.form.message')}</label>
              <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                {t('contact.form.submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;