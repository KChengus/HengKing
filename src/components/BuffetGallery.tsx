
import React from 'react';

const BuffetGallery: React.FC = () => {
  const buffetImages = [
    "public/lovable-uploads/37b03452-72dc-46fc-a031-7710c1b7bf1b.png",
    "public/lovable-uploads/55cc527d-6ad2-4447-8352-6f3bd2f16e9d.png",
    "public/lovable-uploads/67d40039-46eb-4ec9-b124-51223fe41681.png",
    "public/lovable-uploads/b308f77d-5450-45d7-8e77-22abdd8e5157.png",
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Vår Buffé</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {buffetImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-video group">
              <img
                src={image}
                alt={`Buffé bild ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-serif text-xl font-bold">Våra Delikata Rätter</h3>
                  <p className="text-white/90">Färska och autentiska smaker från det asiatiska köket</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white text-lg max-w-2xl mx-auto">
            Vår buffé erbjuder ett brett utbud av autentiska asiatiska rätter, inklusive populära kinesiska specialiteter, 
            fräscha sallader och olika varmrätter. Allt tillagas med de finaste och fräschaste ingredienserna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuffetGallery;
