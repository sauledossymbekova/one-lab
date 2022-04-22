import { Button, Container, Input } from "@mui/material";
import { useCallback, useState } from "react";

// useCallback(fn, deps) = useMemo(() => fn, deps).
const calculateHash = (s: string) => {
  return s + "some hash";
};

export const CallbackExample: React.FC = () => {
  const [value, setValue] = useState("");
  const [hashedValue, setHashedValue] = useState("");

  const hash = useCallback(() => {
    setHashedValue(calculateHash(value));
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <h1>HashedValue: {hashedValue}</h1>
      <Input type="text" onChange={handleInputChange}></Input>
      <Button onClick={hash}>hash</Button>
    </Container>
  );
};
