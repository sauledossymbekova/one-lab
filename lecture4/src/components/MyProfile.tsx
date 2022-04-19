import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { useMyContext } from "../MyContext";

export const MyProfile: React.FC = () => {
  const { message, setMessage } = useMyContext();

  return (
    <StyleContainer>
      <h1> The Profile Page</h1>
      <div>Context is: {message} </div>
      <Button
        onClick={() => setMessage("context is changed in MyProfile component")}
      >
        change context message
      </Button>
    </StyleContainer>
  );
};

const StyleContainer = styled(Container)`
  border-style: dotted;
  background-color: lightyellow;
  margin: 10px;
`;
