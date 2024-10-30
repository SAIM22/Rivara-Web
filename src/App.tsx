import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyWeAreHere from './components/WhyWeAreHere';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyWeAreHere />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;