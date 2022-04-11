import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import 'bootstrap/dist/css/bootstrap.min.css';  //부트스트랩 추가

import { BrowserRouter } from 'react-router-dom';  //spa설정

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();