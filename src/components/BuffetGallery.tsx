
import React from 'react';

const BuffetGallery: React.FC = () => {
  const buffetImages = [
    "/Buffee/buffee-cafe.jpg",
    "/Buffee/buffee1.jpg",
    "/Buffee/buffee2.jpg",
    "/Buffee/buffee3.jpg",
    "/Buffee/buffee4.jpg",
    "/Buffee/buffee5.jpg",
    "/Buffee/buffee6.jpg",
    "/Buffee/buffee7.jpg",
  ];

  return (
    <section id="buffet" className="bg-black py-16">
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
