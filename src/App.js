import "./App.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./Theme";
import Appbar from "./Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  const [mode, setMode] = React.useState("dark");
  return (
    <ThemeProvider theme={mode === "light" ? themes.light : themes.dark}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100vh",
        }}
      >
        <Appbar mode={mode} setMode={setMode} />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
