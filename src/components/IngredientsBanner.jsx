import { ingredients } from '../data/content';

export default function IngredientsBanner() {
  return (
    <section id="ingredientes" className="bg-[#6B0F1A] text-white py-24 xl:py-32 px-8 w-full relative overflow-hidden z-20">
      
      <div className="max-w-[95rem] mx-auto flex flex-col xl:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Título de Ingredientes */}
        <div className="xl:w-[25%] flex flex-col items-center xl:items-start text-center xl:text-left relative">
          <h3 className="font-display text-3xl md:text-5xl leading-snug tracking-wide uppercase drop-shadow-md">
            Ingredientes que<br/>nutren de verdad
          </h3>
          <img src="/assets/heart.svg" alt="Heart" className="absolute -right-4 -bottom-6 w-12 h-12 opacity-70 filter brightness-0 invert rotate-12" />
        </div>

        {/* Lista de Ingredientes */}
        <div className="xl:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {ingredients.map(ing => (
            <div key={ing.id} className="flex flex-col xl:flex-row items-center gap-6 group cursor-default">
              
              <div className="w-[120px] h-[120px] 2xl:w-[150px] 2xl:h-[150px] shrink-0 bg-white rounded-full flex justify-center items-center p-3 shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] group-hover:scale-[1.05] transition-all duration-300">
                <img src={ing.img} alt={ing.name} className="w-full h-full object-cover rounded-full" />
              </div>
              
              <div className="text-center xl:text-left">
                <h4 className="font-bold text-lg 2xl:text-xl mb-2 group-hover:text-[#FFD100] transition-colors">{ing.name}</h4>
                <p className="text-sm 2xl:text-base text-gray-200 leading-relaxed font-medium">{ing.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}