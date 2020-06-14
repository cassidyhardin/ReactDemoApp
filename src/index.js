import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* LifeCycle hooks - certain methods which can always be called and hooked into the cycle of app to do soemthng

Mount (constructor/ render / componentDidMOunt) - Update - (render/componentDidUpdate)  - Unmount (componentWillUnmount)

lifestyle hooks cannot be used instateless functional calls 
 */
