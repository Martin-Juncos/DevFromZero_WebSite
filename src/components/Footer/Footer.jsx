// src/components/Footer/Footer.jsx
import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <div className={styles.bodyWrap}>
      {/* Sección de Llamado a la Footer */}
      <footer className={styles.siteFooter}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div className={styles.brand}>
              <a href="#">
                <img
                  className={`${styles.logoImage} ${styles.animated}`}
                  src={logo}
                  alt="Logo"
                />
              </a>
            </div>
            <div className={styles.footerRight}>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#">Contacto</a>
                </li>
                <li>
                  <a href="#">Sobre nosotros</a>
                </li>
                <li>
                  <a href="#">Preguntas frecuentes</a>
                </li>
                <li>
                  <a href="#">Soporte</a>
                </li>
              </ul>
              <ul className={styles.footerSocialLinks}>
                <li>
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
              <div className={styles.footerCopyright}>
                <p>&copy; 2023 DevFromZero.</p>
                <p>Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
