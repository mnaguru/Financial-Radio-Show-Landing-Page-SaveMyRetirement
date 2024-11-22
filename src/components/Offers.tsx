import React from 'react';
import { BarChart2, Receipt, PiggyBank } from 'lucide-react';

export default function Offers() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-800 rounded-xl p-8 text-center hover:bg-blue-700 transition">
            <BarChart2 className="h-12 w-12 mx-auto mb-6 text-yellow-500" />
            <h3 className="text-xl font-bold mb-4">What is My Risk Number?</h3>
            <p className="text-blue-100 mb-12">Discover your personal risk tolerance and align your investments accordingly</p>
            <a
              href="https://whatismyrisknumber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition w-full inline-block"
            >
              Check Now
            </a>
          </div>
          
          <div className="bg-blue-800 rounded-xl p-8 text-center transform scale-105 shadow-xl hover:bg-blue-700 transition">
            <Receipt className="h-12 w-12 mx-auto mb-6 text-yellow-500" />
            <h3 className="text-xl font-bold mb-4">Professional Tax Return Preparation</h3>
            <p className="text-blue-100 mb-6">Expert tax preparation services tailored to your financial situation</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">$89</span>
              <span className="text-blue-200"> Age 50 and over</span>
            </div>
            <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition w-full">
              Make an Appointment
            </button>
          </div>
          
          <div className="bg-blue-800 rounded-xl p-8 text-center hover:bg-blue-700 transition">
            <PiggyBank className="h-12 w-12 mx-auto mb-6 text-yellow-500" />
            <h3 className="text-xl font-bold mb-4">Get Guaranteed Future Income</h3>
            <p className="text-blue-100 mb-6">Secure your retirement with a guaranteed income stream for life</p>
            <div className="mb-6">
              <span className="text-xl font-bold">Get 15% income you cannot outlive</span>
            </div>
            <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition w-full">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}