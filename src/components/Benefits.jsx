import { Heart } from 'lucide-react';
import { benefitsStats } from '../data/content';

export default function Benefits() {
  return (
    <section id="beneficios" className="max-w-[85rem] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
      
      {/* Fondo curvo decorativo (simulado) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[#FDF7E8] -z-10 rounded-[100px] blur-sm opacity-50"></div>

      {/* Columna 1: ¿Por qué Aviva? */}
      <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#C22026]/10 flex flex-col justify-between group relative overflow-hidden">
        
        {/* Título y Texto */}
        <div className="relative z-10">
          <h3 className="font-display text-2xl lg:text-3xl text-[#6B0F1A] mb-5 tracking-wide">
            ¿POR QUÉ AVIVA?
          </h3>
          <p className="text-[13.5px] font-medium text-[#4A2511] leading-relaxed mb-8">
            En Aviva creemos que una buena nutrición puede transformar el presente y el futuro de nuestros niños. Por eso creamos galletas ricas, naturales y nutritivas que los ayudan a crecer fuertes, sanos y llenos de energía.
          </p>
        </div>
        
        {/* Etiqueta Verde Inferior */}
        <div className="bg-[#9DB328] text-white p-4 rounded-xl flex items-center justify-center gap-3 relative z-10 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 mt-20">
           <Heart className="w-5 h-5 fill-white" />
           <p className="text-xs font-bold leading-tight tracking-wide">HECHAS CON AMOR,<br/>PENSADAS PARA SU BIENESTAR.</p>
        </div>

        {/* Imagen Niños */}
        <div className="absolute right-0 -bottom-6 w-56 h-56 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none origin-bottom group-hover:scale-105">
           <img src="/assets/niños.png" alt="Niños fuertes" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Columna 2: Beneficios Centrales */}
      <div className="flex flex-col justify-start pt-4 px-2">
        <div className="flex items-center justify-center gap-4 mb-10">
          <img src="/assets/heart.svg" alt="leaf" className="w-4 h-4 filter invert-[50%] sepia-[60%] saturate-[1000%] hue-rotate-[40deg]" />
          <h3 className="text-[#C22026] font-extrabold tracking-widest text-sm lg:text-base uppercase">Beneficios para su futuro</h3>
          <img src="/assets/heart.svg" alt="leaf" className="w-4 h-4 filter invert-[50%] sepia-[60%] saturate-[1000%] hue-rotate-[40deg] scale-x-[-1]" />
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
           {benefitsStats.map((stat) => (
             <div key={stat.id} className="flex flex-col items-center text-center group cursor-default">
               <div className="w-[72px] h-[72px] rounded-full border-[2.5px] border-[#9DB328] bg-transparent flex items-center justify-center p-4 mb-4 group-hover:bg-[#9DB328] transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_20px_rgba(157,179,40,0.3)]">
                 <img src={stat.icon} alt={stat.text} className="w-full h-full object-contain filter invert-[15%] sepia-[80%] saturate-[4000%] hue-rotate-[340deg] group-hover:brightness-0 group-hover:invert transition-all duration-300" />
               </div>
               <span className="text-[12.5px] font-bold text-[#4A2511] leading-snug px-1">{stat.text}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Columna 3: Checklist y Mascota */}
      <div className="bg-[#FFFDF8] p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#C22026]/10 flex flex-col relative overflow-hidden group">
        
        <div className="flex items-start justify-between mb-8 z-10 relative">
          <h3 className="font-display text-2xl lg:text-3xl text-[#6B0F1A] uppercase leading-tight">
            Hechas para<br/>cuidar su salud
          </h3>
          <img src="/assets/heart.svg" className="w-8 h-8 filter invert-[15%] sepia-[80%] saturate-[4000%] hue-rotate-[340deg]" alt="Heart" />
        </div>
        
        <ul className="space-y-5 text-[14px] font-bold text-[#4A2511] z-10 relative">
          {['Sin conservantes artificiales', 'Sin colorantes', 'Ingredientes naturales', 'Ricas y nutritivas'].map((item, i) => (
            <li key={i} className="flex items-center gap-4 group/item">
              <div className="w-6 h-6 shrink-0 bg-[#9DB328] rounded-full flex items-center justify-center shadow-md">
                <img src="/assets/check.svg" alt="check" className="w-3.5 h-3.5 filter brightness-0 invert" />
              </div>
              <span className="group-hover/item:text-[#9DB328] transition-colors">{item}</span>
            </li>
          ))}
        </ul>

        {/* Mascota Sangre */}
        <div className="absolute -bottom-8 -right-8 w-56 h-56 z-0 group-hover:-translate-y-2 transition-transform duration-500">
          <img 
            src="/assets/mascota sangre.png" 
            alt="Mascota Sangre" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

    </section>
  );
}