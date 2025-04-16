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
                  <a href="/contacto">Contacto</a>
                </li>
                <li>
                  <a href="/about_us">Sobre nosotros</a>
                </li>
                <li>
                  <a href="/faq">Preguntas frecuentes</a>
                </li>
                <li>
                  <a href="#">Soporte</a>
                </li>
              </ul>
              <ul className={styles.footerSocialLinks}>
                <li>
                  <a
                    href="https://www.facebook.com/BVCOM.Internet"
                    target="_blank"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/PoloITCtes" target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bvcom_internet/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@poloitcorrientes4827"
                    target="_blank"
                  >
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
