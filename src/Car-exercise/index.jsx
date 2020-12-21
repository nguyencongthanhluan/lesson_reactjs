import React, { Component } from "react";
import RedCar from "../assets/img/red-car.jpg";
import BlackCar from "../assets/img/black-car.jpg";
import SilverCar from "../assets/img/silver-car.jpg";

class CarExercise extends Component {
  state = {
    car: RedCar,
  };

  changeColor = (img) => () => {
    this.setState(
      {
        car: img,
      },
      () => {
        console.log(this.state.car);
      }
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.car} alt="car" />
          </div>
          <div className="col-6">
            <p>Change color</p>
            <button
              onClick={this.changeColor(RedCar)}
              className="btn btn-danger mx-2"
            >
              Red
            </button>
            <button
              onClick={this.changeColor(SilverCar)}
              className="btn btn-secondary mx-2"
            >
              Silver
            </button>
            <button
              onClick={this.changeColor(BlackCar)}
              className="btn btn-dark mx-2"
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CarExercise;
