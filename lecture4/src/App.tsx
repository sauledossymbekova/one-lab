import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Container } from "@mui/material";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { MyContext } from "./MyContext";

// useContext
// custom hooks

function App() {
  const [message, setMessage] = useState<string>("defaultValue");

  return (
    <StyleContainer>
      <h1>App Context is: {message}</h1>
      <Button onClick={() => setMessage("defaultValue")}>
        change context message to default
      </Button>

      <MyContext.Provider value={{ message, setMessage }}>
        <Home />
        <About />
      </MyContext.Provider>
      
    </StyleContainer>
  );
}

export default App;

const StyleContainer = styled(Container)`
  border-style: solid;
  margin: 20px;
  background-color: lightgrey;
`;