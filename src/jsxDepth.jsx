function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ["finish docx", "submit report", "Update to review"];
  return (
    <ul>
      {todos.map((message) => (
        <Item key={message} message={message} />
      ))}
    </ul>
  );
}

export default TodoList;
