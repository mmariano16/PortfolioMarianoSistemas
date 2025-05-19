import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <h1>Mariano Molina</h1>
        <nav>
          <a href="#experience">Experiencia</a>
          <a href="#skills">Conocimientos</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </nav>
        <div className="header__links">
          <a
            href="https://www.linkedin.com/in/mariano-molina-71a1772b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://wa.me/5493517660390"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}