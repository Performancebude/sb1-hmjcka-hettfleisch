import React from 'react';
import { Stethoscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">MedExpert</span>
            </div>
            <p className="text-sm">
              Ihre vertrauenswürdige Adresse für forensisch-medizinische Expertise
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Startseite</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Über uns</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Leistungen</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AGB</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sprechzeiten</h3>
            <ul className="space-y-2 text-sm">
              <li>Mo - Fr: 09:00 - 17:00</li>
              <li>Sa: Nach Vereinbarung</li>
              <li>So: Geschlossen</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MedExpert. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;