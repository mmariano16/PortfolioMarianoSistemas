import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>{t.skills.title}</h2>
        <ul className="skills-list">
          {t.skills.list.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}