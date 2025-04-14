// src/components/Main/Main.jsx
import { useEffect } from "react";
import anime from "animejs";

import styles from "./Main.module.css";
// Importación de imágenes
import featureIcon01 from "../../assets/images/feature-icon-01.svg";
import featureIcon02 from "../../assets/images/feature-icon-02.svg";
import featureIcon03 from "../../assets/images/feature-icon-03.svg";
import featureIcon04 from "../../assets/images/feature-icon-04.svg";
import featureIcon05 from "../../assets/images/feature-icon-05.svg";
import featureIcon06 from "../../assets/images/feature-icon-06.svg";

function Main() {
  useEffect(() => {
    // Animación inicial para elementos con la clase "animated"
    anime({
      targets: `.${styles.animated}`,
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: anime.stagger(100),
    });
  }, []);
  return (
    <div className={styles.bodyWrap}>
      {" "}
      <main>
        {/* Sección Hero */}
        <section id="hero" className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <h1 className={`${styles.heroTitle} ${styles.titleLarge}`}>
                  DevFromZero
                </h1>
                <h2 className={`${styles.heroTitle} ${styles.titleMedium}`}>
                  Programa tu futuro
                </h2>
                <p className={styles.heroParagraph}>
                  ¿Te imaginas crear tus propias aplicaciones, diseñar páginas
                  web o desarrollar videojuegos? En <strong>DevFromZero</strong>
                  , te enseñamos desde cero las habilidades que te prepararán
                  para el futuro digital. Aprenderás tecnologías como{" "}
                  <strong>HTML, CSS, JavaScript, React, Node.js</strong> y más,
                  mientras desarrollas proyectos reales que te permitirán
                  innovar, crear soluciones disruptivas y ser parte de la{" "}
                  <strong>revolución tecnológica</strong>.
                </p>
                <div className={styles.heroCTA}>
                  <a
                    className={`${styles.button} ${styles.buttonPrimary}`}
                    href="#"
                  >
                    ¡Inscríbete ahora!
                  </a>
                  <a className={styles.button} href="#">
                    Más información
                  </a>
                </div>
              </div>
              <div className={`${styles.heroFigure} ${styles.animated}`}>
                <svg
                  className={styles.placeholder}
                  width="528"
                  height="396"
                  viewBox="0 0 528 396"
                >
                  <rect
                    width="528"
                    height="396"
                    style={{ fill: "transparent" }}
                  />
                </svg>
                <div
                  className={`${styles.heroFigureBox} ${styles.box1}`}
                  data-rotation="45deg"
                ></div>
                <div
                  className={`${styles.heroFigureBox} ${styles.box2}`}
                  data-rotation="-45deg"
                ></div>
                <div
                  className={`${styles.heroFigureBox} ${styles.box3}`}
                  data-rotation="0deg"
                ></div>
                <div
                  className={`${styles.heroFigureBox} ${styles.box4}`}
                  data-rotation="-135deg"
                ></div>
                <div className={`${styles.heroFigureBox} ${styles.box5}`}></div>
                <div className={`${styles.heroFigureBox} ${styles.box6}`}></div>
                <div className={`${styles.heroFigureBox} ${styles.box7}`}></div>
                <div
                  className={`${styles.heroFigureBox} ${styles.box8}`}
                  data-rotation="-22deg"
                ></div>
                <div
                  className={`${styles.heroFigureBox} ${styles.box9}`}
                  data-rotation="-52deg"
                ></div>
                <div
                  className={`${styles.heroFigureBox} ${styles.box10}`}
                  data-rotation="-50deg"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Beneficios */}
        <section
          id="features"
          className={`${styles.features} ${styles.section}`}
        >
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

        {/* Sección de Precios */}
        <section id="pricing" className={`${styles.pricing} ${styles.section}`}>
          <div className={styles.containerSmall}>
            <div className={`${styles.pricingInner} ${styles.sectionInner}`}>
              <div className={styles.pricingHeader}>
                <h2 className={styles.sectionTitle}>Invierte en tu futuro</h2>
                <p className={styles.sectionParagraph}>
                  Este curso no solo te enseñará a programar, sino que también
                  te ayudará a desarrollar{" "}
                  <strong>
                    pensamiento lógico, creatividad y resolución de problemas
                  </strong>
                  , habilidades esenciales en cualquier área de la vida.
                  ¡Conviértete en un creador digital y prepárate para las
                  carreras del futuro!
                </p>
              </div>
              <div className={styles.pricingTablesWrap}>
                <div className={styles.pricingTable}>
                  <div
                    className={`${styles.pricingTableInner} ${styles.animated}`}
                  >
                    <div className={styles.pricingTableMain}>
                      <div className={styles.pricingTableHeader}>
                        <div className={styles.pricingPrice}>
                          <span className={styles.priceCurrency}>$</span>
                          <span className={styles.priceAmount}>99</span>
                          <span className={styles.pricePeriod}>/mes</span>
                        </div>
                      </div>
                      <div className={styles.pricingFeaturesTitle}>
                        ¿Qué incluye?
                      </div>
                      <ul className={styles.pricingFeatures}>
                        <li>
                          Acceso a clases virtuales y encuentros presenciales
                        </li>
                        <li>Proyectos prácticos y portafolio</li>
                        <li>Certificación al finalizar</li>
                        <li>Soporte personalizado</li>
                        <li>Comunidad de jóvenes apasionados</li>
                      </ul>
                    </div>
                    <div className={styles.pricingCTAWrap}>
                      <a
                        className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonBlock}`}
                        href="#"
                      >
                        ¡Empieza ahora!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Llamado a la Acción */}
        <section id="cta" className={`${styles.cta} ${styles.section}`}>
          <div className={styles.container}>
            <div className={styles.ctaInner}>
              <h3 className={styles.sectionTitle}>
                ¿Listo para cambiar tu futuro?
              </h3>
              <p className={`${styles.heroParagraph} ${styles.textCenter}`}>
                No esperes más. Inscríbete hoy y comienza tu viaje en el mundo
                de la programación. ¡El futuro es digital, y tú puedes ser parte
                de él!
              </p>
              <div className={styles.ctaButtonWrap}>
                <a
                  className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonWideMobile}`}
                  href="#"
                >
                  ¡Inscríbete hoy!
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
