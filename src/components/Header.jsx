import { FaLinkedin, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="container header__container">
        <h1>Mariano Molina</h1>
        <nav className="header__nav">
          <a href="#experience">{t.header.experience}</a>
          <a href="#skills">{t.header.skills}</a>
          <a href="#testimonials">{t.header.testimonials}</a>
          <a href="#mentions">{t.header.mentions}</a>
          <a href="#estudios">{t.header.studies}</a>
          <a href="#contact">{t.header.contact}</a>
        </nav>
        <div className="header__links">
          <button 
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            <FaGlobe size={18} />
            <span>{language.toUpperCase()}</span>
          </button>
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