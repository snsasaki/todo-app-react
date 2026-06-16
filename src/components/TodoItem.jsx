function TodoItem({ title, time, detail }) {
  return (
    <div>
      <li>{title}</li>
      <li>{detail}</li>
      <li>{time}</li>
    </div>
  );
}

export default TodoItem;
