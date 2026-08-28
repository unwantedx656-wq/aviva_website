import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-[#6B0F1A] text-white py-3 px-8 flex justify-between items-center sticky top-0 z-50 shadow-2xl backdrop-blur-xl bg-opacity-95 transition-all duration-300">
      <Link to="/" className="flex items-center cursor-pointer group">
        <img 
          src="/assets/logo.png" 
          alt="Aviva Logo" 
          className="h-16 lg:h-20 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
        />
      </Link>
      
      <nav className="hidden lg:flex gap-10 text-[13px] font-bold tracking-widest uppercase">
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
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FFD100] transform transition-transform duration-300 ease-out ${isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></span>
            </Link>
          );
        })}
      </nav>

      <button className="bg-[#9DB328] hover:bg-[#8da31d] text-white px-7 py-3 rounded-full font-extrabold text-sm transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_20px_rgba(157,179,40,0.5)] hover:shadow-[0_12px_25px_rgba(157,179,40,0.7)] flex items-center gap-2 uppercase tracking-wide">
        <Heart className="w-5 h-5 fill-white" />
        CONOCE MÁS
      </button>
    </header>
  );
}