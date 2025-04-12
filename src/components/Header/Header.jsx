import styles from "../Landing/LandingPage.module.css";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className={styles.bodyWrap}>
      <header className={styles.siteHeader}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <a href="#hero">
                <img className={styles.logoImage} src={logo} alt="Logo" />
              </a>
            </div>
            <button className={styles.hamburger} onClick={toggleMenu}>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <a href="#hero" className={styles.navLink}>
                    Inicio
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#features" className={styles.navLink}>
                    Beneficios
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#pricing" className={styles.navLink}>
                    Precios
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#cta" className={styles.navLink}>
                    Contacto
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#" className={styles.navLink}>
                    Ingresar
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
