// src/components/LandingPage/LandingPage.jsx
import { useEffect } from "react";
import anime from "animejs";
import styles from "./LandingPage.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const LandingPage = () => {
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
      {/* Sección de Llamado a la Header */}
      <Header />
      {/* Sección de Llamado a la Main */}
      <Main />
      {/* Sección de Llamado a la Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
