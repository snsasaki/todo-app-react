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
      completed: true,
    },
    {
      id: 2,
      title: "Tailwind",
      detail: "Tailwindの学習を行う",
      time: 14,
      completed: false,
    },
  ]);

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      title: todo.title,
      detail: todo.detail,
      time: todo.time,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  // 自分メモ用 TodoItem->削除ボタンはidをもっていて、削除したいTODOのid以外のidの要素で配列を作り直す
  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id != id));
  };

  return (
    <>
      <SectionTitle>Activities</SectionTitle>
      <TodoInput onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            detail={todo.detail}
            time={todo.time}
            completed={todo.completed}
            onDeleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
export default App;
