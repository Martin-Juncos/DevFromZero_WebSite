// src/components/AboutUs/AboutUs.jsx
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutGrid}>
      {/* Fila 1: Título que abarca dos columnas */}
      <div className={styles.titleBox}>
        <h1>Sobre nosotros</h1>
      </div>

      {/* Fila 2: Imagen (izquierda) y ¿Quiénes somos? (derecha) */}
      <div className={styles.imgBox}>
        <img src="/bvcom_logo.webp" alt="BVCom Logo" className={styles.logo} />
      </div>
      <div className={styles.quienesBox}>
        <p>
          Somos un equipo de profesionales de la educación y la tecnología
          comprometidos con formar a las nuevas generaciones en habilidades
          digitales clave. Nuestra propuesta está orientada a jóvenes que desean
          introducirse en el mundo de la programación de manera estructurada,
          práctica y moderna.
        </p>
      </div>

      {/* Fila 3: ¿Qué hacemos? (izquierda) y ¿Por qué lo hacemos? (derecha) */}
      <div className={styles.queBox}>
        <h2>¿Qué hacemos?</h2>
        <p>
          Diseñamos e impartimos un curso integral de programación web full
          stack, combinando clases virtuales con encuentros presenciales. A lo
          largo del programa, los estudiantes aprenden desde los fundamentos del
          pensamiento computacional hasta la creación de aplicaciones completas
          con tecnologías como HTML, CSS, JavaScript, Node.js, Express,
          PostgreSQL, MongoDB y React.
        </p>
      </div>
      <div className={styles.porqBox}>
        <h2>¿Por qué lo hacemos?</h2>
        <p>
          Creemos que la educación tecnológica es una herramienta poderosa para
          el desarrollo personal y profesional. Nuestro objetivo es brindar a
          los jóvenes las competencias necesarias para comprender y participar
          activamente en el mundo digital, abriéndoles puertas en su futuro
          académico y laboral.
        </p>
      </div>

      {/* Fila 4: ¿Cómo lo hacemos? (izquierda) y Nuestra visión (derecha) */}
      <div className={styles.comoBox}>
        <h2>¿Cómo lo hacemos?</h2>
        <p>
          Aplicamos una metodología práctica, con foco en el aprendizaje activo,
          la resolución de problemas reales y la construcción de proyectos
          propios. Promovemos la creatividad, el trabajo colaborativo, la
          autonomía y la constancia. Acompañamos el progreso de cada estudiante
          con tutorías, materiales didácticos y una comunidad de aprendizaje.
        </p>
      </div>
      <div className={styles.visionBox}>
        <h2>Nuestra visión</h2>
        <p>
          Formar jóvenes capaces de crear tecnología, no solo consumirla.
          Queremos que nuestros estudiantes se conviertan en desarrolladores,
          diseñadores, emprendedores o simplemente personas con pensamiento
          crítico frente al mundo digital.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
