import React from 'react';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo CDN con Blur */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-[#FDF7E8]/30"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-8 py-24 xl:py-32 flex flex-col items-center">
        
        {/* Título Principal */}
        <div className="text-center mb-16 xl:mb-24 relative">
          <h1 className="font-display text-5xl md:text-6xl xl:text-7xl text-[#6B0F1A] mb-6 drop-shadow-sm">Sobre Aviva</h1>
          <p className="text-xl xl:text-2xl font-medium text-[#4A2511] max-w-4xl mx-auto leading-relaxed">
            Nacimos con un propósito claro: combatir la anemia infantil y nutrir el futuro de los niños.
          </p>
          <img src="/assets/heart.svg" className="absolute -right-12 -top-8 w-16 h-16 xl:w-20 xl:h-20 opacity-40 rotate-12 filter grayscale invert-[25%] sepia-[75%] saturate-[4500%] hue-rotate-[340deg]" alt="decoration" />
        </div>

        {/* Tarjetas de Información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-20 xl:mb-32">
          
          {/* Tarjeta: El Problema */}
          <div className="bg-white/90 backdrop-blur-sm p-12 xl:p-16 rounded-[3rem] border border-[#6B0F1A]/10 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C22026] rounded-bl-[100%] opacity-5 group-hover:scale-110 transition-transform duration-500"></div>
            <h2 className="font-display text-3xl xl:text-4xl text-[#C22026] mb-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-[#FDF7E8] text-[#C22026] flex items-center justify-center text-2xl">!</span>
              El Problema
            </h2>
            <p className="text-[#4A2511] font-medium leading-relaxed text-lg xl:text-xl">
              La anemia es un desafío silencioso que afecta la concentración, energía y desarrollo escolar de millones de niños. Muchas soluciones actuales son difíciles de incorporar en su dieta diaria debido al sabor.
            </p>
          </div>

          {/* Tarjeta: Nuestra Solución */}
          <div className="bg-[#6B0F1A]/95 backdrop-blur-sm p-12 xl:p-16 rounded-[3rem] text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFD100] rounded-tr-[100%] opacity-10 group-hover:scale-110 transition-transform duration-500"></div>
            <h2 className="font-display text-3xl xl:text-4xl text-[#FFD100] mb-6 flex items-center gap-4">
              <Heart className="w-10 h-10 fill-[#FFD100]" />
              Nuestra Solución
            </h2>
            <p className="font-medium leading-relaxed text-lg xl:text-xl text-white/90">
              Transformamos la nutrición en algo delicioso. Usamos sangre de pollo y naranja para garantizar alta absorción de hierro, presentados en una galleta sabor a cacao que los niños aman llevar en su lonchera.
            </p>
          </div>
          
        </div>

        {/* Sección de Compromiso Centrada */}
        <div className="w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-[3rem] p-16 xl:p-24 shadow-2xl border-4 border-[#FDF7E8] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD100]/10 via-transparent to-transparent -z-10"></div>
          
          <h2 className="font-display text-4xl xl:text-5xl text-[#6B0F1A] mb-10">Comprometidos con el desarrollo infantil</h2>
          <p className="text-[#4A2511] text-xl xl:text-2xl font-bold leading-relaxed mb-8 max-w-4xl mx-auto text-justify [text-align-last:center]">
            Nuestra visión es que ninguna niña o niño vea su potencial limitado por la falta de nutrientes. Trabajamos cada día para que más familias tengan acceso a un producto hecho con rigor científico, impacto social y, sobre todo, mucho corazón.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <div className="flex items-center gap-3 bg-[#FDF7E8] px-6 py-3 rounded-full text-[#6B0F1A] font-bold text-lg">
              <img src="/assets/check.svg" className="w-6 h-6 filter invert-[25%] sepia-[75%] saturate-[4500%] hue-rotate-[340deg]" alt="check" />
              Nutrición
            </div>
            <div className="flex items-center gap-3 bg-[#FDF7E8] px-6 py-3 rounded-full text-[#6B0F1A] font-bold text-lg">
              <img src="/assets/check.svg" className="w-6 h-6 filter invert-[25%] sepia-[75%] saturate-[4500%] hue-rotate-[340deg]" alt="check" />
              Sabor
            </div>
            <div className="flex items-center gap-3 bg-[#FDF7E8] px-6 py-3 rounded-full text-[#6B0F1A] font-bold text-lg">
              <img src="/assets/check.svg" className="w-6 h-6 filter invert-[25%] sepia-[75%] saturate-[4500%] hue-rotate-[340deg]" alt="check" />
              Impacto
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
