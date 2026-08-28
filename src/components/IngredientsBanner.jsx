import { ingredients } from '../data/content';

export default function IngredientsBanner() {
  return (
    <section id="ingredientes" className="bg-[#6B0F1A] text-white py-14 px-8 w-full relative overflow-hidden z-20">
      
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Título de Ingredientes */}
        <div className="xl:w-[25%] flex flex-col items-center xl:items-start text-center xl:text-left relative">
          <h3 className="font-display text-2xl md:text-3xl leading-snug tracking-wide uppercase">
            Ingredientes que<br/>nutren de verdad
          </h3>
          <img src="/assets/heart.svg" alt="Heart" className="absolute -right-8 bottom-0 w-8 h-8 opacity-70 filter brightness-0 invert" />
        </div>

        {/* Lista de Ingredientes */}
        <div className="xl:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {ingredients.map(ing => (
            <div key={ing.id} className="flex flex-col sm:flex-row items-center gap-4 group cursor-default">
              
              <div className="w-[85px] h-[85px] shrink-0 bg-white rounded-full flex justify-center items-center p-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-all duration-300">
                <img src={ing.img} alt={ing.name} className="w-full h-full object-cover rounded-full" />
              </div>
              
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-[15px] mb-1 group-hover:text-[#FFD100] transition-colors">{ing.name}</h4>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium">{ing.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}