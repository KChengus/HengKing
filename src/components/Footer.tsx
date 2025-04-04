
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-restaurant-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-restaurant-gold mb-4">Restaurang Heng King</h3>
            <p className="mb-4 opacity-90">Traditionell asiatisk restaurang med populär buffé och à la carte. Vi erbjuder smaker du älskar i en avslappnad och välkomnande miljö.</p>
            <div className="flex space-x-3">
              <a href="https://instagram.com" className="text-restaurant-gold hover:text-restaurant-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-restaurant-gold hover:text-restaurant-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold text-restaurant-gold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="text-restaurant-red mr-2" />
                <span>Poseidons Torg 4, 136 46 Handen</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-restaurant-red mr-2" />
                <a href="tel:08-7770754" className="hover:text-restaurant-gold transition-colors">08-777 70 54</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-restaurant-red mr-2" />
                <a href="mailto:info@hengking.se" className="hover:text-restaurant-gold transition-colors">info@hengking.se</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold text-restaurant-gold mb-4">Öppettider</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Måndag - Fredag:</span>
                <span>10:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lördag - Söndag:</span>
                <span>11:00 - 21:30</span>
              </li>
              <li className="flex justify-between">
                <span>Helgdagar:</span>
                <span>11:00 - 21:00</span>
              </li>
            </ul>
            <div className="mt-4">
              <Clock size={18} className="text-restaurant-red inline-block mr-2" />
              <span className="text-restaurant-gold">Lunchtider: 10:00 - 15:00</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <div className="mb-4 flex justify-center space-x-4">
            <Link to="/" className="hover:text-restaurant-gold transition-colors">Hem</Link>
            <Link to="/menu" className="hover:text-restaurant-gold transition-colors">Meny</Link>
            <Link to="/buffe" className="hover:text-restaurant-gold transition-colors">Buffé</Link>
            <Link to="/om-oss" className="hover:text-restaurant-gold transition-colors">Om Oss</Link>
            <Link to="/kontakt" className="hover:text-restaurant-gold transition-colors">Kontakt</Link>
          </div>
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Restaurang Heng King. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
