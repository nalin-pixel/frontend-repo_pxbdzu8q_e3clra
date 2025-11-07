import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-yellow-500/30 selection:text-yellow-100">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
