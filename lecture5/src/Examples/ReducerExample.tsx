import { useReducer } from "react";

interface ActionInterface {
  type: "increment" | "decrement";
  count: number;
}

interface StateInterface {
  count: number;
}

const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: action.count };
    case "decrement":
      return { ...state, count: action.count };
    default:
      throw new Error(`Error : ${action.type}`);
  }
};

export const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  const handlePlusClick = () => {
    dispatch({ type: "increment", count: state.count + 1 });
  };
  const handleMinusClick = () => {
    dispatch({ type: "decrement", count: state.count - 1 });
  };

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handlePlusClick}>+</button>
      <button onClick={handleMinusClick}>-</button>
    </>
  );
};

