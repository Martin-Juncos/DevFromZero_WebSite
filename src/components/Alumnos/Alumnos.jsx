// src/components/Alumnos/Alumnos.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Alumnos.module.css";
import { alumnos } from "../../data/alumnos";
import Paginacion from "../Paginacion/Paginacion";
import AlumnosCard from "../AlumnosCard/AlumnosCard";

function Alumnos() {
  const alumnosPorPagina = 10;
  const [paginaActual, setPaginaActual] = useState(1);

  const totalDeAlumnos = alumnos.length;
  const ultimoIndice = paginaActual * alumnosPorPagina;
  const primerIndice = ultimoIndice - alumnosPorPagina;

  return (
    <div className={styles["home-container"]}>
      <div className={styles.paginado}>
        <Paginacion
          elementosPorPagina={alumnosPorPagina}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          totalDeElementos={totalDeAlumnos}
        />
      </div>
      <div className={styles["alumnos-grid"]}>
        {alumnos.slice(primerIndice, ultimoIndice).map((alumno) => (
          <AlumnosCard
            key={alumno._id}
            id={alumno._id}
            name={alumno.nombreCompleto}
            description={alumno.frase}
            image={alumno.imagen}
          />
        ))}
      </div>
      <Link to="/" className={styles["volver-button"]}>
        Volver
      </Link>
    </div>
  );
}

export default Alumnos;
