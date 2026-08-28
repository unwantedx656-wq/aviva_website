import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { heroStats } from '../data/content';

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#FDF7E8] relative pt-12 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      
      {/* Fondo CDN con Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-[#FDF7E8]/85 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-[100rem] w-full mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mt-8">
        
        {/* Columna Izquierda - Textos y Stats */}
        <div className="space-y-10 relative flex flex-col justify-center">
          
          {/* Título Principal */}
          <div className="relative w-full">
            <h1 className="font-display text-5xl md:text-7xl lg:text-7xl xl:text-[6.5rem] leading-[1.05] tracking-tight drop-shadow-md">
              <span className="text-[#4A2511]">Pequeñas galletas,</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C22026] to-[#7A1116]">
                grandes cambios
              </span>
            </h1>
            <div className="absolute -left-8 top-8 w-20 h-20 bg-[#FFD100] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"></div>
          </div>

          <p className="text-xl md:text-3xl text-[#4A2511] leading-relaxed font-medium max-w-2xl relative z-10">
            Galletas Aviva elaboradas con ingredientes naturales que ayudan a <span className="text-[#C22026] font-extrabold">prevenir y combatir la anemia</span> en niños en etapa escolar.
          </p>

          {/* Estadísticas / Features */}
          <div className="flex flex-wrap gap-8 py-6 relative z-10">
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
          <div className="relative z-10 inline-block w-fit">
            <div className="absolute inset-0 bg-[#C22026] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300 rounded-full"></div>
            <Link to="/sobre-aviva" className="relative inline-flex bg-gradient-to-r from-[#C22026] to-[#7A1116] hover:from-[#9A161E] hover:to-[#5c0d12] text-white px-10 py-5 lg:px-12 lg:py-6 rounded-full font-extrabold text-base md:text-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] shadow-[0_15px_30px_rgba(194,32,38,0.4)] hover:shadow-[0_20px_40px_rgba(122,17,22,0.6)] items-center gap-4 group overflow-hidden">
              <span className="relative z-10">NUESTRA HISTORIA</span>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
              {/* Brillo en hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"></div>
            </Link>
          </div>

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