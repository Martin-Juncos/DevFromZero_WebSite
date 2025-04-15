import styles from "./AlumnoDetalle.module.css";
import { useParams, Link } from "react-router-dom";
import { alumnos } from "../../data/alumnos";

function AlumnoDetalle() {
  const { id } = useParams();

  const student = alumnos.find((alumno) => id === alumno._id);
  return (
    <div className={styles["student-detail"]}>
      {/* Sección Izquierda */}
      <div className={styles["left-section"]}>
        <img
          src={student.imagen}
          alt={student.nombreCompleto}
          className={styles["student-avatar"]}
        />
        <h1>{student.nombreCompleto}</h1>
        {student.frase && <p>{student.frase}</p>}
        {student.telefono && (
          <p>
            <strong>Teléfono:</strong> {student.telefono}
          </p>
        )}
        {student.eMail && (
          <p>
            <strong>Correo:</strong> {student.eMail}
          </p>
        )}
        {student.linkedIn && (
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={student.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {student.linkedIn}
            </a>
          </p>
        )}
        {student.portafolio && (
          <p>
            <strong>Portafolio:</strong>{" "}
            <a
              href={student.portafolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              {student.portafolio}
            </a>
          </p>
        )}
        {student.gitHub && (
          <p>
            <strong>GitHub:</strong>{" "}
            <a href={student.gitHub} target="_blank" rel="noopener noreferrer">
              {student.gitHub}
            </a>
          </p>
        )}
        {student.tecnologias && (
          <div className="technologies-container">
            <p>
              <strong>Tecnologías Conocidas:</strong>
            </p>
            <div className="technologies-list">
              {student.tecnologias.map((tech, index) => (
                <span className="technology-item" key={index}>
                  {tech} {", "}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sección Derecha */}
      <div className={styles["right-section"]}>
        {student.descripcion && (
          <p className={styles["spaced"]}>{student.descripcion}</p>
        )}
        {student.modalidadCurso && (
          <p className={styles["spaced"]}>
            <strong>Curso Online:</strong> {student.modalidadCurso}
          </p>
        )}
        {student.asistencia && (
          <p className={styles["spaced"]}>
            <strong>Asistencia:</strong>{" "}
            {`${(student.asistencia * 100).toFixed(0)}%`}
          </p>
        )}
        <div className={styles["skills"]}>
          <h3>Aptitudes</h3>
          {[
            {
              name: "Técnicas y Resolución de Problemas",
              value: student.aptitudTecResProb,
            },
            {
              name: "Interpersonales y Comunicación",
              value: student.aptitudInterpComunic,
            },
            {
              name: "Gestión y Adaptabilidad",
              value: student.aptitudGestAdapt,
            },
            {
              name: "Liderazgo y Resiliencia",
              value: student.aptitudLidResilie,
            },
            {
              name: "Creativas y Proactividad",
              value: student.aptitudCreatProduct,
            },
          ].map(
            (skill) =>
              skill.value && (
                <div key={skill.name} className={styles["skill-bar"]}>
                  <span>{skill.name}</span>
                  <div className={styles["progress-bar"]}>
                    <div
                      style={{ width: `${skill.value}%` }}
                      className={styles["progress"]}
                    >
                      {skill.value}%
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      {/* Sección Inferior */}
      <div className={styles["bottom-section"]}>
        {student.informeProfesor && (
          <>
            <h3>Informe del Profesor</h3>
            <p>{student.informeProfesor}</p>
          </>
        )}
      </div>
      <Link to="/alumnos" className={styles["volver-button"]}>
        <button>Volver a alumnos</button>
      </Link>
    </div>
  );
}

export default AlumnoDetalle;
