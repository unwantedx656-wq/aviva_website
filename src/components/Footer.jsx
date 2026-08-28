import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#6B0F1A] text-white py-16 px-8 mt-auto border-t-[8px] border-[#9DB328] relative overflow-hidden">
      {/* Elemento de diseño de fondo (SVG o mancha) */}
      <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
        <img src="/assets/logo.png" alt="Background Element" className="w-96 h-96 object-contain filter grayscale" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative z-10">
        
        {/* Nuestro Compromiso */}
        <div className="flex flex-col gap-4 group">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl p-3 flex items-center justify-center group-hover:bg-[#9DB328] transition-colors duration-500 shadow-xl">
              <img src="/assets/school.svg" alt="Escuela" className="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <h4 className="font-extrabold text-sm tracking-wider uppercase text-[#FFD100]">Nuestro Compromiso</h4>
          </div>
          <p className="text-[13px] text-gray-300 leading-loose">
            Promover la salud y el bienestar de los niños en etapa escolar a través de una alimentación nutritiva, accesible y deliciosa, previniendo la anemia.
          </p>
        </div>

        {/* Loncheras Escolares */}
        <div className="flex flex-col gap-4 group">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl p-3 flex items-center justify-center group-hover:bg-[#9DB328] transition-colors duration-500 shadow-xl">
              <img src="/assets/food.svg" alt="Lonchera" className="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <h4 className="font-extrabold text-sm tracking-wider uppercase text-[#FFD100]">Para Loncheras</h4>
          </div>
          <p className="text-[13px] text-gray-300 leading-loose">
            Prácticas, nutritivas y llenas de lo que ellos necesitan. El complemento perfecto para la jornada escolar.
          </p>
        </div>

        {/* Enlaces y Redes Sociales */}
        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex gap-4">
            <Link to="/sobre-aviva" className="text-[13px] font-bold uppercase tracking-wider text-white hover:text-[#FFD100] transition-colors">Sobre Aviva</Link>
            <Link to="/faq" className="text-[13px] font-bold uppercase tracking-wider text-white hover:text-[#FFD100] transition-colors">Preguntas Frecuentes</Link>
          </div>

          <div className="w-full h-[1px] bg-white/20 md:hidden"></div>

          <div className="flex flex-col md:items-end gap-4">
            <h4 className="font-extrabold text-sm tracking-wider uppercase text-[#FFD100]">Síguenos</h4>
            <div className="flex gap-3">
              {[
                { id: 'fb', icon: '/assets/facebook.svg' },
                { id: 'ig', icon: '/assets/instagram.svg' },
                { id: 'tk', icon: '/assets/tiktok.svg' }
              ].map((social) => (
                <a 
                  key={social.id} 
                  href="#" 
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex justify-center items-center p-3 hover:bg-[#9DB328] hover:border-[#9DB328] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <img src={social.icon} alt={social.id} className="w-full h-full object-contain filter brightness-0 invert" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 font-bold uppercase tracking-widest gap-4 text-center">
        <p>© {new Date().getFullYear()} Galletas Aviva. Todos los derechos reservados.</p>
        <p>Nutrición que los hace crecer.</p>
      </div>
    </footer>
  );
}