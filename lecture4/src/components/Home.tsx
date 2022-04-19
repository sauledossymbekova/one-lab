import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { useMyContext } from "../MyContext";

export const Home: React.FC = () => {
  const { message, setMessage } = useMyContext();

  return (
    <StyleContainer>
      <h1> The Page is: Home</h1>
      <div>Context is: {message} </div>
      <StyledButton
        onClick={() => setMessage("changed context in home component")}
      >
        change context message
      </StyledButton>
    </StyleContainer>
  );
};

const StyleContainer = styled(Container)`
  border-style: double;
  background-color: lightblue;
  margin: 10px;
`;

const StyledButton = styled(Button)`
  .MuiButton-textPrimary {
    background-color: red;
  }
`;
