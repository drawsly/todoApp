import "./Todo.css";
import { FiEdit } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Todo({ todo, onDeleteTodo }) {
  const { id, text } = todo;

  const deleteTodo = () => {
    onDeleteTodo(id);
  };

  return (
    <div className="list-item">
      <span className="list-text">{text}</span>
      <div className="button-group">
        <FiEdit style={{ color: "black" }} className="circle-btn" />
        <FiX
          onClick={deleteTodo}
          style={{ color: "red" }}
          className="circle-btn"
        />
      </div>
    </div>
  );
}

export default Todo;
