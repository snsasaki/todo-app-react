function TodoItem({ id, title, time, detail, onDeleteTodo }) {
  return (
    <div>
      <li>{title}</li>
      <li>{detail}</li>
      <li>{time}</li>
      <button type="button" onClick={() => onDeleteTodo(id)}>
        削除
      </button>
    </div>
  );
}

export default TodoItem;
