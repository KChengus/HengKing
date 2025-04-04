
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-black h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('public/lovable-uploads/67d40039-46eb-4ec9-b124-51223fe41681.png')",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-6 text-shadow animate-fade-in">
            Välkommen till <span className="text-restaurant-red">Heng</span> <span className="text-restaurant-gold">King</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Vi erbjuder en autentisk asiatisk matupplevelse med delikat buffé och à la carte-rätter i en avslappnad och välkomnande miljö.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button 
              onClick={() => navigate("/buffe")}
              className="bg-restaurant-red hover:bg-restaurant-red/90 text-white px-6 py-3 rounded-md transition-colors text-lg"
            >
              Utforska vår buffé
            </button>
            <button 
              onClick={() => navigate("/kontakt")}
              className="bg-transparent hover:bg-restaurant-gold/10 text-white border-2 border-restaurant-gold px-6 py-3 rounded-md transition-colors text-lg"
            >
              Kontakta oss
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32" />
    </div>
  );
};

export default Hero;
