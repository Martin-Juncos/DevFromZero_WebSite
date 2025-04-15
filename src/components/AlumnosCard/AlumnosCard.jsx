/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./AlumnosCard.module.css";
function AlumnosCard({ id, name, description, image }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/students/${id}`);
  };
  return (
    <div className={styles["student-card"]}>
      <img src={image} alt={name} className={styles["student-avatar"]} />
      <h3 className={styles["student-name"]}>{name}</h3>
      <p className={styles["student-description"]}>{description}</p>
      <button onClick={handleButtonClick} className={styles["student-button"]}>
        Ir a su informe...
      </button>
    </div>
  );
}

export default AlumnosCard;
