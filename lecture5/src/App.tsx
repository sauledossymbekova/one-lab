import { Container } from "@mui/material";
// import { CallbackExample } from "./Examples/CallbackExample";
// import { MemoExample } from "./Examples/MemoExample";
// import { ReducerExample } from "./Examples/ReducerExample";
// import { RefExample } from "./Examples/RefExample";
// import { RequestExample } from "./Examples/RequestExample";
import ErrorBoundary from "./ErrorBoundary";
import ErrorComponent from "./components/ErrorComponent";
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./components/LazyComponent"));

function App() {
  return (
    <Container>
      <ErrorBoundary>
        <ErrorComponent name="Saule" />
        <ErrorComponent name="Asem" />
        <ErrorComponent name="Albina" />
      </ErrorBoundary>
      <Suspense fallback={<p> Loading... </p>}>
        <LazyComponent />
      </Suspense>
      <ErrorComponent name="Albina" />
    </Container>
  );
}

export default App;
