import React from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

import "./global.css";
import "./myGrid.css";

import Navbar from "./shared-components/navbar";

const App = () => (
  <Router>
    <div className="content">
      <Navbar />
      <div className="xs-12">
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
