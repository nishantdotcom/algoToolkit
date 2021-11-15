import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "./front_home/particles-config";
import App from "./App";
//This is the main folder assigned all component are added here
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
