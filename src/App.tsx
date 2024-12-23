import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import "./app.css";
import { useState } from "react";
import { Todo } from "./model";
import { TodoList } from "./components/TodoList/TodoList";
export const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (todo !== "") {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <Header />
      <Input todo={todo} setTodo={setTodo} submitHandler={submitHandler} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
