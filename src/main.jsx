import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MarkerPreviewer from "./MarkerPreviewer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MarkerPreviewer />
  </StrictMode>
);