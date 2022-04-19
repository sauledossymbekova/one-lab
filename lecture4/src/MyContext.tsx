import { createContext, useContext } from "react";

export type ContextProps = {
  message: string;
  setMessage: (c: string) => void;
};

export const MyContext = createContext<ContextProps>({
  message: "Hello World", 
  setMessage: () => {},
});

export const useMyContext = () => useContext(MyContext);
