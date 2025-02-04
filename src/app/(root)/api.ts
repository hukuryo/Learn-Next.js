export async function getName() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`http://localhost:3000/api/name`);
  const name = await res.json();
  return name as string;
}

export async function getUserList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`http://localhost:3000/api/userList`);
  const users = await res.json();
  return users;
}
