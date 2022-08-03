import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CustomBox = styled(Box)`
  text-align: center;
  font-size: 50px;
  color: #2e3648;
  margin-top: 10px;
`;

function Heading() {
  return <CustomBox>Welcome to Pokemon World!</CustomBox>;
}

export default Heading;
