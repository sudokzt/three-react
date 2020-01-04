import React from "react";
import { render } from "react-dom";
import { Three } from "./three";

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Hello React!</p>;
        <Three />;
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
