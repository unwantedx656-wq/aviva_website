import { ingredients } from '../data/content';

export default function IngredientsBanner() {
  return (
    <section id="ingredientes" className="bg-aviva-darkRed text-white py-12 px-8 w-full shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] relative overflow-hidden">
      {/* Patrón de fondo sutil (opcional para dar textura al rojo) */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        <div className="lg:w-1/4 text-center lg:text-left">
          <h3 className="font-display text-3xl leading-tight drop-shadow-md">
            INGREDIENTES QUE<br/>NUTREN DE VERDAD
          </h3>
        </div>

        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map(ing => (
            <div key={ing.id} className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors duration-300">
              <div className="w-20 h-20 shrink-0 bg-white rounded-full flex justify-center items-center p-3 shadow-lg group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-all duration-300">
                <img src={ing.img} alt={ing.name} className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div>
                <h4 className="font-extrabold text-[15px] mb-1 group-hover:text-[#FFD100] transition-colors">{ing.name}</h4>
                <p className="text-xs text-gray-100 leading-relaxed font-medium">{ing.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}