import { useEffect, useState } from "react";
import { addTodoItem, markDone, todoItems } from "./api/todo";
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
    addTodoItem(value).then((resp) => {
      setTodos(todos.concat([resp.data]));
    })
  }

  const completeTodo = (id) => {
    markDone(id)
      .then(todoItems)
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
