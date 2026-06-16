import { useState } from "react";
import SectionTitle from "./components/SectionTitle";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
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
  ]);

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      title: todo.title,
      detail: todo.detail,
      time: todo.time,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <SectionTitle>Activities</SectionTitle>
      <TodoInput onAddTodo={addTodo} />
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
