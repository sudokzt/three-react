import React from "react";
import { render } from "react-dom";
import { initalizedThree } from "./three";

class App extends React.Component {
  constructor() {
    initalizedThree();
  }

  render() {
    return <p> Hello React!</p>;
  }
}

render(<App />, document.getElementById("app"));
