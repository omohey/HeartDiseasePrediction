import { createTheme } from "@mui/material/styles";

const lightPalette = {
  mode: "light",
};

const darkPalette = {
  mode: "dark",
  primary: {
    main: "#354770",
    light: "#4E69A6",
    dark: "#233158",
    contrastText: "#fff",
  },
  secondary: {
    main: "#F08028",
    light: "#F5A057",
    dark: "#D86C00",
    contrastText: "#ffffff",
  },

  background: {
    default: "#1A233B", // Adjust the default background for dark mode
    paper: "#2A3B5D", // Adjust paper background for dark mode
  },

  success: {
    main: "#4CAF50",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#B3B3B3",
    disabled: "#B3B3B3",
  },
};

const themes = {
  light: createTheme({
    palette: lightPalette,
  }),
  dark: createTheme({
    palette: darkPalette,
  }),
};

export default themes;
