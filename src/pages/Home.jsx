import Hero from '../components/Hero';
import IngredientsBanner from '../components/IngredientsBanner';
import Benefits from '../components/Benefits';
import Calculator from '../components/Calculator';
import WaveDivider from '../components/WaveDivider';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      
      {/* Divisor superior curvo hacia el banner de ingredientes */}
      <WaveDivider bgClass="bg-[#FDF7E8]" color="text-[#6B0F1A]" />
      
      <ScrollReveal>
        <IngredientsBanner />
      </ScrollReveal>
      
      {/* Divisor inferior curvo (rotado) volviendo al fondo crema */}
      <WaveDivider bgClass="bg-[#FDF7E8]" color="text-[#6B0F1A]" rotate={true} />
      
      <ScrollReveal>
        <Benefits />
      </ScrollReveal>

      <ScrollReveal>
        <Calculator />
      </ScrollReveal>
    </>
  );
}
