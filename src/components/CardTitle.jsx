import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CardTitle = styled(Box)(({ color, margin }) => ({
  fontFamily: "Anton, sans-serif",
  fontSize: "30px",
  marginBottom: margin, //10px
  color: color,
}));

export default CardTitle;
