import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Pagina principal
const Home = React.lazy(() => import("@/pages/Home"));

// Paginas de errores genericos
const Error404 = React.lazy(() => import("@/pages/utils/Error404"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
  {
    path: "/*",
    element: <Error404 />, // ruta comodín para rutas no definidas
  },
];

const router = createBrowserRouter(routes);
export default router;