import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/AddTask.css"
import "./styles/App.css"
import "./styles/Task.css"
import "./styles/FilterTask.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
