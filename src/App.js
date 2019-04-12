import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
//import logo from "./logo.svg";

import Header from "./components/Header";
import Router from "./components/Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
      </div>
    );
  }
}
export default App;