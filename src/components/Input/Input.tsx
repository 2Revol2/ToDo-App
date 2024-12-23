import { useRef } from "react";
import style from "./Input.module.scss";
type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: (event: React.SyntheticEvent) => void;
};

export const Input: React.FC<Props> = ({ todo, setTodo, submitHandler }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className={style.input_form}
      onSubmit={(e) => {
        submitHandler(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => {
          return setTodo(e.target.value);
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
};
