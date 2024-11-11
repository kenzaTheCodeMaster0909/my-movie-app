import React from "react";
import App from "./App";

import ReactDOM from "react-dom/client"; // Importation correcte de ReactDOM en React 18+

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
