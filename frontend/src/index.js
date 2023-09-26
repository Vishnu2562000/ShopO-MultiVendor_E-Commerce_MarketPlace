import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <Provider store={Store}>
    <div className="flex flex-col min-h-screen">
      <App />
    </div>
  </Provider>
);

reportWebVitals();
