import React, { Component, PureComponent } from "react";

class DemoChildComponent extends PureComponent {
  render() {
    console.log("child component");
    return (
      <div className="container">
        <div style={{ width: 300 }} className="card text-left">
          <img className="card-img-top" src="http://picsum.photos/300" alt />
          <div className="card-body">
            <h4 className="card-title">{this.props.product.name}</h4>
            <p className="card-text">Like:{this.props.product.like}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoChildComponent;
