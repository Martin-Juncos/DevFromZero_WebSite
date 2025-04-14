import { Link } from "react-router-dom";

function Alumnos() {
  return (
    <div>
      <h1>Alumnos</h1>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
}

export default Alumnos;
