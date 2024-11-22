import React from 'react';
import { Calendar } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Calendar className="h-12 w-12 mx-auto mb-6 text-blue-600" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Your Consultation</h2>
        <p className="text-gray-600 text-lg mb-8">
          Take the first step towards securing your financial future. Book a personal consultation with our expert team.
        </p>
        <a 
          href="https://calendly.com/risknumber-savemyretirement/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
        >
          Make an Appointment
        </a>
      </div>
    </section>
  );
}