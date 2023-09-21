import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

// Objeto router que se ha creado usando createBrowserRouter de react-router-dom
import router from "@/routes";

// Estilos globales de la aplicación
import "@/App.scss";

// Componente raíz de la aplicación
function App() {
  return (
    // <Suspense>, te permite mostrar un contenido alternativo mientras se carga el componente
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} basename='/dist' />
    </Suspense>
  );
}

// Exportar el componente App como el valor predeterminado del módulo
export default App;
