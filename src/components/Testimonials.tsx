
import React from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  rating: number;
  text: string;
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Anna L.",
      rating: 5,
      text: "Fantastisk mat och service! Buffén är alltid fräsch och det finns många olika rätter att välja mellan. Personalen är mycket trevlig och uppmärksam."
    },
    {
      name: "Johan S.",
      rating: 4,
      text: "Bra prisvärd buffé med gott utbud. Mysig atmosfär och vänlig personal. Kommer definitivt att besöka igen."
    },
    {
      name: "Maria K.",
      rating: 5,
      text: "Heng King är min favorit kinesiska restaurang i området. Maten är autentisk och smakerna är fantastiska. Rekommenderas varmt!"
    }
  ];

  return (
    <section className="bg-restaurant-black py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Vad våra gäster säger</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-black p-6 rounded-lg border border-restaurant-gold/20 hover:border-restaurant-gold/50 transition-all"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-restaurant-gold" : "text-gray-600"} 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-white mb-4 italic">"{testimonial.text}"</p>
              <p className="text-restaurant-gold font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
