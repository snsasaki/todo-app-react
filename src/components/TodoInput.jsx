import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

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
    <Stack component="form" spacing={2} onSubmit={handleSubmit}>
      <TextField
        // ↓↓↓↓↓TextFieldのみ使えるprops↓↓↓↓
        label="タイトル"
        type="text"
        placeholder="買い物"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        // TODO: いらないかも
        fullWidth
      />
      <TextField
        label="詳細"
        type="text"
        placeholder="COSTCOに買い物に行く"
        id="detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        required
      />
      <TextField
        label="開始時間(何時〜)"
        type="text"
        placeholder="13"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" size="medium">
        追加
      </Button>
    </Stack>
  );
}

export default TodoInput;
