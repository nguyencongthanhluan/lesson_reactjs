import React, { Component } from "react";
import Header from "../Header";
import ProductList from "../ProductList";
import Detail from "../Detail";
import Cart from "../Cart";

class HomeShopping extends Component {
  productList = [
    // {
    //   id: "sp_1",
    //   name: "iphoneX",
    //   price: "30.000.000 VNÄ�",
    //   screen: "screen_1",
    //   backCamera: "backCamera_1",
    //   frontCamera: "frontCamera_1",
    //   img:
    //     "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
    //   desc:
    //     "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    // },
    {
      id: "sp_2",
      name: "Note 7",
      price: 1000,
      screen: "screen_2",
      backCamera: "backCamera_2",
      frontCamera: "frontCamera_2",
      img:
        "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
      desc:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      id: "sp_3",
      name: "Vivo",
      price: 2000,
      screen: "screen_3",
      backCamera: "backCamera_3",
      frontCamera: "frontCamera_3",
      img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
      desc:
        "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: "sp_4",
      name: "Blacberry",
      price: 3000,
      screen: "screen_4",
      backCamera: "backCamera_4",
      frontCamera: "frontCamera_4",
      img:
        "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
      desc:
        "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ];

  state = {
    selectedProduct: null,
    cart: [],
  };

  getProduct = (prod) => {
    console.log(prod, "This is data from child pass to parent in params");
    this.setState({
      selectedProduct: prod,
    });
  };

  putToCart = (prod) => {
    console.log(prod);
    const cloneCart = [...this.state.cart];
    //item sẽ push vào giỏ hàng
    const cartItem = {
      product: prod,
      quantity: 1,
    };
    //Kiểm tra sản phẩm tồn tại trong giỏ hàng
    const index = cloneCart.findIndex((item) => item.product.id === prod.id);
    if (index === -1) {
      cloneCart.push(cartItem);
    } else {
      cloneCart[index].quantity++;
    }
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  deleteCartItem = (id) => {
    console.log(id);
    const cloneCart = [...this.state.cart];

    const index = cloneCart.findIndex((item) => item.product.id === id);
    if (index !== -1) {
      cloneCart.splice(index, 1);
    }
    this.setState({
      cart: cloneCart,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <ProductList
          putToCart={this.putToCart}
          getProduct={this.getProduct}
          data={this.productList}
        />
        {this.state.selectedProduct && (
          <Detail product={this.state.selectedProduct} />
        )}
        <Cart deleteCartItem={this.deleteCartItem} cart={this.state.cart} />
      </div>
    );
  }
}

export default HomeShopping;
