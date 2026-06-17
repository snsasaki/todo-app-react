import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function TodoFilter({ filter, onChangeFilter }) {
  return (
    <ToggleButtonGroup exclusive fullWidth size="large">
      {/* exclusive: 一つだけ選択可能にできる */}
      <ToggleButton
        onClick={() => onChangeFilter("all")}
        disabled={filter === "all"}
      >
        すべて
      </ToggleButton>
      <ToggleButton
        onClick={() => onChangeFilter("active")}
        disabled={filter === "active"}
      >
        未完了
      </ToggleButton>
      <ToggleButton
        onClick={() => onChangeFilter("completed")}
        disabled={filter === "completed"}
      >
        完了
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default TodoFilter;
