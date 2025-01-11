import { useState } from "react";
import "./Todo.css";
// ? ICONS
import { FiEdit } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiSave } from "react-icons/fi";

function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
  const { id, text } = todo;

  const [editable, setEditable] = useState(false);
  const [newText, setNewText] = useState(text);

  return (
    <div className="list-item">
      <span className="list-text">
        {editable ? (
          <input
            className="edit-input"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          text
        )}
      </span>
      <div className="button-group">
        {editable ? (
          <FiSave
            onClick={() => {
              const request = {
                id: id,
                text: newText
              }
              onUpdateTodo(request)
              setEditable(false);
            }}
            className="circle-btn"
            style={{ color: "black" }}
          />
        ) : (
          <FiEdit
            onClick={() => setEditable(true)}
            style={{ color: "black" }}
            className="circle-btn"
          />
        )}
        <FiX
          onClick={() => onDeleteTodo(id)}
          style={{ color: "red" }}
          className="circle-btn"
        />
      </div>
    </div>
  );
}

export default Todo;
