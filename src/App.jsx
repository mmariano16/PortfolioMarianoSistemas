import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Mentions from './components/Mentions'; 
import Estudios from './components/Estudios';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Testimonials />
      <Mentions />
      <Estudios />
      <Contact />
      <Footer />
    </>
  );
}

export default App;