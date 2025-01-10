import { useState } from "react";
import "./TodoCreate.css";

// eslint-disable-next-line react/prop-types
function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 9999999999999),
      text: newTodo,
    };
    onCreateTodo(request);
  };

  return (
    <div className="todocreate-wrapper">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Todo giriniz..."
      />
      <button onClick={createTodo} className="create-btn">
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
