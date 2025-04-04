
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
    "/Restaurant/sit1.jpg",
    "/Restaurant/sit2.jpg",
    "/Restaurant/rest_bar.jpg",
    "/Restaurant/outside.jpg",
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-10">Galleri</h2>
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
                            {index === 0 && "Sitplats"}
                            {index === 1 && "Sitplats"}
                            {index === 2 && "Restaurang Bar"}
                            {index === 3 && "Ingång"}
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
        
      </div>
    </section>
  );
};

export default MenuSlider;
