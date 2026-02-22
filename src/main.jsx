import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/animations.css";
import "./styles/tablet.css";
import "./styles/desktop.css";
import App from "./styles/App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
