import { createTheme } from "@mui/material/styles";


// - import brings something from another module into our file.
// - createTheme is a function provided by MUI.
// - It allows us to create a theme configuration object.
// - "@mui/material/styles" is the MUI module that provides styling utilities.

  // A palette is a collection of colours.

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6B00",
      Text: "#FFFFFF",
    },
    secondary: {
      main: "#222222",
      Text: "#FFFFFF",
    },
    background: {
      default: "#FFF2E5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#222222",
      secondary: "#666666",
    },
  },

  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;