import { useParams, Link } from "react-router-dom";
import { proyectos } from "../../data/proyectos";
import styles from "./ProyectoDetalle.module.css";

function ProyectoDetalle() {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === parseInt(id));

  if (!proyecto) {
    return <p>Proyecto no encontrado.</p>;
  }

  return (
    <div className={styles["detalle-container"]}>
      <h2 className={styles["detalle-titulo"]}>{proyecto.nombre}</h2>
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        className={styles["detalle-imagen"]}
      />
      <p className={styles["detalle-descripcion"]}>{proyecto.descripcion}</p>
      <div className={styles["detalle-links"]}>
        <a href={proyecto.url_github} target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
        <a href={proyecto.url_demo} target="_blank" rel="noopener noreferrer">
          Ver sitio
        </a>
        <a
          href={proyecto.url_youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Video
        </a>
      </div>
      <Link to="/proyectos" className={styles["volver-button"]}>
        Volver a proyectos
      </Link>
    </div>
  );
}

export default ProyectoDetalle;
