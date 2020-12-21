import React, { Component } from "react";
import DemoChildComponent from "./DemoChildComponent";

class DemoPure extends Component {
  state = {
    number: 1,
    status: false,
    product: { id: 1, name: "iphone", like: 0 },
  };

  render() {
    return (
      <div>
        <DemoChildComponent product={this.state.product} />
        <p>Like {this.state.product.like}</p>
        <button
          onClick={() => {
            let newProduct = { ...this.state.product };
            newProduct.like += 1;
            this.setState({ product: newProduct });
          }}
        >
          Like
        </button>
        <h1 className="mt-5">{this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ status: !this.state.status }, () => {
              console.log(this.state.status);
            });
          }}
        >
          change status
        </button>
      </div>
    );
  }
}

export default DemoPure;
