import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="container hero__container">
        <h2>{t.hero.title}</h2>
        <p>
          {t.hero.subtitle}
        </p>
        <a
          className="btn btn-primary"
          href="https://wa.me/5493517660390"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.hero.ctaButton}
        </a>
      </div>
    </section>
  );
}