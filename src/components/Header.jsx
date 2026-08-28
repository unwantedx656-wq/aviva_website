import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/content';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-[#6B0F1A] text-white py-1 px-8 xl:px-12 flex items-center justify-between sticky top-0 z-50 shadow-2xl backdrop-blur-xl bg-opacity-95 transition-all duration-300">
      
      {/* Contenedor Izquierdo: Logo y Navegación */}
      <div className="flex items-center gap-12 xl:gap-16">
        <Link to="/" className="flex items-center cursor-pointer group shrink-0 py-1">
          <img 
            src="/assets/logo.png" 
            alt="Aviva Logo" 
            className="h-16 md:h-24 lg:h-28 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-2xl"
          />
        </Link>
        
        <nav className="hidden lg:flex gap-12 text-[15px] xl:text-[18px] font-bold tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.pathname === '/');
            
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className="relative overflow-hidden group py-2 flex items-center"
              >
                <span className={`transition-colors duration-300 ${isActive ? 'text-[#FFD100]' : 'group-hover:text-[#FFD100]'}`}>
                  {link.name}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD100] transform transition-transform duration-300 ease-out ${isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Contenedor Derecho: Información del Colegio */}
      <div className="hidden md:flex items-center gap-4 bg-white/10 px-5 py-2 rounded-full border border-white/20 shadow-inner group cursor-default hover:bg-white/20 transition-colors duration-300">
        <div className="flex flex-col text-right">
          <span className="text-[10px] xl:text-[11px] text-[#FFD100] font-bold tracking-widest uppercase">
            Industrias Alimentarias
          </span>
          <span className="text-xs xl:text-sm font-extrabold leading-tight">
            3RO
          </span>
        </div>
        
        {/* Insignia del Colegio */}
        <div className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
          <img 
            src="/assets/rps.png" 
            alt="Insignia Colegio Ricardo Palma Soriano" 
            className="w-full h-full object-contain drop-shadow-md" 
          />
        </div>
      </div>

    </header>
  );
}