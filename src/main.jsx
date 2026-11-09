import { StrictMode } from 'react'
// What is StrictMode?

// It's a React development tool that helps identify potential problems in your components.

// For example, it can intentionally run certain component logic more than once during development to help expose bugs.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
