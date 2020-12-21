import React, { Component } from "react";

class Detail extends Component {
  render() {
    const {
      name,
      img,
      price,
      screen,
      backCamera,
      frontCamera,
    } = this.props.product;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3 className="text-center">{name}</h3>
            <img src={img} alt="product" className="w-100" />
          </div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{screen}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{frontCamera}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{backCamera}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
