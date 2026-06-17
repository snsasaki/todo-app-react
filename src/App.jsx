import { useEffect, useState } from "react";
import SectionTitle from "./components/SectionTitle";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";
import TodoCount from "./components/TodoCount";

// 初回だけ入れるTodo
const initTodos = [
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
];

function App() {
  const [filter, setfilter] = useState("all");

  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    // saveTodos（ローカルストレージ）にデータが入っていれば、JS配列（JSON）にして返す
    if (saveTodos) {
      return JSON.parse(saveTodos);
    }
    // 入っていなければ用意した初期値を入れる
    return initTodos;
  });

  // 依存配列todosに変更が入った時のみ、実装する処理
  // → ローカルストレージにtodosの内容を文字列化して入れる
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const toggleTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <SectionTitle>Activities</SectionTitle>
      <TodoInput onAddTodo={addTodo} />
      <TodoFilter filter={filter} onChangeFilter={setfilter} />
      <TodoCount count={activeTodoCount}></TodoCount>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            detail={todo.detail}
            time={todo.time}
            completed={todo.completed}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
export default App;
