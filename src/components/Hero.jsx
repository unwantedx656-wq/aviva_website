import { heroStats } from '../data/content';

export default function Hero() {
  return (
    <section id="inicio" className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
      {/* Columna Izquierda - Copywriting */}
      <div className="space-y-8 z-10">
        <h2 className="font-display text-5xl md:text-6xl text-aviva-brandRed leading-[1.1] drop-shadow-sm">
          Pequeñas galletas, <br/> grandes cambios
        </h2>
        <p className="text-lg font-medium text-aviva-textDark max-w-lg leading-relaxed">
          Galletas Aviva elaboradas con ingredientes naturales que ayudan a <span className="text-aviva-brandRed font-extrabold bg-red-50 px-1 rounded">prevenir y combatir la anemia</span> en niños en etapa escolar.
        </p>

        <div className="flex flex-wrap gap-8 py-2">
          {heroStats.map(stat => (
            <div key={stat.id} className="flex flex-col items-center text-center group w-24">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-aviva-brandRed flex items-center justify-center p-3 mb-3 group-hover:bg-aviva-brandRed transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1">
                <img src={stat.icon} alt={stat.text} className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <span className="text-[13px] font-extrabold text-aviva-textDark leading-tight mb-1">{stat.text}</span>
              <span className="text-[11px] text-gray-500 leading-tight">{stat.sub}</span>
            </div>
          ))}
        </div>

        <button className="bg-aviva-brandRed text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-aviva-darkRed transition-all duration-300 shadow-[0_10px_25px_rgba(194,32,38,0.4)] hover:shadow-[0_15px_35px_rgba(122,17,22,0.5)] hover:-translate-y-1 flex items-center gap-3">
          NUESTRA HISTORIA
          <span className="text-xl leading-none">›</span>
        </button>
      </div>

      {/* Columna Derecha - Hero Image */}
      <div className="relative flex justify-center items-center z-10 mt-10 lg:mt-0">
        
        {/* Etiqueta flotante superior */}
        <div className="absolute -top-6 -right-2 md:-right-8 bg-aviva-green text-white p-5 rounded-[2rem] rounded-bl-sm shadow-2xl transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20 animate-float cursor-default">
          <p className="text-center font-extrabold text-sm tracking-wide leading-tight">IDEALES PARA<br/>NIÑOS EN<br/>ETAPA ESCOLAR</p>
        </div>
        
        {/* Imagen del producto */}
        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[12px] border-white overflow-hidden bg-white group">
           <img 
             src="/assets/hero-plate.jpeg" 
             alt="Plato de galletas Aviva" 
             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
           />
           {/* Overlay sutil brillante */}
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Etiqueta flotante inferior */}
        <div className="absolute -bottom-8 -left-2 md:-left-10 bg-aviva-brandRed text-white p-6 rounded-[2.5rem] rounded-tl-sm shadow-2xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20 cursor-default" style={{ animationDelay: '1s' }}>
          <p className="font-bold text-center leading-tight text-sm">
            Ayudan a<br/>prevenir y<br/>combatir la<br/>
            <span className="text-[#FFD100] text-2xl font-display tracking-wide drop-shadow-md">anemia</span>
          </p>
        </div>
      </div>
    </section>
  );
}