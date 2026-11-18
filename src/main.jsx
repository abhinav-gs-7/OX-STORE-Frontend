import { StrictMode } from 'react'
// What is StrictMode?

// It's a React development tool that helps identify potential problems in your components.

// For example, it can intentionally run certain component logic more than once during development to help expose bugs.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./themes/theme";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* To make the theme available to MUI components inside App. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
