import React from 'react';
import Header from './components/Header';
import HostBio from './components/HostBio';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HostBio />
      <Offers />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;