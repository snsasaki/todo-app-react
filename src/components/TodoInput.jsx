import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTodo({ title, detail, time });

    setTitle("");
    setDetail("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">タイトル</label>
      <input
        type="text"
        placeholder="買い物"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="detail">詳細</label>
      <input
        type="text"
        placeholder="COSTCOに買い物に行く"
        id="detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <label htmlFor="time">開始時間</label>
      <input
        type="text"
        placeholder="13"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoInput;
