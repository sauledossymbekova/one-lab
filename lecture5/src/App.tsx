import { Container } from "@mui/material";
import { CallbackExample } from "./Examples/CallbackExample";
import { MemoExample } from "./Examples/MemoExample";
import { ReducerExample } from "./Examples/ReducerExample";
import { RefExample } from "./Examples/RefExample";
import { RequestExample } from "./Examples/RequestExample";

function App() {
  return (
    <Container>
      <RefExample />
    </Container>
  );
}

export default App;
