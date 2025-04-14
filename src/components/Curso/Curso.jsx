import { useNavigate } from "react-router-dom";
import styles from "./Curso.module.css";
import { clases } from "../../data/cursoContents";

function ContenidosDelCurso() {
  const navigate = useNavigate();

  return (
    <div className={styles["contenidos-container"]}>
      <button className={styles["volver-button"]} onClick={() => navigate("/")}>
        Volver
      </button>
      <h3>Clases y Contenidos del Curso</h3>
      <table className={styles["contenidos-table"]}>
        <thead>
          <tr>
            <th>Clase</th>
            <th>Tema</th>
            <th>Subtemas</th>
          </tr>
        </thead>
        <tbody>
          {clases.map((classItem, index) => (
            <tr key={index}>
              <td>{classItem.clase}</td>
              <td>{classItem.tema}</td>
              <td>
                <ul>
                  {classItem.subtemas.map((subtema, subIndex) => (
                    <li key={subIndex}>{subtema}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContenidosDelCurso;
