// src/components/NotFound/NotFound.jsx
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Lo siento, no encontramos la página que buscas.
      </p>
      <Link to="/" className={styles.button}>
        Volver al inicio
      </Link>
    </div>
  );
}
