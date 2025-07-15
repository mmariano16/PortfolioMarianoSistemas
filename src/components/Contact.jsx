import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__content">
          <h2>{t.contact.title}</h2>
          <p>
            {t.contact.question}
          </p>
          <a
            className="btn btn-primary"
            href="https://wa.me/5493517660390"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.contact.whatsapp}
          </a>
          <p>
            {t.contact.linkedin} <a href="https://www.linkedin.com/in/mariano-molina-71a1772b" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
      </div>
    </section>
  );
}