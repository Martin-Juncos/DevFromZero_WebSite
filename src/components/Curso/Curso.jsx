import { Link } from "react-router-dom";
function Curso() {
  return (
    <div>
      <h1>Curso</h1>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
}

export default Curso;
