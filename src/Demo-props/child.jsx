import React, { Component } from "react";

class Child extends Component {
  render() {
    console.log(this.props.item);
    const { name, rating } = this.props.item;
    return (
      <div>
        <h1>Child component</h1>
        <h3>movie name: {name}</h3>
        <h3>movie rating: {rating}</h3>
      </div>
    );
  }
}

export default Child;
