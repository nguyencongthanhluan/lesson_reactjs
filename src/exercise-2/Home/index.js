import React, { Component } from "react";
import Header from "../Header";
import Carousel from "../Carousel";
import Content from "../Content";
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
      <div>
        {/*Begin Header */}
        <Header />
        {/* End Header */}
        {/* Carousel */}
        <Carousel />
        {/* End Carousel */}
        {/* Contnet */}
        <Content />
        {/* End Content */}
        {/* Footer */}
        <Footer />
        {/* End Footer */}
      </div>
    );
  }
}

export default Home;
