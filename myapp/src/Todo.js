function Todo(props) {
  const { todoList } = props;
  const todos = todoList.map((todo) => {
    return (
      <li className="todos" key={todo.id}>
        {todo.id}. {todo.content}
        <br></br>
        <button>Delete</button>
      </li>
    );
  });

  return (
    <div>
      <ul>{todos}</ul>
    </div>
  );
}

export default Todo;
