import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log("contructorChild");
  }
  componentWillMount() {
    console.log("componentWillMountChild");
  }
  render() {
    console.log("ChildComponentChild");
    return <h1 className="display-4">child component</h1>;
  }
  componentDidMount() {
    console.log("componentDidMountChild");
  }
  componentWillUnmount() {
    console.log("componentwillunmount_child");
  }
}

export default ChildComponent;
