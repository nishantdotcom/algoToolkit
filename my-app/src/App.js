import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./homeComponents/home";
import About from "./front_home/home";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(window.innerHeight, "  ", window.innerWidth);
  }

  render() {
    return (
      <Router basename="/">
        <Routes>
          {/* frontpage */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
