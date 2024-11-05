import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Forensische Medizin auf höchstem Niveau
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Expertise und Präzision in der medizinischen Begutachtung. 
            Über 20 Jahre Erfahrung in der forensischen Medizin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors group"
            >
              Termin vereinbaren
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;