import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import '../styles/main.scss'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Sistema de Residencias Médicas",
      description: "Sistema completo para gestión de residencias médicas incluyendo inscripción web, generación aleatoria de exámenes, corrección automatizada y generación de reportes.",
      technologies: ["C#", "SQL Server", "jQuery", "ASP.NET"],
      features: [
        "ABM de preguntas por especialidad",
        "Scaneo y corrección automática de exámenes",
        "Generación de órdenes de mérito"
      ]
    },
    {
      title: "Sistema de Derivación de Pacientes",
      description: "Sistema 24/7 para derivación y traslado de pacientes entre hospitales de la provincia con integración al registro civil.",
      technologies: ["Visual Fox", "SQL Server", "Mapas interactivos"],
      features: [
        "Gestión de camas disponibles",
        "Alertas en tiempo real",
        "Estadísticas gráficas"
      ]
    },
    {
      title: "Sistema Integral de Becarios",
      description: "Plataforma para gestión y seguimiento de becarios de la provincia de Córdoba.",
      technologies: ["VB.NET", "WinForms", "SQL Server"],
      features: [
        "Seguimiento de pagos",
        "Control de documentación",
        "Generación de reportes"
      ]
    }
  ]

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Proyectos Destacados
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-technologies">
                <strong>Tecnologías:</strong>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-features">
                <strong>Características:</strong>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects