import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/Context";

// This code is using ReactDOM to create a root element in the DOM, and then render a React component tree inside of it. The root element is created from the DOM element with an id of "root". The component tree consists of a React.StrictMode component, a ContextProvider component, and an App component. The ContextProvider component provides context to the App component, which is then rendered inside the root element.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
