
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BuffetTimes from '../components/BuffetTimes';
import BuffetGallery from '../components/BuffetGallery';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <div className="py-8 bg-restaurant-gold">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-restaurant-black font-medium text-lg md:text-xl">
            Traditionell asiatisk restaurang med populär buffé och à la carte. Vi erbjuder en kulinarisk resa genom det asiatiska köket.
          </p>
        </div>
      </div>
      <BuffetTimes />
      <BuffetGallery />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
