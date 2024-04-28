import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./Theme";
import Appbar from "./Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Previous from "./Previous";

function App() {
  const [mode, setMode] = React.useState(() => {
    const mode = localStorage.getItem("mode");
    return mode ? mode : "dark";
  });

  const toggleMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <ThemeProvider theme={mode === "light" ? themes.light : themes.dark}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Appbar
            mode={mode}
            setMode={toggleMode}
          />
        </div>

        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/previous"
              element={<Previous />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
