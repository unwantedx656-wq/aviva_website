import { navLinks } from '../data/content';

export default function Header() {
  return (
    <header className="bg-aviva-darkRed text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-[0_10px_30px_rgba(122,17,22,0.3)] backdrop-blur-md bg-opacity-95 transition-all duration-300">
      <div className="flex items-center gap-2 cursor-pointer group">
        <img 
          src="/assets/logo.png" 
          alt="Aviva Logo" 
          className="h-12 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
        />
      </div>
      
      <nav className="hidden lg:flex gap-8 text-sm font-bold tracking-wide">
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase().replace(' ', '-')}`} 
            className="relative overflow-hidden group py-1"
          >
            <span className="group-hover:text-aviva-cream transition-colors duration-300">
              {link.toUpperCase()}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-aviva-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </a>
        ))}
      </nav>

      <button className="bg-aviva-green hover:bg-[#8da31d] text-white px-8 py-2.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(157,179,40,0.4)] flex items-center gap-2">
        CONOCE MÁS
      </button>
    </header>
  );
}