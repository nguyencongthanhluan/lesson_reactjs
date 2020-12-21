import React, { Component } from "react";

class CartItem extends Component {
  handleDeleteCartItem = () => {
    this.props.deleteCartItem(this.props.item.product.id);
  };

  render() {
    const { img, name, price } = this.props.item.product;
    const { quantity } = this.props.item;
    return (
      <tr>
        <td>
          <img style={{ width: 200 }} src={img} alt="product" />
        </td>
        <td style={{ fontSize: 25 }}>{name}</td>
        <td>${price}</td>
        <td>
          {quantity}
          <div className="btn-group">
            <button className="btn btn-info border-right">-</button>
            <button className="btn btn-info border-left">+</button>
          </div>
        </td>
        <td>{price * quantity}$</td>
        <td>
          <button onClick={this.handleDeleteCartItem} className="btn btn-info">
            x
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
