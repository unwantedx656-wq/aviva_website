import { benefitsStats } from '../data/content';

export default function Benefits() {
  return (
    <section id="beneficios" className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
      
      {/* Columna 1: Por qué Aviva (Con imagen de niños) */}
      <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-aviva-cream flex flex-col justify-between group hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300">
        <div>
          <h3 className="font-display text-3xl text-aviva-brandRed mb-6">¿POR QUÉ AVIVA?</h3>
          <p className="text-[15px] font-medium text-aviva-textDark leading-relaxed mb-6">
            En Aviva creemos que una buena nutrición puede transformar el presente y el futuro de nuestros niños. Por eso creamos galletas ricas, naturales y nutritivas que los ayudan a crecer fuertes, sanos y llenos de energía.
          </p>
        </div>
        <div className="relative h-48 w-full flex justify-center items-end mt-4">
           <img src="/assets/niños.png" alt="Niños fuertes" className="h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 origin-bottom" />
        </div>
      </div>

      {/* Columna 2: Beneficios Centrales */}
      <div className="flex flex-col justify-center px-4 py-8">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-aviva-brandRed/30 flex-grow"></div>
          <h3 className="text-aviva-brandRed font-extrabold tracking-widest text-sm uppercase">Beneficios para su futuro</h3>
          <div className="h-px bg-aviva-brandRed/30 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
           {benefitsStats.map((stat) => (
             <div key={stat.id} className="flex flex-col items-center text-center group cursor-default">
               <div className="w-16 h-16 rounded-full border-[3px] border-aviva-green flex items-center justify-center p-3 mb-4 group-hover:bg-aviva-green transition-colors duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-2">
                 <img src={stat.icon} alt={stat.text} className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
               </div>
               <span className="text-xs font-bold text-aviva-textDark leading-snug px-2 group-hover:text-aviva-brandRed transition-colors">{stat.text}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Columna 3: Checklist y Mascota */}
      <div className="bg-[#FFFDF8] p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-aviva-brandRed/10 flex flex-col relative overflow-hidden group hover:border-aviva-brandRed/30 transition-colors duration-300">
        <h3 className="font-display text-2xl text-aviva-darkRed mb-8 uppercase leading-tight">
          Hechas para<br/>cuidar su salud
        </h3>
        
        <ul className="space-y-5 text-[15px] font-extrabold text-aviva-textDark z-10">
          {['Sin conservantes artificiales', 'Sin colorantes', 'Ingredientes naturales', 'Ricas y nutritivas'].map((item, i) => (
            <li key={i} className="flex items-center gap-4 group/item">
              <div className="w-6 h-6 shrink-0 bg-aviva-green rounded-full flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform">
                <img src="/assets/check.svg" alt="check" className="w-3.5 h-3.5 filter brightness-0 invert" />
              </div>
              <span className="group-hover/item:text-aviva-green transition-colors">{item}</span>
            </li>
          ))}
        </ul>

        <div className="absolute -bottom-4 -right-4 w-48 h-48 z-0">
          <img 
            src="/assets/mascota sangre.png" 
            alt="Mascota Sangre" 
            className="w-full h-full object-contain drop-shadow-2xl animate-float"
          />
        </div>
      </div>

    </section>
  );
}