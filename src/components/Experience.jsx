import experienceImg from '../assets/images/Perfil.jpg';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <img
            src={experienceImg}
            alt="Experiencia"
            style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <h2 style={{ margin: 0 }}>Experiencia Laboral</h2>
        </div>
        <ul>
          <li>
            <strong>Ministerio de Salud - Córdoba</strong> <br />
            <em>Desarrollador de Sistemas y DBA (2000 - Actualidad)</em>
            <ul>
              {/* SISTEMA DE GESTIÓN DE AMBULANCIAS */}
              <li style={{ marginLeft: "2rem" }}>
                <strong>Sistema de Gestión de Ambulancias 7x24</strong>
                <p>
                  <em>
                    Sistema desarrollado y mantenido durante más de 15 años, permitiendo la gestión integral de ambulancias en la provincia de Córdoba, con monitoreo en tiempo real y mapas interactivos.
                  </em>
                </p>
                <ul>
                  <li>Gestión de flota y disponibilidad de ambulancias 24/7.</li>
                  <li>Visualización y seguimiento en mapas interactivos.</li>
                  <li>Optimización de tiempos de respuesta y recursos.</li>
                </ul>
              </li>
              {/* SISTEMA ITOP */}
              <li style={{ marginLeft: "2rem" }}>
                <strong>Sistema iTop para Gestión de Tickets</strong>
                <p>
                  <em>
                    Implementación, configuración y personalización completa de la plataforma iTop para la gestión de tickets y soporte interno, adaptada a los procesos del Ministerio.
                  </em>
                </p>
                <ul>
                  <li>Adaptación a los flujos de trabajo institucionales.</li>
                  <li>Desarrollo de formularios personalizados para cada departamento.</li>
                  <li>Programación de alertas automatizadas y workflows.</li>
                  <li>Creación de reglas de escalamiento y notificaciones automáticas.</li>
                  <li>Capacitación a usuarios y elaboración de documentación técnica.</li>
                  <li>
                    El sistema es utilizado actualmente por múltiples departamentos, optimizando la gestión de tickets y mejorando los tiempos de respuesta.
                  </li>
                  <li>
                    Todo el proyecto fue desarrollado y ejecutado de forma individual, demostrando capacidad para gestionar iniciativas complejas de manera autónoma.
                  </li>
                </ul>
              </li>
              {/* SISTEMA RESIDENCIAS MÉDICAS */}
              <li style={{ marginLeft: "2rem" }}>
                <strong>Sistema Residencias Médicas</strong>
                <p>
                  <em>
                    Sistemas para Profesionales de la Salud, incluyendo inscripción web, generación aleatoria de exámenes, corrección automatizada y generación de reportes.
                  </em>
                </p>
                <ul>
                  <li>Reconocimiento óptico de caracteres (OCR)</li>
                  <li>Cruce automatizado con base de datos de inscritos</li>
                  <li>Publicación de Resultados Portal de la Provincia de Córdoba</li>
                </ul>
              </li>
              <li>
                <strong>Analista Desarrollador:</strong> Gestión integral del ciclo de desarrollo de sistemas, asumiendo roles de analista, desarrollador, tester, implementador y capacitador, entregando soluciones completas en entornos con recursos limitados.
              </li>
            </ul>
          </li>
          <li>
            <strong>Freelance</strong> <br />
            <em>Desarrollador Full Stack (2015 - Actualidad)</em>
            <ul>
              <li>Desarrollo de Aplicaciones Web y Windows para clientes privados incluyendo Universidad Católica de Córdoba.</li>
              <li>Consultoría en arquitectura de software y bases de datos.</li>
            </ul>
          </li>
          <li>
            <strong>Teacher - Institución Cervantes</strong> <br />
            <em>Carrera Analista de Sistemas / Desarrollo Web</em>
            <ul>
              <li>Base de Datos</li>
              <li>JavaScript</li>
              <li>Programación II (C# - MVC)</li>
              <li>Ejercicio Profesional</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}