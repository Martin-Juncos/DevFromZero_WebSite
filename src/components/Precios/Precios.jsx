import styles from "./Precios.module.css";

function Precios() {
  return (
    <div className={styles.bodyWrap}>
      <section id="pricing" className={`${styles.pricing} ${styles.section}`}>
        <div className={styles.containerSmall}>
          <div className={`${styles.pricingInner} ${styles.sectionInner}`}>
            <div className={styles.pricingHeader}>
              <h2 className={styles.sectionTitle}>Invierte en tu futuro</h2>
              <p className={styles.sectionParagraph}>
                Descubre una oportunidad única para transformar tu vida
                profesional y personal. Este curso no solo te enseñará a
                programar, sino que te proporcionará una base sólida en
                pensamiento lógico, creatividad y resolución de problemas,
                habilidades indispensables en cualquier ámbito de la vida. Al
                dominar estas competencias, te convertirás en un verdadero
                creador digital, capaz de innovar y liderar en el dinámico mundo
                tecnológico. Prepárate para acceder a un sinfín de oportunidades
                laborales y académicas, abriendo la puerta a las carreras del
                futuro.
              </p>
              <h3 className={styles.sectionSubtitle}>¿Qué incluye?</h3>
              <ul className={styles.includedList}>
                <li>
                  <strong>
                    Acceso a clases virtuales y encuentros presenciales:
                  </strong>{" "}
                  Participa en sesiones en vivo con instructores expertos y
                  asiste a encuentros presenciales que te permitirán poner en
                  práctica lo aprendido, resolviendo dudas y colaborando en
                  proyectos reales.
                </li>
                <li>
                  <strong>Proyectos prácticos y portafolio:</strong> Desarrolla
                  proyectos integrales que consolidarán tus conocimientos y te
                  permitirán construir un portafolio profesional, indispensable
                  para destacar en el competitivo mundo laboral.
                </li>
                <li>
                  <strong>Certificación al finalizar:</strong> Obtén una
                  certificación que avale tus competencias, lo cual no solo es
                  una validación de tu aprendizaje, sino también un pasaporte
                  para nuevas oportunidades laborales y académicas.
                </li>
                <li>
                  <strong>Soporte personalizado:</strong> Disfruta de
                  acompañamiento continuo por parte de tutores y expertos, que
                  te guiarán en cada paso del proceso para asegurarse de que
                  aproveches al máximo cada sesión y proyecto.
                </li>
                <li>
                  <strong>Comunidad de jóvenes apasionados:</strong> Forma parte
                  de una red vibrante de estudiantes y profesionales que
                  comparten tu pasión por la tecnología. Este entorno
                  colaborativo te brindará el apoyo y la motivación necesarios
                  para crecer tanto profesional como personalmente.
                </li>
              </ul>
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
                      href="/pagar"
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
    </div>
  );
}

export default Precios;
