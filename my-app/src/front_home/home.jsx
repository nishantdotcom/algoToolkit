import React, { Component } from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";
class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Cards />
        <Footer />
      </>
    );
  }
}
export default Home;
