import React, { Component } from "react";
import "./App.css";
import Izberg from "./components";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Izberg />
      </Router>
    );
  }
}

export default App;
