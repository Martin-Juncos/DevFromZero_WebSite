// src/App.jsx
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Curso from "./components/Curso/Curso";
import Alumnos from "./components/Alumnos/Alumnos";
import Proyectos from "./components/Proyectos/Proyectos";
import Main from "./components/Main/Main";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Header />
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<Main />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/curso" element={<Curso />} />
            <Route path="/alumnos" element={<Alumnos />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
