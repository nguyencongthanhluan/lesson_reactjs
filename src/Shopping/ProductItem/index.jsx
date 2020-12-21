import React, { Component } from "react";
import classes from "./style.module.css";

class ProductItem extends Component {
  state = {
    isShowDesc: false,
  };

  handleToggleDescription = () => {
    this.setState({
      isShowDesc: !this.state.isShowDesc,
    });
  };

  handleViewDetail = () => {
    this.props.getProduct(this.props.prod);
  };

  handlePutToCart = () => {
    this.props.putToCart(this.props.prod);
  };
  render() {
    const { img, name, desc } = this.props.prod;
    return (
      <div className="card">
        <img src={img} alt="product" className={classes.productImg} />
        <div className="card-body">
          <h4>{name}</h4>
          {/* {this.isShowDesc ? <p>{desc}</p> : null} */}
          {this.state.isShowDesc && <p>{desc}</p>}

          <button className="btn btn-success" onClick={this.handleViewDetail}>
            Xem chi tiết
          </button>
          <button
            onClick={this.handleToggleDescription}
            className="btn btn-info ml-2"
          >
            {this.state.isShowDesc ? "Ẩn mô tả" : "Hiện mô tả"}
          </button>
          <button className="btn btn-primary" onClick={this.handlePutToCart}>
            Giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
