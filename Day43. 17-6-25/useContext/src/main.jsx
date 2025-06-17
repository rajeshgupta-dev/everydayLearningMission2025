import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextPage from "./contextPage/ContextPage.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextPage>
        <App />
      </ContextPage>
    </BrowserRouter>
  </StrictMode>
);
