
import React from "react";
import { HashRouter, Routes , Route } from 'react-router-dom';
import { HomePage } from "./Home/HomePage";
import { NewTodoPage } from "./New/NewTodoPage";
import { EditTodoPage } from "./Edit/EditTodoPage";
import { TodoProvider } from "../components/TodoContext";
function App() {
  
  return (
      <HashRouter>
        <TodoProvider>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/new" element={<NewTodoPage />} />
              <Route path="/edit/:id" element={<EditTodoPage />} />
              <Route path="*" element={ <p>Not Found</p> } />
          </Routes>
        </TodoProvider>
      </HashRouter>
  );
}

export default App;
