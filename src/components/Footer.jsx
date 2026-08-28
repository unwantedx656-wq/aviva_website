export default function Footer() {
  return (
    <footer id="contacto" className="bg-aviva-darkRed text-white py-12 px-8 mt-12 border-t-[8px] border-aviva-green">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Compromiso */}
        <div className="flex items-start md:items-center gap-5 max-w-sm group">
          <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl p-3 flex items-center justify-center group-hover:bg-aviva-green transition-colors duration-300">
            <img src="/assets/school.svg" alt="Escuela" className="w-full h-full object-contain filter brightness-0 invert" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm mb-1.5 tracking-wide">NUESTRO COMPROMISO</h4>
            <p className="text-xs text-gray-200 leading-relaxed">Promover la salud y el bienestar de los niños en etapa escolar a través de una alimentación nutritiva, accesible y deliciosa.</p>
          </div>
        </div>

        {/* Loncheras */}
        <div className="flex items-start md:items-center gap-5 max-w-sm group">
          <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl p-3 flex items-center justify-center group-hover:bg-aviva-green transition-colors duration-300">
            <img src="/assets/food.svg" alt="Lonchera" className="w-full h-full object-contain filter brightness-0 invert" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm mb-1.5 tracking-wide">IDEAL PARA LONCHERAS ESCOLARES</h4>
            <p className="text-xs text-gray-200 leading-relaxed">Prácticas, nutritivas y llenas de lo que ellos necesitan.</p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="text-left md:text-right w-full md:w-auto">
          <h4 className="font-extrabold text-sm mb-4 tracking-wide">SÍGUENOS</h4>
          <div className="flex gap-3 justify-start md:justify-end">
            {[
              { id: 'fb', icon: '/assets/facebook.svg' },
              { id: 'ig', icon: '/assets/instagram.svg' },
              { id: 'tk', icon: '/assets/tiktok.svg' }
            ].map((social) => (
              <a 
                key={social.id} 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex justify-center items-center p-2.5 hover:bg-white hover:border-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <img src={social.icon} alt={social.id} className="w-full h-full object-contain filter brightness-0 invert hover:invert-0 transition-all duration-300" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}