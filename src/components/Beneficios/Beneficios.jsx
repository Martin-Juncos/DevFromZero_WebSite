import styles from "./Beneficios.module.css";
// Importación de imágenes
import featureIcon01 from "../../assets/images/feature-icon-01.svg";
import featureIcon02 from "../../assets/images/feature-icon-02.svg";
import featureIcon03 from "../../assets/images/feature-icon-03.svg";
import featureIcon04 from "../../assets/images/feature-icon-04.svg";
import featureIcon05 from "../../assets/images/feature-icon-05.svg";
import featureIcon06 from "../../assets/images/feature-icon-06.svg";

function Beneficios() {
  return (
    <div className={styles.bodyWrap}>
      <section id="features" className={`${styles.features} ${styles.section}`}>
        <div className={styles.container}>
          <div className={`${styles.featuresInner} ${styles.sectionInner}`}>
            <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>
              Beneficios de DevFromZero
            </h2>
            <div className={styles.featuresWrap}>
              {[
                {
                  icon: featureIcon01,
                  title: "Habilidades demandadas",
                  description:
                    "Lenguajes como JavaScript, HTML, CSS, y frameworks como React y Node.js son algunas de las tecnologías más solicitadas en la industria. Este curso abre puertas a oportunidades en desarrollo web, aplicaciones móviles, inteligencia artificial y más.",
                },
                {
                  icon: featureIcon02,
                  title: "Pensamiento lógico y creativo",
                  description:
                    "Aprender a programar no es solo escribir código, es aprender a pensar. El curso fomenta el pensamiento computacional, la lógica y la resolución de problemas, habilidades útiles en cualquier área de la vida.",
                },
                {
                  icon: featureIcon03,
                  title: "Aprendizaje práctico",
                  description:
                    "Combina sesiones virtuales con encuentros presenciales. Los jóvenes aplican lo aprendido en proyectos reales, desde páginas web hasta aplicaciones interactivas.",
                },
                {
                  icon: featureIcon04,
                  title: "Preparación para emprendimientos",
                  description:
                    "¿Tienes una idea? Aprende a convertirla en realidad. Este curso te da las herramientas para desarrollar tus propios proyectos, aplicaciones o sitios web.",
                },
                {
                  icon: featureIcon05,
                  title: "Flexibilidad y personalización",
                  description:
                    "Aprende a tu ritmo con clases virtuales y encuentros presenciales. Recibe atención personalizada para asegurar tu progreso.",
                },
                {
                  icon: featureIcon06,
                  title: "Comunidad y networking",
                  description:
                    "Conéctate con otros jóvenes apasionados por la tecnología. Los encuentros presenciales fomentan la colaboración y el networking.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`${styles.feature} ${styles.textCenter} ${styles.animated}`}
                >
                  <div className={styles.featureInner}>
                    <div className={styles.featureIcon}>
                      <img
                        src={feature.icon}
                        alt={`Icono ${index + 1}`}
                        className={styles.animated}
                      />
                    </div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Beneficios;
