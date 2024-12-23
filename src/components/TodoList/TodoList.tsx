import style from "./TodoList.module.scss";
import { Todo } from "../../model";
import { SingleToDo } from "../SingleToDo/SingleToDo";
type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className={style.todos}>
      {todos.map((todo) => {
        return (
          <SingleToDo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};
