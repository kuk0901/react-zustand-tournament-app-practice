import { IconButton, Tooltip, styled } from "@mui/material";
import React from "react";
import { useResultIndexStore } from "../stores/useResultIndexStore";
import { Refresh } from "@mui/icons-material";
import { useUIRandomImageIndexStore } from "../stores/useUIRandomImageIndexStore";
import { useNavigate } from "react-router-dom";
import { useProgressBarStore } from "../stores/useProgressBarStore";

const ResultImage = (): JSX.Element => {
  const { resultIndex, resetResultIndex } = useResultIndexStore();
  const { resetRandomIndex } = useUIRandomImageIndexStore();
  const { resetBarLength, resetBarValue } = useProgressBarStore();

  const navigate = useNavigate();

  const [index] = resultIndex;

  const handleClick = () => {
    navigate("/");
    resetResultIndex();
    resetRandomIndex();
    resetBarLength();
    resetBarValue();
  };

  return (
    <>
      <Image
        key={`../../image/ex${index}`}
        sx={{ backgroundImage: `url("../../image/ex${index}.png")` }}
      />
      <Tooltip title="Re-play">
        <IconButton
          onClick={handleClick}
          sx={{ display: "block", margin: "0 auto" }}
        >
          <Refresh sx={{ width: "80px", height: "50px" }} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ResultImage;

const Image = styled("div")(({ theme }) => ({
  width: "400px",
  height: "580px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  border: `2px solid ${theme.palette.primary.main}`,
  margin: "0 auto 10px",
  [theme.breakpoints.down("md")]: {
    width: "340px",
    height: "540px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "290px",
    height: "460px"
  }
}));
