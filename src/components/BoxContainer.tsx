import { styled } from "@mui/material";
import React from "react";

const BoxContainer = (): JSX.Element => {
  return <Box />;
};

export default BoxContainer;

const Box = styled("div")(({ theme }) => ({
  width: "700px",
  height: "550px",
  margin: "30px auto",
  border: `2px solid ${theme.palette.primary.main}`,
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    width: "600px",
    height: "500px"
  },
  [theme.breakpoints.down("md")]: {
    width: "520px",
    height: "460px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "440px",
    height: "420px"
  }
}));
