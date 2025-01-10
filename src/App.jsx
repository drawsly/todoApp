import "./styles/App.css";
import TodoCreate from "./components/TodoCreate/TodoCreate";
import { useState } from "react";
function App() {
  return (
    <div className="container">
        <div className="todo-wrapper">
          <div className="todo-header">
            <h1>todo app.</h1>
            <p>Todolarınızı yönetebileceğiniz bir uygulama.</p>
          </div>
          <div className="todo-create">
            <TodoCreate />
          </div>
          <div className="todo-list">

          </div>
        </div>
    </div>
  );
}

export default App;
