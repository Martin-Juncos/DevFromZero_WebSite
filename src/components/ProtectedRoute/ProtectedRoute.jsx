// src/components/ProtectedRoute.jsx
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../ProtectedRoute/ProtectedRoute"; // un componente simple que muestre un spinner o mensaje

const ProtectedRoute = (Component) =>
  withAuthenticationRequired(Component, {
    onRedirecting: () => <Loading />,
  });

export default ProtectedRoute;
