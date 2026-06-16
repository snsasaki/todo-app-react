// TODO: filterはcssで使うために受け取る
function TodoFilter({ filter, onChangeFilter }) {
  return (
    <div>
      <button onClick={() => onChangeFilter("all")}>すべて</button>
      <button onClick={() => onChangeFilter("active")}>未完了</button>
      <button onClick={() => onChangeFilter("completed")}>完了</button>
    </div>
  );
}

export default TodoFilter;
