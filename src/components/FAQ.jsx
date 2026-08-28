import { useState } from 'react';

const faqs = [
  { q: "¿Las galletas tienen sabor a sangre o hierro?", a: "¡Para nada! Tienen un delicioso sabor a cacao y naranja que a los niños les encanta. Hemos trabajado en una receta donde lo nutritivo también es riquísimo." },
  { q: "¿A partir de qué edad las pueden consumir?", a: "Están formuladas especialmente para niños en etapa escolar, ideales a partir de los 3 años de edad como complemento en sus loncheras o meriendas." },
  { q: "¿Cuántas galletas debo enviarle en la lonchera?", a: "Recomendamos enviar de 2 a 3 galletas diarias para asegurar un aporte significativo de hierro y energía sostenida durante sus clases escolares." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 px-8 max-w-3xl mx-auto mb-10">
      <h3 className="font-display text-3xl md:text-4xl text-aviva-darkRed text-center mb-12">Preguntas Frecuentes</h3>
      <div className="space-y-5">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border-2 border-aviva-cream rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <button 
              className="w-full px-8 py-5 text-left font-extrabold text-aviva-textDark flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.q}
              <span className={`text-aviva-brandRed text-3xl transform transition-transform duration-500 ease-in-out ${openIndex === idx ? 'rotate-180' : ''}`}>
                +
              </span>
            </button>
            <div 
              className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[15px] font-medium text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}