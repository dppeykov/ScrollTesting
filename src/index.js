import React from "react";
import ReactDOM from "react-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Link to="section1" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
