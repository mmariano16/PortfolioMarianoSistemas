import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>{t.testimonials.title}</h2>
        {t.testimonials.list.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <blockquote>
              "{testimonial.quote}"
            </blockquote>
            <p>
              <strong>{testimonial.author}</strong><br />
              {testimonial.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
