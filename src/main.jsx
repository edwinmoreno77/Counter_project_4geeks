import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));
let num = 0;

setInterval(() => {
  num += 1;
  const formattedNum = String(num).padStart(6, "0");

  root.render(
    <StrictMode>
      <App seconds={formattedNum} />
    </StrictMode>
  );
}, 1000);
