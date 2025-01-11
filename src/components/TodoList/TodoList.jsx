import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
  return (
    <div className="todolist-wrapper">
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
}

export default TodoList;
