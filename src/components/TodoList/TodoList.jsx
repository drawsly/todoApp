import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList({ todos, onDeleteTodo }) {
  return (
    <div className="todolist-wrapper">
      {todos && todos.map((todo) => <Todo onDeleteTodo={onDeleteTodo} key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
