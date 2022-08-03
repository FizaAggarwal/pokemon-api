import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)`
  width: 180px;
  background-color: #add8e6;
  color: #2e3648;
  margin: 13px 30px;
`;

function Pokemon(props) {
  return <CustomButton onClick={props.onClick}>{props.name}</CustomButton>;
}

export default Pokemon;
