import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "¿Las galletas tienen sabor a sangre o hierro?", a: "¡Para nada! Tienen un delicioso sabor a cacao y naranja que a los niños les encanta. Hemos trabajado en una receta donde lo nutritivo también es riquísimo." },
  { q: "¿A partir de qué edad las pueden consumir?", a: "Están formuladas especialmente para niños en etapa escolar, ideales a partir de los 3 años de edad como complemento en sus loncheras o meriendas." },
  { q: "¿Cuántas galletas debo enviarle en la lonchera?", a: "Recomendamos enviar de 2 a 3 galletas diarias para asegurar un aporte significativo de hierro y energía sostenida durante sus clases escolares." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto mb-10 relative">
      <div className="absolute top-0 right-10 w-32 h-32 bg-[#FFD100] rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="text-center mb-16">
        <h3 className="font-display text-4xl md:text-5xl text-[#6B0F1A] tracking-wide relative inline-block">
          Preguntas Frecuentes
          <img src="/assets/heart.svg" alt="Heart" className="absolute -left-12 -top-4 w-10 h-10 opacity-60 filter grayscale invert-[25%] sepia-[75%] saturate-[4500%] hue-rotate-[340deg] -rotate-12" />
        </h3>
        <p className="text-[#4A2511] font-medium mt-4 text-lg">Todo lo que necesitas saber sobre las galletas Aviva.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`bg-white border-2 rounded-[2rem] overflow-hidden transition-all duration-300 shadow-sm
              ${openIndex === idx ? 'border-[#C22026] shadow-[0_10px_30px_rgba(194,32,38,0.1)]' : 'border-[#FDF7E8] hover:border-[#9DB328]/50 hover:shadow-md'}`}
          >
            <button 
              className="w-full px-8 py-6 text-left font-extrabold text-[#4A2511] flex justify-between items-center focus:outline-none group"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className={`text-base md:text-lg transition-colors ${openIndex === idx ? 'text-[#C22026]' : 'group-hover:text-[#9DB328]'}`}>
                {faq.q}
              </span>
              <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                ${openIndex === idx ? 'bg-[#C22026] rotate-180' : 'bg-[#FDF7E8] group-hover:bg-[#9DB328]'}`}
              >
                <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === idx ? 'text-white' : 'text-[#6B0F1A] group-hover:text-white'}`} />
              </div>
            </button>
            <div 
              className={`px-8 overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-b from-white to-[#FDF7E8]/30
                ${openIndex === idx ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[15px] font-medium text-[#4A2511]/80 leading-relaxed pt-2 border-t border-[#FDF7E8]">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}