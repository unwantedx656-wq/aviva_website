import Header from './components/Header';
import Hero from './components/Hero';
import IngredientsBanner from './components/IngredientsBanner';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <IngredientsBanner />
        <Benefits />
      </main>

      <Footer />
    </div>
  );
}

export default App;