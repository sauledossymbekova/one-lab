import { FC } from "react";

interface Props {
  name: string;
}

const ErrorComponent: FC<Props> = ({ name }) => {
  if (name === "Saule") {
    throw new Error(" Error name Saule!");
  }
  return <h1>{name}</h1>;
};

export default ErrorComponent;
