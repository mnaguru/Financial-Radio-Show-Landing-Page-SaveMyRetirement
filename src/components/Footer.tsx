import React from 'react';
import { Radio } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Radio className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold text-white">SaveMyRetirement Radio</span>
            </div>
            <p className="text-sm">
              Your trusted source for financial wisdom and market insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>contact@savemyretirement.com</li>
              <li>1-866-728-3697</li>
              <li>Mon-Fri: 9AM-5PM EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SaveMyRetirement Radio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}