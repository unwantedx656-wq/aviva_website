import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { heroStats } from '../data/content';

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#FDF7E8] relative pt-12 pb-24 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9DB328] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C22026] rounded-full blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 mt-8">
        
        {/* Columna Izquierda - Textos y Stats */}
        <div className="space-y-8 relative">
          
          {/* Título Principal */}
          <div className="relative">
            <h1 className="font-display text-5xl md:text-[5.5rem] leading-[1.05] text-[#7A1116] tracking-tight">
              Pequeñas galletas, <br />
              grandes cambios
            </h1>
            <img src="/assets/heart.svg" alt="Heart" className="absolute -right-4 top-2 w-10 h-10 opacity-60 filter grayscale invert-[25%] sepia-[75%] saturate-[4500%] hue-rotate-[340deg]" />
          </div>

          <p className="text-xl md:text-2xl text-[#4A2511] max-w-lg leading-relaxed font-medium">
            Galletas Aviva elaboradas con ingredientes naturales que ayudan a <span className="text-[#C22026] font-extrabold">prevenir y combatir la anemia</span> en niños en etapa escolar.
          </p>

          {/* Estadísticas / Features */}
          <div className="flex flex-wrap gap-8 py-6">
            {heroStats.map(stat => (
              <div key={stat.id} className="flex flex-col items-center text-center group w-28">
                <div className="w-16 h-16 rounded-full border-2 border-[#C22026] bg-transparent flex items-center justify-center p-3 mb-4 group-hover:bg-[#C22026] transition-all duration-300">
                  <img 
                    src={stat.icon} 
                    alt={stat.text} 
                    className="w-full h-full object-contain filter invert-[20%] sepia-[90%] saturate-[5000%] hue-rotate-[350deg] group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                  />
                </div>
                <span className="text-[14px] font-extrabold text-[#4A2511] leading-tight mb-1">{stat.text}</span>
                <span className="text-[12px] text-gray-600 leading-snug">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* Botón CTA */}
          <Link to="/sobre-aviva" className="inline-flex bg-[#C22026] hover:bg-[#7A1116] text-white px-8 py-4 rounded-full font-extrabold text-sm md:text-base uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_20px_rgba(194,32,38,0.3)] hover:shadow-[0_15px_25px_rgba(122,17,22,0.5)] items-center gap-2 group">
            NUESTRA HISTORIA
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Flecha y texto dibujado ("Hechas con ingredientes reales") */}
          <div className="hidden lg:block absolute -right-24 top-1/2 -rotate-12 w-40 text-center">
             <span className="font-display text-[#C22026] text-xl leading-tight block">Hechas con ingredientes reales y con amor</span>
             <img src="/assets/heart.svg" alt="arrow" className="w-8 h-8 mx-auto mt-2 filter invert-[20%] sepia-[90%] saturate-[5000%] hue-rotate-[350deg]" />
          </div>
        </div>

        {/* Columna Derecha - Imagen Principal con Stickers */}
        <div className="relative flex justify-center items-center">
          
          <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-2xl border-[12px] border-[#FDF7E8] z-10 group bg-white">
            <img 
              src="/assets/hero-plate.jpeg" 
              alt="Plato de galletas Aviva" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Sticker Verde (Arriba Derecha) */}
          <div className="absolute -top-4 -right-4 md:-right-8 bg-[#9DB328] text-white p-6 md:p-8 rounded-[2rem] rounded-tr-md shadow-2xl rotate-12 hover:rotate-6 transition-all duration-300 z-20 flex flex-col items-center justify-center animate-wiggle">
            <p className="text-center font-extrabold text-sm md:text-base tracking-widest leading-snug uppercase">Ideales para<br/>niños en<br/>etapa escolar</p>
            <img src="/assets/heart.svg" className="w-6 h-6 mt-2 filter brightness-0 invert opacity-80" alt="Heart" />
          </div>

          {/* Sticker Rojo (Abajo Derecha) */}
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-[#C22026] text-white p-6 md:p-8 rounded-[50%] shadow-2xl -rotate-12 hover:-rotate-6 transition-all duration-300 z-20 w-40 h-40 md:w-48 md:h-48 flex items-center justify-center animate-float">
            <p className="font-bold text-center leading-tight text-sm md:text-base">
              Ayudan a<br/>prevenir y<br/>combatir la<br/>
              <span className="text-[#FFD100] text-2xl md:text-3xl font-display tracking-wider">anemia</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}