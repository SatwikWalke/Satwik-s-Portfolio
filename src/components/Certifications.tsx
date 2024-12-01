import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-20 bg-white" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">Add Your Certification</h3>
            </div>
            <p className="text-gray-600">
              Click to add your certification details including the issuing organization and date of completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}