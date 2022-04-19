import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { MyProfile } from "./MyProfile";

export const About: React.FC = () => {
  return (
    <StyleContainer>
      <h1> The Page is: About</h1>
      <MyProfile />
    </StyleContainer>
  );
};

const StyleContainer = styled(Container)`
  border-style: double;
  margin: 10px;
  background-color: lightblue;
`;
