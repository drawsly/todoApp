import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <div className="todolist-wrapper">
      {todos && todos.map((todo) => <Todo todo={todo} />)}
    </div>
  );
}

export default TodoList;
