import { Container, Input } from "@mui/material";
import { useMemo, useState } from "react";

// useCallback(fn, deps) = useMemo(() => fn, deps).
const calculateHash = (s: string) => {
  return s + "some hash";
};

export const MemoExample: React.FC = () => {
  const [value, setValue] = useState("");

  const hash = useMemo(() => calculateHash(value), [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <h1>Hash: {hash}</h1>
      <Input type="text" onChange={handleInputChange}></Input>
    </Container>
  );
};
