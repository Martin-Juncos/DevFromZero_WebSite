// src/components/Home/Home.jsx
import { useEffect } from "react";
import anime from "animejs";

import { Link } from "react-router-dom";
import styles from "./Home.module.css";
// Importación de imágenes

const Home = () => {
  useEffect;
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
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Bienvenido a DevFromZero</h1>
      <div className={styles.buttonGroup}>
        <Link className={styles.button} to="/curso">
          Curso
        </Link>
        <Link className={styles.button} to="/alumnos">
          Alumnos
        </Link>
        <Link className={styles.button} to="/proyectos">
          Proyectos
        </Link>
      </div>
      <div className={`${styles.heroFigure} ${styles.animated}`}>
        <svg
          className={styles.placeholder}
          width="528"
          height="396"
          viewBox="0 0 528 396"
        >
          <rect width="528" height="396" style={{ fill: "transparent" }} />
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
  );
};

export default Home;
