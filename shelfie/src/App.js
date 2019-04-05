import React, { Component } from "react";
// import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";
import Product from "./components/Product/Product"
import axios from "axios";
import "./App.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      product: []
    };
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Dashboard-form">
        <Dashboard product={this.state.product} />
        <Form />
        </div>
      </div>
    );
  }
}
export default App;