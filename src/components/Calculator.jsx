import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function Calculator() {
  const [cookies, setCookies] = useState(2);
  const [animatedValue, setAnimatedValue] = useState(30);
  const ironPerCookie = 15; 

  // Animación suave del número
  useEffect(() => {
    const target = cookies * ironPerCookie;
    const interval = setInterval(() => {
      setAnimatedValue(prev => {
        if (prev < target) return prev + 1;
        if (prev > target) return prev - 1;
        return prev;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [cookies]);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center relative">
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFD100] rounded-full blur-2xl opacity-20 animate-pulse"></div>

      <h3 className="font-display text-4xl lg:text-5xl text-[#6B0F1A] mb-6 tracking-wide">
        Calculadora Nutricional
      </h3>
      <p className="text-[#4A2511] mb-12 font-bold text-lg md:text-xl">
        ¿Cuántas galletas Aviva consume tu niño al día?
      </p>
      
      <div className="bg-white p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(107,15,26,0.08)] border border-[#C22026]/10 relative overflow-hidden">
        
        {/* Adorno de fondo */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FDF7E8] rounded-full opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Selector interactivo con botones */}
          <div className="flex items-center gap-6 mb-12 bg-[#FDF7E8] p-4 rounded-full shadow-inner border border-white/50">
            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                onClick={() => setCookies(num)}
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full font-display text-xl md:text-2xl transition-all duration-300 shadow-sm flex items-center justify-center
                  ${cookies >= num 
                    ? 'bg-[#C22026] text-white scale-110 shadow-[0_10px_20px_rgba(194,32,38,0.4)]' 
                    : 'bg-white text-[#6B0F1A] hover:bg-[#FFD100]/20'
                  }`}
              >
                {num}
              </button>
            ))}
          </div>
          
          {/* Porcentaje principal */}
          <div className="flex flex-col items-center justify-center group mb-10">
            <div className="text-[5.5rem] md:text-[7rem] leading-none mb-4 font-display text-[#9DB328] transition-transform duration-500 group-hover:scale-105 drop-shadow-sm flex items-start">
              {animatedValue}
              <span className="text-4xl md:text-6xl mt-2">%</span>
            </div>
            <p className="text-sm md:text-base font-extrabold text-[#4A2511] uppercase tracking-[0.2em] flex items-center gap-2">
              <Heart className="w-4 h-4 fill-[#C22026] text-[#C22026]" />
              del hierro diario recomendado
              <Heart className="w-4 h-4 fill-[#C22026] text-[#C22026]" />
            </p>
          </div>
          
          {/* Barra de progreso */}
          <div className="w-full max-w-2xl mx-auto relative mt-16">
            <div className="h-5 w-full bg-[#FDF7E8] rounded-full overflow-hidden shadow-inner border border-black/5">
              <div 
                className="h-full bg-gradient-to-r from-[#C22026] to-[#6B0F1A] transition-all duration-1000 ease-out relative"
                style={{ width: `${Math.min(cookies * ironPerCookie, 100)}%` }}
              >
                <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
            
            {/* Tooltip flotante */}
            <div 
              className="absolute -top-12 -translate-x-1/2 transition-all duration-1000 ease-out"
              style={{ left: `${Math.min(cookies * ironPerCookie, 100)}%` }}
            >
              <div className="bg-[#6B0F1A] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg relative whitespace-nowrap">
                {cookies === 1 && "Buen comienzo"}
                {cookies === 2 && "¡Genial!"}
                {cookies === 3 && "¡Excelente!"}
                {cookies === 4 && "¡Maravilloso!"}
                {cookies >= 5 && "¡Increíble!"}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#6B0F1A] rotate-45"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}