import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  movie = {
    name: "Home",
    rating: 5,
  };

  render() {
    return (
      <div>
        <h1>Parent component</h1>
        <Child item={this.movie} />
      </div>
    );
  }
}

export default Parent;
