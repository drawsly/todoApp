import "./TodoCreate.css";

function TodoCreate() {
  return (
    <div className="todoCreate-wrapper">
      <input className="todo-input" type="text" placeholder="Todo giriniz..." />
      <button className="create-btn">Todo Oluştur</button>

      <div className="todo-list">
        
      </div>
    </div>
  );
}

export default TodoCreate;
