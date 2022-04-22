import { Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const rawUsers = [
  { id: "1", name: "Saule" },
  { id: "2", name: "Asem" },
  { id: "3", name: "Albina" },
];

export const RefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const userRef = useRef<HTMLInputElement>(null!);
  const [users, setUsers] = useState<typeof rawUsers>(rawUsers);

  const handleSearch = () => {
    const filteredUsers = rawUsers.filter((user) =>
      user.name.includes(userRef.current.value)
    );
    setUsers(filteredUsers);
  };

  return (
    <Container>
      <input type="text" ref={inputRef} />
      <input type="text" ref={userRef} onChange={handleSearch} />
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Container>
  );
};
