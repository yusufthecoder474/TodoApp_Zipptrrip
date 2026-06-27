import TodoItem from "./TodoItem";

function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit
}) {

  return (
    <>
      {todos.map(todo => (

        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />

      ))}
    </>
  );

}

export default TodoList;