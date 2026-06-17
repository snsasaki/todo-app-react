function TodoItem({
  id,
  title,
  time,
  detail,
  completed,
  onToggleTodo,
  onDeleteTodo,
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleTodo(id)}
      />
      <li>{title}</li>
      <li>{detail}</li>
      <li>{time}</li>
      <li>{completed ? "完了" : "未完了"}</li>
      <button type="button" onClick={() => onDeleteTodo(id)}>
        削除
      </button>
    </div>
  );
}

export default TodoItem;
