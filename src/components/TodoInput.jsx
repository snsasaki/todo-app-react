function TodoInput() {
  return (
    <>
      <label htmlFor="title">タイトル</label>
      <input type="text" placeholder="買い物" id="title" />
      <label htmlFor="detail">詳細</label>
      <input type="text" placeholder="COSTCOに買い物に行く" id="detail" />
      <label htmlFor="time">開始時間</label>
      <input type="text" placeholder="13" id="time" />
    </>
  );
}

export default TodoInput;
