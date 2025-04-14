// src/components/Header/Header.jsx
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
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
                  {isAuthenticated ? (
                    <div className={styles.authContainer}>
                      <span className={styles.authGreeting}>
                        {`Hola ${user.given_name}`}
                      </span>
                      <img
                        className={styles.imgUser}
                        src={user.picture}
                        alt={user.name}
                      />
                      <button
                        className={styles.authButton}
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Log Out
                      </button>
                    </div>
                  ) : (
                    <button
                      className={styles.authButton}
                      onClick={() => loginWithRedirect()}
                    >
                      Ingresar
                    </button>
                  )}
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
