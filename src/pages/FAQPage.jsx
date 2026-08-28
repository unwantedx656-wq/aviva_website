import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo CDN con Blur */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
        <div className="absolute inset-0 bg-[#FDF7E8]/20"></div>
      </div>

      <div className="relative z-10 max-w-[100rem] mx-auto px-8 py-24 xl:py-32">
        <FAQ />
      </div>
    </div>
  );
}
