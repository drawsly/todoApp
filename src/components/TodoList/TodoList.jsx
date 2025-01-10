import "./TodoList.css";
import { FiEdit } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function TodoList() {
  return (
    <div className="todolist-wrapper">
      <div className="list-item">
        <span className="list-text">Deneme yazısı.</span>
        <div className="button-group">
          <FiEdit style={{ color: "black" }} className="circle-btn" />
          <FiX style={{ color: "red" }} className="circle-btn" />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
