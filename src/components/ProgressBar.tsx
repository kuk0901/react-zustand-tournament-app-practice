import React from "react";
import { useProgressBarStore } from "../stores/useProgressBarStore";
import { styled } from "@mui/material";

const ProgressBar = (): JSX.Element => {
  const { barLength, barValue } = useProgressBarStore();

  return (
    <Progress>
      {barValue} / {barLength / 2}
    </Progress>
  );
};

export default ProgressBar;

const Progress = styled("div")(({ theme }) => ({
  width: "100px",
  height: "45px",
  border: `2px solid ${theme.palette.text.primary}`,
  fontSize: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto 10px",
  [theme.breakpoints.down("md")]: {
    height: "40px",
    fontSize: "28px"
  },
  [theme.breakpoints.down("sm")]: {
    height: "35px",
    fontSize: "25px"
  }
}));
