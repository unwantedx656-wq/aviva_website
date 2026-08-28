import { Heart } from 'lucide-react';
import { benefitsStats } from '../data/content';

export default function Benefits() {
  return (
    <section id="beneficios" className="max-w-full w-full mx-auto py-24 relative flex flex-col items-center overflow-hidden">
      
      {/* Fondo CDN con Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-xl"></div>
        <div className="absolute inset-0 bg-[#FDF7E8]/60"></div>
      </div>

      <div className="max-w-[90rem] w-full mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Título Principal de la Sección */}
        <div className="text-center mb-16 w-full flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src="/assets/heart.svg" alt="leaf" className="w-6 h-6 lg:w-8 lg:h-8 filter invert-[50%] sepia-[60%] saturate-[1000%] hue-rotate-[40deg]" />
            <h2 className="font-display text-4xl lg:text-5xl text-[#C22026] tracking-wide uppercase drop-shadow-sm">
              Beneficios para su futuro
            </h2>
            <img src="/assets/heart.svg" alt="leaf" className="w-6 h-6 lg:w-8 lg:h-8 filter invert-[50%] sepia-[60%] saturate-[1000%] hue-rotate-[40deg] scale-x-[-1]" />
          </div>
          <p className="text-lg lg:text-xl font-medium text-[#4A2511] max-w-3xl">Nutrición inteligente que acompaña cada etapa de su desarrollo escolar.</p>
        </div>

        {/* Grid de 3 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch w-full">
          
          {/* Columna 1: ¿Por qué Aviva? */}
          <div className="bg-white/95 p-10 lg:p-12 rounded-[2.5rem] shadow-xl border border-[#C22026]/10 flex flex-col justify-between group relative overflow-hidden backdrop-blur-sm">
            <div className="relative z-20">
              <h3 className="font-display text-3xl lg:text-4xl text-[#6B0F1A] mb-6 tracking-wide">
                ¿POR QUÉ AVIVA?
              </h3>
              <p className="text-base lg:text-lg font-medium text-[#4A2511] leading-relaxed mb-6">
                En Aviva creemos que una buena nutrición puede transformar el presente y el futuro de nuestros niños. Por eso creamos galletas ricas, naturales y nutritivas que los ayudan a crecer fuertes, sanos y llenos de energía.
              </p>
            </div>
            
            {/* Imagen Niños (centrada, contenida, sin desbordarse hacia los lados) */}
            <div className="relative mt-4 w-full h-48 lg:h-64 flex justify-center items-end">
              <div className="w-full h-full opacity-85 group-hover:opacity-100 transition-all duration-500 origin-bottom group-hover:scale-105 z-10 flex justify-center">
                 <img src="/assets/niños.png" alt="Niños fuertes" className="h-full w-auto object-contain object-bottom" />
              </div>
            </div>
          </div>

          {/* Columna 2: Beneficios Centrales (Iconos) */}
          <div className="flex flex-col justify-center bg-white/60 backdrop-blur-md p-10 lg:p-12 rounded-[2.5rem] border border-white/80 shadow-lg">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
               {benefitsStats.map((stat) => (
                 <div key={stat.id} className="flex flex-col items-center text-center group cursor-default px-2">
                   <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full border-[3px] border-[#9DB328] bg-white flex items-center justify-center p-5 mb-4 group-hover:bg-[#9DB328] transition-all duration-300 shadow-md group-hover:shadow-xl">
                     <img src={stat.icon} alt={stat.text} className="w-full h-full object-contain filter invert-[15%] sepia-[80%] saturate-[4000%] hue-rotate-[340deg] group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                   </div>
                   <span className="text-sm lg:text-base font-bold text-[#4A2511] leading-tight">{stat.text}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Columna 3: Checklist y Mascota */}
          <div className="bg-[#FFFDF8]/95 p-10 lg:p-12 rounded-[2.5rem] shadow-xl border border-[#C22026]/10 flex flex-col relative overflow-hidden group backdrop-blur-sm">
            <div className="flex items-start justify-between mb-10 z-10 relative">
              <h3 className="font-display text-3xl lg:text-4xl text-[#6B0F1A] uppercase leading-tight">
                Hechas para<br/>cuidar su salud
              </h3>
              <img src="/assets/heart.svg" className="w-10 h-10 lg:w-12 lg:h-12 filter invert-[15%] sepia-[80%] saturate-[4000%] hue-rotate-[340deg]" alt="Heart" />
            </div>
            
            <ul className="space-y-5 text-base lg:text-lg font-bold text-[#4A2511] z-10 relative">
              {['Sin conservantes artificiales', 'Sin colorantes', 'Ingredientes naturales', 'Ricas y nutritivas'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group/item">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 shrink-0 bg-[#9DB328] rounded-full flex items-center justify-center shadow-md">
                    <img src="/assets/check.svg" alt="check" className="w-4 h-4 lg:w-5 lg:h-5 filter brightness-0 invert" />
                  </div>
                  <span className="group-hover/item:text-[#9DB328] transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className="absolute -bottom-4 -right-4 w-48 h-48 lg:w-64 lg:h-64 z-0 group-hover:-translate-y-2 transition-transform duration-500">
              <img 
                src="/assets/mascota sangre.png" 
                alt="Mascota Sangre" 
                className="w-full h-full object-contain drop-shadow-xl object-bottom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}