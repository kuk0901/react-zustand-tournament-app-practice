import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  styled
} from "@mui/material";
import { Home, Brightness4, Brightness7, Instagram } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useThemeStore } from "../stores/useThemeStore";
import { useUIRandomImageIndexStore } from "../stores/useUIRandomImageIndexStore";
import { useSelectedIndexStore } from "../stores/useSelectedIndexStore";
import { useResultIndexStore } from "../stores/useResultIndexStore";
import { useProgressBarStore } from "../stores/useProgressBarStore";

const Header = (): JSX.Element => {
  const { themeMode, changeMode } = useThemeStore();
  const { resetRandomIndex } = useUIRandomImageIndexStore();
  const { clearSelectedIndex } = useSelectedIndexStore();
  const { resetResultIndex } = useResultIndexStore();
  const { resetBarLength, resetBarValue } = useProgressBarStore();
  const navigate = useNavigate();

  const ToggledMode = () => {
    if (themeMode === "dark") {
      changeMode("light");
    } else {
      changeMode("dark");
    }
  };

  const handleClick = () => {
    resetRandomIndex();
    clearSelectedIndex();
    resetResultIndex();
    resetBarLength();
    resetBarValue();
    navigate("/");
  };

  return (
    <AppBar sx={{ position: "sticky", zIndex: "9" }}>
      <StyledToolbar>
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "13px", md: "14px", lg: "16px" },
            cursor: "pointer"
          }}
          onClick={handleClick}
        >
          JIWON-TOURNAMENT
        </Typography>

        <Tooltip title="Home">
          <IconButton onClick={handleClick}>
            <Home sx={{ cursor: "pointer" }} />
          </IconButton>
        </Tooltip>

        <Icons sx={{ gap: "0" }}>
          <Typography
            sx={{
              fontSize: "16px"
            }}
          >
            출처 :&nbsp;
          </Typography>

          <Tooltip title="xjiwonparkx">
            <Instagram sx={{ cursor: "pointer" }}>
              <ImageSource
                sx={{
                  fontSize: { xs: "13px", sm: "14px", md: "14px", lg: "16px" }
                }}
                href="https://www.instagram.com/xjiwonparkx/"
                target="_blank"
              >
                xjiwonparkx
              </ImageSource>
            </Instagram>
          </Tooltip>
        </Icons>

        <Icons>
          <Tooltip title="Mode Change">
            <IconButton onClick={ToggledMode}>
              {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Tooltip>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Icons = styled("div")({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  gap: "10px"
});

const ImageSource = styled("a")({
  color: "inherit",
  textDecoration: "none"
});
