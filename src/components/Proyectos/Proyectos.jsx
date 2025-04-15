import { Link } from "react-router-dom";
import { proyectos } from "../../data/proyectos";
import styles from "./Proyectos.module.css";

function Proyectos() {
  return (
    <div className={styles["proyectos-container"]}>
      <h2>Proyectos del Curso</h2>
      <div className={styles["proyectos-grid"]}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className={styles["proyecto-card"]}>
            <img
              src={proyecto.imagen}
              alt={proyecto.nombre}
              className={styles["proyecto-imagen"]}
            />
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.grupo}</p>
            <Link
              to={`/proyectos/${proyecto.id}`}
              className={styles["proyecto-button"]}
            >
              Ir al proyecto
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
