import React, { Component } from "react";

class MovieItem extends Component {
  render() {
    console.log(this.props.item);
    const { hinhAnh, tenPhim, moTa } = this.props.item;
    return (
      <div>
        <div className="card mb-4">
          <img src={hinhAnh} alt="movie" />
          <div className="p-3">
            <h3>{tenPhim}</h3>
            <p>{moTa.substr(0, 80) + "..."}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
