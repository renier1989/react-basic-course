import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Home/HomePage";
import { NewTodoPage } from "./New/NewTodoPage";
import { EditTodoPage } from "./Edit/EditTodoPage";
import { TodoProvider } from "../components/TodoContext";
import { ReactComponent as LoadingSVG } from "../icons/loading.svg";
function App() {
  return (
    <HashRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewTodoPage />} />
          <Route path="/edit/:id" element={<EditTodoPage />} />
          <Route
            path="*"
            element={
              <>
                <div style={{ textAlignLast: "center" , paddingTop: "10%" }}>
                  <LoadingSVG />
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    404 Page Not Found!
                  </p>
                </div>
              </>
            }
          />
        </Routes>
      </TodoProvider>
    </HashRouter>
  );
}

export default App;
