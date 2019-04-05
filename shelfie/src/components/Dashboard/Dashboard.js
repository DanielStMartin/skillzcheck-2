import React, { Component } from "react";
import Product from "../Product/Product";
import "./Dashboard.css";
class Dashboard extends Component {
 

  render() {
    const products = this.props.product.map(product => {
      return (<div>
         </div>
      );
    });

    return <div className="Dashboard">{products}</div>;
  }
}

export default Dashboard;
