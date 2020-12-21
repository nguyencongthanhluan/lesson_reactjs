import React, { Component } from "react";

class Databinding extends Component {
  name = "Nguyen cong thanh luan";
  isHandsome = true;

  checkHandsome() {
    if (this.isHandsome) return "Yes";
    return "No";
  }

  //TH1: Hàm bình thường, không tham số
  showMessage() {
    console.log("Luan");
  }

  //TH2: Hàm có tham số đầu vào
  showMessageWithParams = (message) => () => {
    console.log(message);
    //closure: 1 hàm chạy return ra 1 hàm khác
  };

  //TH3: Hàm có con trỏ this
  showMessageWithThis = () => {
    console.log(this.name);
  };

  render() {
    let age = 12;
    return (
      <div>
        <button onClick={this.showMessage}>Show message</button>
        <button onClick={this.showMessageWithParams("Luan")}>
          Show message with params
        </button>
        <button onClick={this.showMessageWithThis}>
          Show message with this
        </button>

        <h1>Demo databinding reactjs</h1>
        <h3>Author: {this.name}</h3>
        <h3>Age: {age}</h3>
        {/* <h3>Handsome:{this.checkHandsome()}</h3> */}

        <h3>Handsome:{this.isHandsome ? "Yes" : "No"}</h3>
      </div>
    );
  }
}

export default Databinding;
