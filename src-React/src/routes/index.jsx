import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Pagina principal
const Main = React.lazy(() => import("@/pages/Main"));

// Paginas de errores genericos
const Error404 = React.lazy(() => import("@/pages/utils/Error404"));

const routes = [
  {
    path: "/",
    element: <Main />,
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