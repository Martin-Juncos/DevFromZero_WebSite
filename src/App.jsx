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

import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isAuthenticated } = useAuth0();

  // Rutas siempre accesibles
  const publicRoutes = [
    { path: "/", element: <Main /> },
    { path: "/about_us", element: <AboutUs /> },
    { path: "/beneficios", element: <Beneficios /> },
    { path: "/precios", element: <Precios /> },
    { path: "/faq", element: <PreguntasFrecuentes /> },
    { path: "/contacto", element: <Contacto /> },
    { path: "/pagar", element: <PagarInscripcion /> },
  ];

  // Rutas que requieren estar autenticado
  const privateRoutes = [
    { path: "/", element: ProtectedRoute(Home) },
    { path: "/curso", element: ProtectedRoute(Curso) },
    { path: "/alumnos", element: ProtectedRoute(Alumnos) },
    { path: "/alumno/:id", element: ProtectedRoute(AlumnoDetalle) },
    { path: "/proyectos", element: ProtectedRoute(Proyectos) },
    { path: "/proyectos/:id", element: ProtectedRoute(ProyectoDetalle) },
  ];

  return (
    <>
      <Header />
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {isAuthenticated
          ? privateRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))
          : // si intento acceder a una ruta privada sin autenticar, redirijo al Main
            privateRoutes.map(({ path }) => (
              <Route
                key={path}
                path={path}
                element={<Navigate to="/" replace />}
              />
            ))}

        {/* Ruta comodín para la SPA */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
