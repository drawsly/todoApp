import "./Todo.css";
import { FiEdit } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Todo({ todo }) {
  return (
    <div key={todo.id} className="list-item">
      <span className="list-text">{todo.text}</span>
      <div className="button-group">
        <FiEdit style={{ color: "black" }} className="circle-btn" />
        <FiX style={{ color: "red" }} className="circle-btn" />
      </div>
    </div>
  );
}

export default Todo;
