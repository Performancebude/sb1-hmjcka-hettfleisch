import React from 'react';
import { Scale, FileText, Microscope, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: 'Gutachten',
      description: 'Erstellung von medizinischen Gutachten für Gerichte und Versicherungen',
    },
    {
      icon: FileText,
      title: 'Beratung',
      description: 'Fachliche Beratung in komplexen medizinisch-rechtlichen Fällen',
    },
    {
      icon: Microscope,
      title: 'Analyse',
      description: 'Detaillierte Analyse von medizinischen Dokumenten und Befunden',
    },
    {
      icon: Briefcase,
      title: 'Sachverständiger',
      description: 'Tätigkeit als medizinischer Sachverständiger vor Gericht',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir bieten ein umfassendes Spektrum an forensisch-medizinischen Dienstleistungen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;