import { useState } from 'react';

export default function Calculator() {
  const [cookies, setCookies] = useState(2);
  const ironPerCookie = 15; 

  return (
    <section className="py-20 px-8 max-w-3xl mx-auto text-center">
      <h3 className="font-display text-3xl md:text-4xl text-aviva-brandRed mb-4">Calculadora Nutricional</h3>
      <p className="text-aviva-textDark mb-10 font-bold text-lg">¿Cuántas galletas Aviva consume tu niño al día?</p>
      
      <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-aviva-brandRed/10">
        <div className="flex items-center justify-between mb-10">
          <span className="text-2xl font-bold text-gray-300">1</span>
          <input 
            type="range" 
            min="1" max="5" 
            value={cookies}
            onChange={(e) => setCookies(Number(e.target.value))}
            className="w-full mx-6 accent-aviva-brandRed cursor-pointer h-3 bg-aviva-cream rounded-full appearance-none transition-all"
          />
          <span className="text-2xl font-bold text-gray-300">5</span>
        </div>
        
        <div className="flex flex-col items-center justify-center group">
          <div className="text-7xl mb-2 font-display text-aviva-green transition-all duration-500 scale-100 group-hover:scale-110">
            {cookies * ironPerCookie}%
          </div>
          <p className="text-sm md:text-base font-extrabold text-gray-500 uppercase tracking-widest">del hierro diario recomendado</p>
        </div>
        
        <div className="mt-10 h-6 w-full bg-[#FDF7E8] rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-aviva-brandRed to-aviva-darkRed transition-all duration-1000 ease-out relative"
            style={{ width: `${Math.min(cookies * ironPerCookie, 100)}%` }}
          >
            <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}