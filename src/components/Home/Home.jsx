import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/curso">
        <button>Curso</button>
      </Link>
      <Link to="/alumnos">
        <button>Alumnos</button>
      </Link>
      <Link to="/proyectos">
        <button>Proyectos</button>
      </Link>
    </div>
  );
}

export default Home;
