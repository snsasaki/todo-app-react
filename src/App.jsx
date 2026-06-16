import TodoItem from "./components/TodoItem";

const todos = [
  {
    id: 1,
    title: "React",
    detail: "Reactの学習を行う",
    time: 13,
  },
  {
    id: 2,
    title: "Tailwind",
    detail: "Tailwindの学習を行う",
    time: 14,
  },
];

function App() {
  return (
    <>
      <h1>Activities</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            detail={todo.detail}
            time={todo.time}
          />
        ))}
      </ul>
    </>
  );
}
export default App;
