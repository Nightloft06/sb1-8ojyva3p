import React from 'react';
import { Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">MedicareCare</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
            <a href="#plans" className="text-gray-600 hover:text-blue-600">Plans</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}