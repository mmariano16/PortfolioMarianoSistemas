import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Mentions from './components/Mentions'; 
import Estudios from './components/Estudios';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/main.scss';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Testimonials />
      <Mentions />
      <Estudios />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;