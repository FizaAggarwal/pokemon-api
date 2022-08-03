import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomButton = styled(Button)`
  margin: auto 30px;
  color: #2e3648;
`;
function Arrow(props) {
  return (
    <CustomButton
      sx={{
        visibility:
          props.name === "previous"
            ? props.previous
              ? "visible"
              : "hidden"
            : props.next
            ? "visible"
            : "hidden",
      }}
      onClick={props.onClick}
    >
      {props.name === "previous" ? (
        <ArrowBackIosNewIcon sx={{ fontSize: "40px" }} />
      ) : (
        <ArrowForwardIosIcon sx={{ fontSize: "40px" }} />
      )}
    </CustomButton>
  );
}

export default Arrow;
