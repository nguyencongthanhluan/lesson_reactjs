import React, { Component } from "react";
import ProductItem from "../ProductItem";

class ProductList extends Component {
  // renderProduct = () => {
  //   return this.props.data.map((item) => {
  //     return (
  //       <div className="col-4">
  //         <ProductItem />
  //       </div>
  //     );
  //   });
  // };
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">Danh sách sản phẩm</h1>
        {/* <div className="row">{this.renderProduct()}</div> */}
        <div className="row">
          {this.props.data.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <ProductItem
                  putToCart={this.props.putToCart}
                  getProduct={this.props.getProduct}
                  prod={item}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
