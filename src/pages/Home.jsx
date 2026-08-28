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
      
      <ScrollReveal>
        <IngredientsBanner />
      </ScrollReveal>
      
      <ScrollReveal>
        <Benefits />
      </ScrollReveal>

      <ScrollReveal>
        <Calculator />
      </ScrollReveal>
    </>
  );
}
