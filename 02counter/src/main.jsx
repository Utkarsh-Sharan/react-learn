import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//looking for root div in index.html.
//its the mount point where React injects whole app.
//then telling react to render the App component into "root" div.
createRoot(document.getElementById("root")).render(
  //StrictMode is a development-only wrapper that helps to catch problems like depricated APIs, unsafe lifecycle methodsd, etc.
  <StrictMode>
    <App />
  </StrictMode>
);
