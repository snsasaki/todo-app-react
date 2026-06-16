import { useState } from "react";
import SectionTitle from "./components/SectionTitle";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

// const todos = [
//   {
//     id: 1,
//     title: "React",
//     detail: "Reactの学習を行う",
//     time: 13,
//   },
//   {
//     id: 2,
//     title: "Tailwind",
//     detail: "Tailwindの学習を行う",
//     time: 14,
//   },
// ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todos);
    setTodos;
    console.log(todos);
  };
  return (
    <>
      <SectionTitle>Activities</SectionTitle>
      <form onSubmit={handleSubmit}>
        <TodoInput />
      </form>
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
