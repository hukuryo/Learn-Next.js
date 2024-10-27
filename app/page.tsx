import { cookies } from "next/headers";
import React from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
async function fetchTodosWithDelay(): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          cache: "no-store",
        }
      );
      const todos: Todo[] = await response.json();
      resolve(todos);
    }, 3000);
  });
}

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  console.log(token);
  const todos = await fetchTodosWithDelay();

  return (
    <div>
      <h1>List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  );
}
