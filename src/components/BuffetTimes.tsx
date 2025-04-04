
import React from 'react';

type BuffetTime = {
  title: string;
  subtitle: string;
  time: string;
  price: string;
  weekend?: string;
};

const BuffetTimes: React.FC = () => {
  const buffetTimes: BuffetTime[] = [
    {
      title: "LUNCHBUFFÉ",
      subtitle: "Vardagar lunch serveras mellan:",
      time: "10:00-15:00",
      price: "135 SEK/person"
    },
    {
      title: "HELG LUNCHBUFFÉ",
      subtitle: "Helg lunch serveras mellan:",
      time: "11:00-15:00",
      price: "175 SEK/person"
    },
    {
      title: "KVÄLLSBUFFÉ",
      subtitle: "Serveras mellan:",
      time: "15:00-21:00",
      price: "175 SEK/person",
      weekend: "185 (helg) SEK/person"
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Buffétider &amp; Priser</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {buffetTimes.map((item, index) => (
            <div key={index} className="bg-restaurant-black/30 p-6 rounded-lg border border-restaurant-gold/30 hover:border-restaurant-gold transition-all">
              <h3 className="font-serif text-restaurant-gold text-2xl font-bold text-center mb-2">{item.title}</h3>
              <p className="text-white opacity-80 text-center mb-6">{item.subtitle}</p>
              
              <div className="bg-restaurant-black/40 rounded-md p-4 text-center mb-4">
                <div className="text-white text-xl font-bold">{item.time}</div>
              </div>
              
              <div className="bg-restaurant-red/90 rounded-md p-3 text-center">
                <div className="text-white text-xl font-bold">{item.price}</div>
                {item.weekend && (
                  <div className="text-white text-sm mt-1">eller {item.weekend}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuffetTimes;
