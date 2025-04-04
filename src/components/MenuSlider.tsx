
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MenuSlider: React.FC = () => {
  const galleryImages = [
    "public/lovable-uploads/fd4f3abc-455b-4b4d-8389-1f3f848a948d.png",
    "public/lovable-uploads/37b03452-72dc-46fc-a031-7710c1b7bf1b.png",
    "public/lovable-uploads/55cc527d-6ad2-4447-8352-6f3bd2f16e9d.png",
    "public/lovable-uploads/67d40039-46eb-4ec9-b124-51223fe41681.png",
    "public/lovable-uploads/b308f77d-5450-45d7-8e77-22abdd8e5157.png",
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-10">Vår Populära Buffé</h2>
        
        <p className="text-white text-center max-w-2xl mx-auto mb-12">
          Upptäck vårt breda utbud av färska och läckra rätter från vår buffé. 
          Här kan du välja bland många traditionella och moderna asiatiska specialiteter.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg aspect-video bg-black relative group">
                      <img
                        src={image}
                        alt={`Buffé bild ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <div className="font-serif text-xl text-restaurant-gold font-medium">
                            {index === 0 && "Traditionella Rätter"}
                            {index === 1 && "Sushi & Sashimi"}
                            {index === 2 && "Färska Ingredienser"}
                            {index === 3 && "Wok & Grillrätter"}
                            {index === 4 && "Desserter & Efterrätter"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-restaurant-gold/90 hover:bg-restaurant-gold text-restaurant-black border-none" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-restaurant-gold/90 hover:bg-restaurant-gold text-restaurant-black border-none" />
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="bg-restaurant-red/90 text-white rounded-md py-3 px-6 inline-flex items-center gap-2 hover:bg-restaurant-red transition-colors">
            <span className="font-medium">Besök oss för en unik kulinarisk upplevelse</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSlider;
