import React from "react";
import "./styles.css";
import { Todo } from "./model";
import SingleTodo from "./singleTodo";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: props) => {
  console.log(todos);
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo 
        todo={todo} 
        key={todo.id}
         todos={todos}
         setTodos={setTodos}
         />
      ))}
    </div>
  );
};

export default TodoList;
