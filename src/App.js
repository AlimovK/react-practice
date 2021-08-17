import React, { Component } from "react";
import Menu from "./menu";
import Order from "./order";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <div id="container">
          <Menu />
          <Order />
        </div>
      </>
    );
  }
}
