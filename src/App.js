import { useEffect, useState } from "react";
import { todoApi } from "./api/todo";
import { TodoInput } from "./TodoInput";
import { TodoTable } from "./TodoTable";

const App = () => {
  const api = todoApi();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.todoItems().then((resp) => {
      setTodos(resp.data);
    });
  });

  const addTodo = (value) => {
    api.addTodoItem(value).then((resp) => {
      setTodos(todos.concat([resp.data]));
    })
  }

  const completeTodo = (id) => {
    api.markDone(id)
      .then(api.todoItems)
      .then((resp) => {
        setTodos(resp.data);
      });
  }

  return (
    <div>
      <h1>TodoList</h1>
      <TodoInput onSubmitInput={addTodo} />
      <TodoTable todos={todos} onCompleteItem={completeTodo} />
    </div>
  );
}

export default App;
