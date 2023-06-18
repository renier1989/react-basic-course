
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";





function App() {
  // creo un conponente que solo va a abstraer la parte de UI para los usuarios y en esta parte solo tendre la logica de la aplicacion 
  // esto debe estar encapsulado dentro del componente TodoProvider del TodoContext para poder comunicar todos los componentes
  return (
    <TodoProvider>
      <AppUI  />
    </TodoProvider>
  );
}

export default App;
