import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const translations = {
    en: {
      header: {
        experience: 'Experience',
        skills: 'Skills',
        testimonials: 'Testimonials',
        mentions: 'Mentions',
        studies: 'Studies',
        contact: 'Contact'
      },
      hero: {
        title: 'Full Stack Developer & Systems Analyst',
        subtitle: 'More than 20 years of experience developing technological solutions',
        ctaButton: 'Contact via WhatsApp'
      },
      experience: {
        title: 'Work Experience',
        ministerio: {
          title: 'Ministry of Health - Córdoba',
          position: 'Systems Developer and DBA (2000 - Present)',
          ambulances: {
            title: '7x24 Ambulance Management System',
            description: 'System developed and maintained for over 15 years, enabling comprehensive ambulance management in Córdoba province, with real-time monitoring and interactive maps.',
            features: [
              'Fleet management and 24/7 ambulance availability.',
              'Visualization and tracking on interactive maps.',
              'Response time and resource optimization.'
            ]
          },
          itop: {
            title: 'iTop System for Ticket Management',
            description: 'Complete implementation, configuration and customization of the iTop platform for internal ticket management and support, adapted to Ministry processes.',
            features: [
              'Adaptation to institutional workflows.',
              'Development of custom forms for each department.',
              'Programming of automated alerts and workflows.',
              'Creation of escalation rules and automatic notifications.',
              'User training and technical documentation.',
              'The system is currently used by multiple departments, optimizing ticket management and improving response times.',
              'The entire project was developed and executed individually, demonstrating ability to manage complex initiatives autonomously.'
            ]
          },
          residencias: {
            title: 'Medical Residencies System',
            description: 'Systems for Health Professionals, including web registration, random exam generation, automated correction and report generation.',
            features: [
              'Optical character recognition (OCR)',
              'Automated cross-referencing with enrolled database',
              'Results publication on Córdoba Province Portal'
            ]
          },
          analista: 'Systems Analyst Developer: Comprehensive management of the systems development cycle, assuming roles of analyst, developer, tester, implementer and trainer, delivering complete solutions in resource-limited environments.'
        },
        freelance: {
          title: 'Freelance',
          position: 'Full Stack Developer (2015 - Present)',
          description: 'Development of Web and Windows Applications for private clients including Catholic University of Córdoba.',
          consulting: 'Software architecture and database consulting.'
        },
        teacher: {
          title: 'Teacher - Cervantes Institution',
          position: 'Systems Analyst Career / Web Development',
          subjects: [
            'Database',
            'JavaScript',
            'Programming II (C# - MVC)',
            'Professional Practice'
          ]
        }
      },
      skills: {
        title: 'Skills',
        list: [
          'Advanced English C1',
          'React, Vite, JavaScript, TypeScript',
          'C#, ASP.NET, VB.NET, WinForms, nHibernate',
          'SQL Server, Oracle, PostgreSQL and MySQL',
          'PHP, HTML5, CSS3, Sass',
          'jQuery, Bootstrap',
          'API integration and interactive maps',
          'Webhooks',
          'Docker',
          'Oracle Forms',
          'WordPress',
          'Itop',
          'Agile methodologies and development best practices',
          'Translation and Video Editing in different Languages'
        ]
      },
      testimonials: {
        title: 'Testimonials',
        list: [
          {
            quote: "Congratulations on the excellent work done on the Medical Residencies System, which has significantly optimized our selection process.",
            author: "Dr. Juan Felix Brunetto",
            position: "Human Resources Director, Ministry of Health - Córdoba"
          },
          {
            quote: "Recognition for the development of the statistical system that has improved our analysis and decision-making capacity.",
            author: "Lina C. Romero",
            position: "Head of Statistics Division, Ministry of Health - Córdoba"
          },
          {
            quote: "I am writing to express this Department's satisfaction with the work performed by Mr. Mariano Molina. His collaboration in organizing the health residents selection call, where he was in charge of all the computer programming for this event, which was carried out without problems, demonstrated his high qualifications and knowledge. We must highlight his willingness to work, efficiency and respect shown at all times.",
            author: "Dr. Beatriz Cerrutti",
            position: "Head of Residencies Section, Ministry of Health - Córdoba"
          }
        ]
      },
      mentions: {
        title: 'Mentions'
      },
      studies: {
        title: 'Studies'
      },
      contact: {
        title: 'Contact',
        question: 'Would you like to work with me or need a custom solution?',
        whatsapp: 'Message me on WhatsApp',
        linkedin: 'You can also contact me on'
      }
    },
    es: {
      header: {
        experience: 'Experiencia',
        skills: 'Conocimientos',
        testimonials: 'Testimonios',
        mentions: 'Menciones',
        studies: 'Estudios',
        contact: 'Contacto'
      },
      hero: {
        title: 'Desarrollador Full Stack y Analista de Sistemas',
        subtitle: 'Más de 20 años de experiencia desarrollando soluciones tecnológicas',
        ctaButton: 'Contactar por WhatsApp'
      },
      experience: {
        title: 'Experiencia Laboral',
        ministerio: {
          title: 'Ministerio de Salud - Córdoba',
          position: 'Desarrollador de Sistemas y DBA (2000 - Actualidad)',
          ambulances: {
            title: 'Sistema de Gestión de Ambulancias 7x24',
            description: 'Sistema desarrollado y mantenido durante más de 15 años, permitiendo la gestión integral de ambulancias en la provincia de Córdoba, con monitoreo en tiempo real y mapas interactivos.',
            features: [
              'Gestión de flota y disponibilidad de ambulancias 24/7.',
              'Visualización y seguimiento en mapas interactivos.',
              'Optimización de tiempos de respuesta y recursos.'
            ]
          },
          itop: {
            title: 'Sistema iTop para Gestión de Tickets',
            description: 'Implementación, configuración y personalización completa de la plataforma iTop para la gestión de tickets y soporte interno, adaptada a los procesos del Ministerio.',
            features: [
              'Adaptación a los flujos de trabajo institucionales.',
              'Desarrollo de formularios personalizados para cada departamento.',
              'Programación de alertas automatizadas y workflows.',
              'Creación de reglas de escalamiento y notificaciones automáticas.',
              'Capacitación a usuarios y elaboración de documentación técnica.',
              'El sistema es utilizado actualmente por múltiples departamentos, optimizando la gestión de tickets y mejorando los tiempos de respuesta.',
              'Todo el proyecto fue desarrollado y ejecutado de forma individual, demostrando capacidad para gestionar iniciativas complejas de manera autónoma.'
            ]
          },
          residencias: {
            title: 'Sistema Residencias Médicas',
            description: 'Sistemas para Profesionales de la Salud, incluyendo inscripción web, generación aleatoria de exámenes, corrección automatizada y generación de reportes.',
            features: [
              'Reconocimiento óptico de caracteres (OCR)',
              'Cruce automatizado con base de datos de inscritos',
              'Publicación de Resultados Portal de la Provincia de Córdoba'
            ]
          },
          analista: 'Analista Desarrollador: Gestión integral del ciclo de desarrollo de sistemas, asumiendo roles de analista, desarrollador, tester, implementador y capacitador, entregando soluciones completas en entornos con recursos limitados.'
        },
        freelance: {
          title: 'Freelance',
          position: 'Desarrollador Full Stack (2015 - Actualidad)',
          description: 'Desarrollo de Aplicaciones Web y Windows para clientes privados incluyendo Universidad Católica de Córdoba.',
          consulting: 'Consultoría en arquitectura de software y bases de datos.'
        },
        teacher: {
          title: 'Teacher - Institución Cervantes',
          position: 'Carrera Analista de Sistemas / Desarrollo Web',
          subjects: [
            'Base de Datos',
            'JavaScript',
            'Programación II (C# - MVC)',
            'Ejercicio Profesional'
          ]
        }
      },
      skills: {
        title: 'Conocimientos',
        list: [
          'Inglés C1 Avanzado',
          'React, Vite, JavaScript, TypeScript',
          'C#, ASP.NET, VB.NET, WinForms, nHibernate',
          'SQL Server, Oracle, PostgreSQL y MySQL',
          'PHP, HTML5, CSS3, Sass',
          'jQuery, Bootstrap',
          'Integración de APIs y mapas interactivos',
          'Webhooks',
          'Docker',
          'Oracle Forms',
          'WordPress',
          'Itop',
          'Metodologías ágiles y buenas prácticas de desarrollo',
          'Traducción y Edición de Videos en diferentes Idiomas'
        ]
      },
      testimonials: {
        title: 'Testimonios',
        list: [
          {
            quote: "Felicitaciones por el excelente trabajo realizado en el Sistema de Residencias Médicas, que ha optimizado significativamente nuestro proceso de selección.",
            author: "Dr. Juan Felix Brunetto",
            position: "Director de Recursos Humanos, Ministerio de Salud - Córdoba"
          },
          {
            quote: "Reconocimiento por el desarrollo del sistema estadístico que ha mejorado nuestra capacidad de análisis y toma de decisiones.",
            author: "Lina C. Romero",
            position: "Jefa de División Estadísticas, Ministerio de Salud - Córdoba"
          },
          {
            quote: "Me dirijo a Ud. a fin de expresar la satisfacción de este Depto. por el trabajo realizado por el Sr. Mariano Molina. Su colaboración en la organización del llamado a selección de residentes en Salud, donde tuvo a su cargo toda la programación informática de este acto, el cual se desarrolló sin problemas, puso de manifiesto su alta capacitación y conocimientos. Debemos destacar su voluntad de trabajo, eficiencia y respeto demostrados en todo momento.",
            author: "Dra. Beatriz Cerrutti",
            position: "Jefa de Sección Residencias, Ministerio de Salud - Córdoba"
          }
        ]
      },
      mentions: {
        title: 'Menciones'
      },
      studies: {
        title: 'Estudios'
      },
      contact: {
        title: 'Contacto',
        question: '¿Te gustaría trabajar conmigo o necesitas una solución a medida?',
        whatsapp: 'Escribime por WhatsApp',
        linkedin: 'También podés contactarme por'
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
