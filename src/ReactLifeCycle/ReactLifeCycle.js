import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("contructor");
    this.state = {
      number: 1,
    };
  }
  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button
          className="btn btn-success display-4"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>

        {this.state.number < 5 ? <ChildComponent /> : ""}
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default ReactLifeCycle;
