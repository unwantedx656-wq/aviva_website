import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FAQPage from './pages/FAQPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#C22026] selection:text-white">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-aviva" element={<About />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;