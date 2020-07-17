import React, { Component } from "react";
import Header from "./components/Header/Header.js";
import Profile from "../src/containers/Profile";
import Repos from "../src/containers/Repos";
import logo from ".//github-logo-icon-21.png";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header logo={logo} />
          <Profile />
          <Repos />
        </div>
      </div>
    );
  }
}
