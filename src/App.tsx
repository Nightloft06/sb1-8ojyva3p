import React from 'react';
import { Header } from './components/Header';
import { LeadForm } from './components/LeadForm';
import { Benefits } from './components/Benefits';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
            alt="Senior couple"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">
                Find the Right Medicare Coverage for Your Needs
              </h1>
              <p className="text-xl text-white mb-8">
                Compare Medicare plans and get expert guidance to make the best choice for your health and budget.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="#plans"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <Benefits />

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Trusted By Thousands of Medicare Recipients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">10k+</span>
              <span className="text-gray-600">Satisfied Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">98%</span>
              <span className="text-gray-600">Customer Satisfaction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">24/7</span>
              <span className="text-gray-600">Support Available</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">50+</span>
              <span className="text-gray-600">Insurance Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We help seniors find the right Medicare coverage for their specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#benefits" className="text-gray-400 hover:text-white">Benefits</a></li>
                <li><a href="#plans" className="text-gray-400 hover:text-white">Plans</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">1-800-MEDICARE</p>
              <p className="text-gray-400">support@medicareprovider.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 MedicareCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;