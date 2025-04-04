
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-black py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-10 ">Kontakta Oss</h2>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <MapPin size={24} className="text-restaurant-red mr-4 mt-5" />
                <div>
                  <h3 className="text-restaurant-gold font-bold text-lg mb-1">Adress</h3>
                  <p className="text-white">Poseidons Torg 4, 136 46 Handen</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone size={24} className="text-restaurant-red mr-4 mt-1" />
                <div>
                  <h3 className="text-restaurant-gold font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-white">
                    <a href="tel:08-7770754" className="hover:text-restaurant-gold transition-colors">08-777 70 54</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Mail size={24} className="text-restaurant-red mr-4 mt-1" />
                <div>
                  <h3 className="text-restaurant-gold font-bold text-lg mb-1">Email</h3>
                  <p className="text-white">
                    <a href="mailto:info@hengking.se" className="hover:text-restaurant-gold transition-colors">info@hengking.se</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-restaurant-red mr-4 mt-1" />
                <div>
                  <h3 className="text-restaurant-gold font-bold text-lg mb-1">Öppettider</h3>
                  <ul className="text-white space-y-1">
                    <li className="flex justify-between">
                      <span>Måndag - Fredag:</span>
                      <span className="ml-4">10:00 - 21:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Lördag - Söndag:</span>
                      <span className="ml-4">11:00 - 21:30</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Helgdagar:</span>
                      <span className="ml-4">11:00 - 21:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-[400px] border-4 border-restaurant-gold/30">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.4622324622775!2d18.134659!3d59.170117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7bb307a6c603%3A0xdbadaa7b5d0eaa61!2sPoseidons%20torg%204%2C%20136%2046%20Handen!5e0!3m2!1sen!2sse!4v1659123456789!5m2!1sen!2sse" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurang Heng King location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
