import "./styles/index.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, AppBar, Box, IconButton, Switch } from "@mui/material";
import routes from "./routes";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import RouterView from "./components/router-view";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { useState } from "react";
const outerTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#55bed6",
      dark: "#000051",
      light: "#9393ff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
};

function App() {
  const [theme, setTheme] = useState(outerTheme);

  const toggleTheme = () => {
    const newMode = theme.palette?.mode === "light" ? "dark" : "light";
    setTheme({
      ...theme,
      palette: {
        ...theme.palette,
        mode: newMode,
      },
    });
  };
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <div
        style={{
          padding: "6em 2em 2em 2em",
        }}
      >
        <AppBar
          sx={{
            color: "#ffff",
          }}
        >
          <Box
            sx={{
              px: 2,
              height: "4em",
              display: "flex",
              alignItems: "center",
              gap: "1em",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Box>
              {routes.map((route) => (
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  key={route.path}
                  to={route.path}
                >
                  <Button color="inherit">{route.name}</Button>
                </Link>
              ))}
            </Box>
            <Switch
              checked={theme.palette?.mode === "dark"}
              onChange={toggleTheme}
            />
          </Box>
        </AppBar>
        <RouterView />
      </div>
    </ThemeProvider>
  );
}

export default App;
