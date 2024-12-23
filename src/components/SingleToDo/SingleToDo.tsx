import style from "./SingleToDo.module.scss";
import { Todo } from "../../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleToDo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  function isDoneHandler(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }
  function deleteHandler(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function editHandler(event: React.FormEvent, id: number) {
    event.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  }
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form
      className={style.todo}
      onSubmit={(event) => editHandler(event, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          className={style.edit_input}
          value={editTodo}
          type="text"
          onChange={(event) => setEditTodo(event.target.value)}
        />
      ) : todo.isDone ? (
        <s className={style.todo_text}>{todo.todo}</s>
      ) : (
        <span className={style.todo_text}>{todo.todo}</span>
      )}

      <div>
        <span
          className={style.icon}
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span onClick={() => deleteHandler(todo.id)} className={style.icon}>
          <AiFillDelete />
        </span>
        <span onClick={() => isDoneHandler(todo.id)} className={style.icon}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
