import "./styles/App.css";
import TodoCreate from "./components/TodoCreate/TodoCreate";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  console.log(todos)
  return (
    <div className="container">
      <div className="todo-wrapper">
        <div className="todo-header">
          <h1>todo app.</h1>
          <p>Todolarınızı yönetebileceğiniz bir uygulama.</p>
        </div>
        <div className="todo-create">
          <TodoCreate onCreateTodo={createTodo} />
        </div>
        <div className="todo-list">
          <TodoList />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
