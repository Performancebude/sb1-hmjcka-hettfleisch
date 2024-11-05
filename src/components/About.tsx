import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
              alt="Dr. med. Portrait"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dr. med. Johannes Schmidt
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Mit über 20 Jahren Erfahrung in der forensischen Medizin biete ich 
              fundierte Expertise in der medizinischen Begutachtung und Beratung.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Qualifikationen</h3>
                  <p className="text-gray-600">Facharzt für Rechtsmedizin, zertifizierter Gutachter</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Publikationen</h3>
                  <p className="text-gray-600">Über 50 Fachpublikationen in renommierten Journals</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Mitgliedschaften</h3>
                  <p className="text-gray-600">Deutsche Gesellschaft für Rechtsmedizin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;