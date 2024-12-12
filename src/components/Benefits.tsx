import React from 'react';
import { Heart, Shield, Clock, DollarSign } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Comprehensive Coverage",
      description: "Get access to a wide network of healthcare providers and specialists"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Guaranteed Protection",
      description: "Stay protected with our reliable Medicare coverage options"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Quick Enrollment",
      description: "Easy and fast enrollment process with expert guidance"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: "Affordable Plans",
      description: "Find the right plan that fits your budget and healthcare needs"
    }
  ];

  return (
    <section id="benefits" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Medicare Plans?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}