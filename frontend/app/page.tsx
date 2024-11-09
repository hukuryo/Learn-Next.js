import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodosWithDelay(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  const data: Todo[] = await response.json();
  return data;
}

type TodoListProps = {
  todos: Todo[];
};

export const experimental_ppr = true;

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
        </li>
      ))}
    </ul>
  );
}

export default async function Page() {
  const todos = await fetchTodosWithDelay();

  return (
    <div>
      <h1>
        <AiFillAliwangwang />
        List
      </h1>
      <TodoList todos={todos} />
    </div>
  );
}
