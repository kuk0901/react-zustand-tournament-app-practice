import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import TournamentPage from "./pages/TournamentPage";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { useThemeStore } from "./stores/useThemeStore";
import TotalLayout from "./layout/TotalLayout";
import ResultPage from "./pages/ResultPage";

function App(): JSX.Element {
  const { themeMode } = useThemeStore();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1500
          }
        }
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="BoxContainer"
        bgcolor={"background.default"}
        color={"text.primary"}
        height={"100vh"}
      >
        <Routes>
          <Route path="/" element={<TotalLayout />}>
            <Route index element={<StartPage />} />
            <Route path="tournament" element={<TournamentPage />} />
            <Route path="result" element={<ResultPage />} />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
