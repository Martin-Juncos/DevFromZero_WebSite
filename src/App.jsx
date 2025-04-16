// src/App.jsx
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Curso from "./components/Curso/Curso";
import Alumnos from "./components/Alumnos/Alumnos";
import Main from "./components/Main/Main";
import Proyectos from "./components/Proyectos/Proyectos";
import ProyectoDetalle from "./components/Proyectos/ProyectoDetalle";
import AlumnoDetalle from "./components/AlumnoDetalle/AlumnoDetalle";
import AboutUs from "./components/AboutUs/AboutUs";
import Beneficios from "./components/Beneficios/Beneficios";
import Precios from "./components/Precios/Precios";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes/PreguntasFrecuentes ";
import Contacto from "./components/Contacto/Contacto";
import PagarInscripcion from "./components/PagarInscripcion/PagarInscripcion";

// Rutas públicas (accesibles sin autenticación)
const publicRoutes = [
  { path: "/about_us", element: <AboutUs /> },
  { path: "/beneficios", element: <Beneficios /> },
  { path: "/precios", element: <Precios /> },
  { path: "/faq", element: <PreguntasFrecuentes /> },
  { path: "/contacto", element: <Contacto /> },
  { path: "/pagar", element: <PagarInscripcion /> },
];

// Rutas privadas (requieren autenticación)
const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/curso", element: <Curso /> },
  { path: "/alumnos", element: <Alumnos /> },
  { path: "/alumno/:id", element: <AlumnoDetalle /> },
  { path: "/proyectos", element: <Proyectos /> },
  { path: "/proyectos/:id", element: <ProyectoDetalle /> },
  ...publicRoutes, // Incluye las rutas públicas también para usuarios autenticados
];

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Header />
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="*" element={<Main />} />
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </>
        ) : (
          <>
            {privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
