
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-restaurant-black text-white relative z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-restaurant-gold text-xl md:text-3xl font-bold tracking-wider">
              <span className="text-restaurant-red">H</span>eng <span className="text-restaurant-red">K</span>ing
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-restaurant-gold transition-colors">Hem</Link>
          <Link to="/menu" className="hover:text-restaurant-gold transition-colors">Meny</Link>
          <button 
            onClick={() => {
              const buffetSection = document.getElementById("buffet");
              if (buffetSection) {
                buffetSection.scrollIntoView({ behavior: "smooth" });
              } 
            }}
           className="hover:text-restaurant-gold transition-colors">
            Buffé
           </button>
          <button 
            onClick={() => {
              const buffetSection = document.getElementById("contact");
              if (buffetSection) {
                buffetSection.scrollIntoView({ behavior: "smooth" });
              } 
            }}
           className="hover:text-restaurant-gold transition-colors">
            Kontakt
          </button>
          <a 
            href="tel:08-7770754" 
            className="bg-restaurant-red hover:bg-restaurant-red/80 px-4 py-2 rounded-md transition-colors"
          >
            08-777 70 54
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-restaurant-black py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <Link to="/" className="py-2 hover:text-restaurant-gold transition-colors">Hem</Link>
          <Link to="/menu" className="py-2 hover:text-restaurant-gold transition-colors">Meny</Link>
          <button 
            onClick={() => {
              const buffetSection = document.getElementById("buffet");
              if (buffetSection) {
                buffetSection.scrollIntoView({ behavior: "smooth" });
              } 
            }}
            className="py-2 hover:text-restaurant-gold transition-colors text-left">
            Buffé
           </button>
          <button 
            onClick={() => {
              const buffetSection = document.getElementById("contact");
              if (buffetSection) {
                buffetSection.scrollIntoView({ behavior: "smooth" });
              } 
            }}
            className="py-2 hover:text-restaurant-gold transition-colors text-left">
              Kontakt
           </button>
          <a 
            href="tel:08-7770754" 
            className="bg-restaurant-red hover:bg-restaurant-red/80 px-4 py-2 rounded-md transition-colors inline-block text-center"
          >
            08-777 70 54
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
