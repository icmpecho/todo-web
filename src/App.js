import { useEffect, useState } from "react";
import { todoApi } from "./api/todo";
import { TodoInput } from "./TodoInput";
import { TodoTable } from "./TodoTable";

const App = () => {
  const api = todoApi();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.todoItems().then((todoItems) => {
      setTodos(todoItems);
    });
  });

  const addTodo = (value) => {
    api.addTodoItem(value).then((createdTodoItem) => {
      setTodos(todos.concat([createdTodoItem]));
    })
  }

  const completeTodo = (id) => {
    api.markDone(id)
      .then(api.todoItems)
      .then((todoItems) => {
        setTodos(todoItems);
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
