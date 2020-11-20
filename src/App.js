import { useEffect, useState } from "react";
import { addTodoItem, todoItems } from "./api/todo";
import { TodoInput } from "./TodoInput";
import { TodoTable } from "./TodoTable";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoItems().then((resp) => {
      setTodos(resp.data);
    });
  });

  const addTodo = (value) => {
    addTodoItem({
      name: value,
    }).then((resp) => {
      setTodos(todos.concat([resp.data]));
    })
  }

  return (
    <div>
      <h1>TodoList</h1>
      <TodoInput onSubmitInput={addTodo} />
      <TodoTable todos={todos} />
    </div>
  );
}

export default App;
