import { CheckBox } from "@mui/icons-material";
import { Box, IconButton, Tooltip, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = (): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/tournament");
  return (
    <Box className="container">
      <ImageBg />
      <Tooltip title="start">
        <IconButton
          sx={{
            display: "block",
            margin: "0 auto"
          }}
          onClick={handleClick}
        >
          <CheckBox
            sx={{
              width: { xs: "70px", sm: "75px", lg: "80px" },
              height: { xs: "40px", sm: "45px", lg: "50px" }
            }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default StartPage;

const ImageBg = styled("div")(({ theme }) => ({
  width: "900px",
  height: "600px",
  backgroundImage: "url('../image/home(960_634).png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  margin: "0 auto 1rem",
  borderRadius: "3px",
  [theme.breakpoints.down("lg")]: {
    width: "700px",
    height: "500px"
  },
  [theme.breakpoints.down("md")]: {
    width: "500px",
    height: "400px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "400px",
    height: "300px"
  }
}));
