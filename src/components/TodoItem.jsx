function TodoItem({ id, title, time, detail, completed, onDeleteTodo }) {
  return (
    <div>
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
