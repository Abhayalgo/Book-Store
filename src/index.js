import React from "react";
import ReactDOM from "react-dom";//client
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
</BrowserRouter>,
document.getElementById("root")
);



//1:16-17--phir +1;17 home.js+1:18--add book .js+Books.js+ 1:19:12--about.js

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
