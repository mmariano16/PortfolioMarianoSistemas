import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import mencion1 from '../assets/images/mencion1.png';
import mencion2 from '../assets/images/mencion2.png';
import mencion3 from '../assets/images/mencion3.png';

const images = [
  { src: mencion1, alt: 'Mención 1' },
  { src: mencion2, alt: 'Mención 2' },
  { src: mencion3, alt: 'Mención 3' },
];

export default function Mentions() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(false);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <section className="mentions" id="mentions">
      <div className="container">
        <h2>{t.mentions.title}</h2>
        <div className="mentions__carousel">
          <button className="carousel-btn" onClick={prev} aria-label="Anterior">
            &#8592;
          </button>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="mentions__img"
            style={{ width: '300px', borderRadius: '12px', boxShadow: '0 2px 16px rgba(44,123,229,0.15)', cursor: 'zoom-in' }}
            onClick={() => setZoom(true)}
          />
          <button className="carousel-btn" onClick={next} aria-label="Siguiente">
            &#8594;
          </button>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          {images.map((_, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: idx === current ? '#2c7be5' : '#b3d8ff',
                margin: '0 4px',
                transition: 'background 0.2s'
              }}
            />
          ))}
        </div>
        {/* Modal de zoom */}
        {zoom && (
          <div
            className="mentions__modal"
            onClick={() => setZoom(false)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              cursor: 'zoom-out'
            }}
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '16px',
                boxShadow: '0 4px 32px rgba(44,123,229,0.25)'
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}