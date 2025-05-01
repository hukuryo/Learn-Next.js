"use client";

import { useState } from "react";
import { getUserList } from "../app/(root)/api";
import { useEffect } from "react";
import { UserCard } from "../app/(root)/_user-card";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export function UserList({ searchQuery }: { searchQuery: string }) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUserList();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {filteredUsers.map((user) => (
        <UserCard key={user.id}>
          <h5 className="mb-2 text-xl font-bold tracking-tight">{user.name}</h5>
          <p className="mb-2 text-sm">📧 {user.email}</p>
          <p className="mb-2 text-sm">📞 {user.phone}</p>
          <p className="text-sm">🌐 {user.website}</p>
        </UserCard>
      ))}
    </div>
  );
}
