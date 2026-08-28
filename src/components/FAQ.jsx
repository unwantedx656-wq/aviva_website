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
    <section id="faq" className="w-full max-w-5xl mx-auto mb-10 relative bg-white/80 backdrop-blur-md p-10 xl:p-16 rounded-[3rem] shadow-2xl border border-white/50">
      
      <div className="text-center mb-16 xl:mb-24">
        <h3 className="font-display text-5xl md:text-6xl xl:text-7xl text-[#6B0F1A] tracking-wide relative inline-block drop-shadow-sm">
          Preguntas Frecuentes
          <img src="/assets/heart.svg" alt="Heart" className="absolute -left-16 -top-6 w-12 h-12 xl:w-16 xl:h-16 opacity-60 filter grayscale invert-[25%] sepia-[75%] saturate-[4500%] hue-rotate-[340deg] -rotate-12" />
        </h3>
        <p className="text-[#4A2511] font-medium mt-6 text-xl xl:text-2xl max-w-2xl mx-auto">Todo lo que necesitas saber sobre las galletas Aviva.</p>
      </div>

      <div className="space-y-8">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`bg-white border-2 rounded-[2rem] xl:rounded-[3rem] overflow-hidden transition-all duration-300 shadow-lg
              ${openIndex === idx ? 'border-[#C22026] shadow-[0_15px_40px_rgba(194,32,38,0.15)]' : 'border-[#FDF7E8] hover:border-[#9DB328]/50 hover:shadow-xl'}`}
          >
            <button 
              className="w-full px-8 xl:px-12 py-8 xl:py-10 text-left font-extrabold text-[#4A2511] flex justify-between items-center focus:outline-none group"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className={`text-xl md:text-2xl xl:text-3xl pr-8 transition-colors leading-snug ${openIndex === idx ? 'text-[#C22026]' : 'group-hover:text-[#9DB328]'}`}>
                {faq.q}
              </span>
              <div className={`shrink-0 w-12 h-12 xl:w-16 xl:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-md
                ${openIndex === idx ? 'bg-[#C22026] rotate-180' : 'bg-[#FDF7E8] group-hover:bg-[#9DB328]'}`}
              >
                <ChevronDown className={`w-6 h-6 xl:w-8 xl:h-8 transition-colors ${openIndex === idx ? 'text-white' : 'text-[#6B0F1A] group-hover:text-white'}`} />
              </div>
            </button>
            <div 
              className={`px-8 xl:px-12 overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-b from-white to-[#FDF7E8]/30
                ${openIndex === idx ? 'max-h-64 pb-10 xl:pb-12 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-lg xl:text-xl font-medium text-[#4A2511]/90 leading-relaxed pt-4 border-t-2 border-[#FDF7E8]">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}