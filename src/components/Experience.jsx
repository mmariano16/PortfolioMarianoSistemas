import experienceImg from '../assets/images/Perfil.jpg';
import programingVideo from '../assets/images/Programar.mp4';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <img
            src={experienceImg}
            alt="Experiencia"
            style={{ width: '320px', height: '320px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <h2 style={{ margin: 0 }}>{t.experience.title}</h2>
            <video
              src={programingVideo}
              width={400}
              height={240}
              controls
              style={{ borderRadius: '12px', boxShadow: '0 2px 16px rgba(44,123,229,0.15)' }}
              title="Desarrollar Sistemas"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <ul>
          <li>
            <strong>{t.experience.ministerio.title}</strong> <br />
            <em>{t.experience.ministerio.position}</em>
            <ul>
              {/* SISTEMA DE GESTIÓN DE AMBULANCIAS */}
              <li style={{ marginLeft: "2rem" }}>
                <strong>{t.experience.ministerio.ambulances.title}</strong>
                <p>
                  <em>
                    {t.experience.ministerio.ambulances.description}
                  </em>
                </p>
                <ul>
                  {t.experience.ministerio.ambulances.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </li>
              {/* SISTEMA ITOP */}
              <li style={{ marginLeft: "2rem" }}>
                <strong>{t.experience.ministerio.itop.title}</strong>
                <p>
                  <em>
                    {t.experience.ministerio.itop.description}
                  </em>
                </p>
                <ul>
                  {t.experience.ministerio.itop.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </li>
              {/* SISTEMA RESIDENCIAS MÉDICAS */}
              <li style={{ marginLeft: "2rem" }}>
                <strong>{t.experience.ministerio.residencias.title}</strong>
                <p>
                  <em>
                    {t.experience.ministerio.residencias.description}
                  </em>
                </p>
                <ul>
                  {t.experience.ministerio.residencias.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>Analista Desarrollador:</strong> {t.experience.ministerio.analista}
              </li>
            </ul>
          </li>
          <li>
            <strong>{t.experience.freelance.title}</strong> <br />
            <em>{t.experience.freelance.position}</em>
            <ul>
              <li>{t.experience.freelance.description}</li>
              <li>{t.experience.freelance.consulting}</li>
            </ul>
          </li>
          <li>
            <strong>{t.experience.teacher.title}</strong> <br />
            <em>{t.experience.teacher.position}</em>
            <ul>
              {t.experience.teacher.subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}