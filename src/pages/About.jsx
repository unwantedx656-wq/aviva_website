import React from 'react';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#FDF7E8] min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Título */}
        <div className="text-center mb-16 relative">
          <h1 className="font-display text-5xl md:text-7xl text-[#6B0F1A] tracking-wide relative inline-block">
            Nuestra Historia
            <img src="/assets/heart.svg" alt="Heart" className="absolute -right-12 top-0 w-12 h-12 opacity-60 filter grayscale invert-[25%] sepia-[75%] saturate-[4500%] hue-rotate-[340deg]" />
          </h1>
          <p className="text-xl md:text-2xl text-[#4A2511] font-medium mt-6 max-w-2xl mx-auto">
            Nutrición de alta calidad creada con amor para cuidar el futuro de nuestros niños.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group">
            <div className="absolute inset-0 bg-[#9DB328] rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
            <img 
              src="/assets/hero-plate.jpeg" 
              alt="Galletas Aviva" 
              className="w-full h-auto rounded-[3rem] shadow-2xl relative z-10 border-[8px] border-white group-hover:scale-[1.02] transition-transform duration-500" 
            />
          </div>

          <div className="flex flex-col gap-8 bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#6B0F1A]/10">
            <div>
              <h3 className="font-display text-3xl text-[#6B0F1A] mb-4">¿Cómo nacimos?</h3>
              <p className="text-[#4A2511] leading-relaxed text-lg font-medium opacity-90">
                Las galletas Aviva nacen de la preocupación genuina por los altos índices de anemia en la población infantil. Nuestro equipo se propuso crear un producto que no solo fuera rico, sino también altamente nutritivo, utilizando ingredientes locales como la sangre de pollo y el cacao.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-3xl text-[#6B0F1A] mb-4">Nuestra Misión</h3>
              <p className="text-[#4A2511] leading-relaxed text-lg font-medium opacity-90">
                Proveer nutrición de alta calidad para ayudar a prevenir y combatir la anemia en los niños en etapa escolar. Con ingredientes 100% naturales y elaboradas con amor, las galletas Aviva son el complemento ideal para la lonchera, brindando la energía y los nutrientes que necesitan para rendir al máximo.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-4 bg-[#FDF7E8] p-5 rounded-2xl border border-[#9DB328]/30">
              <div className="bg-[#9DB328] p-3 rounded-xl shadow-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <p className="font-bold text-[#4A2511] text-sm md:text-base uppercase tracking-widest">Comprometidos con el desarrollo infantil</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
