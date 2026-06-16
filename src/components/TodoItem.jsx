function TodoItem({ title, time, detail }) {
  return (
    <div>
      <li>{title}</li>
      <li>{time}</li>
      <li>{detail}</li>
    </div>
  );
}

export default TodoItem;
