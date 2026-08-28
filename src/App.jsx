import Header from './components/Header';
import Hero from './components/Hero';
import IngredientsBanner from './components/IngredientsBanner';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WaveDivider from './components/WaveDivider';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-aviva-brandRed selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        
        {/* Divisor superior curvo hacia el banner de ingredientes */}
        <WaveDivider bgClass="bg-[#FDF7E8]" color="text-aviva-darkRed" />
        
        <ScrollReveal>
          <IngredientsBanner />
        </ScrollReveal>
        
        {/* Divisor inferior curvo (rotado) volviendo al fondo crema */}
        <WaveDivider bgClass="bg-[#FDF7E8]" color="text-aviva-darkRed" rotate={true} />
        
        <ScrollReveal>
          <Benefits />
        </ScrollReveal>

        <ScrollReveal>
          <Calculator />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

export default App;