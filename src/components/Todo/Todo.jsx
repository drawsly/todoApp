import "./Todo.css";
import { FiEdit } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Todo({ todo }) {
  const { id, text } = todo;

  return (
    <div className="list-item">
      <span className="list-text">{text}</span>
      <div className="button-group">
        <FiEdit style={{ color: "black" }} className="circle-btn" />
        <FiX style={{ color: "red" }} className="circle-btn" />
      </div>
    </div>
  );
}

export default Todo;
