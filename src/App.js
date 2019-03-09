import React from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

import "./global.css";
import "./myGrid.css";

import universal from "react-universal-component";

const Navbar = universal(import(`./shared-components/navbar`), {
  loading: () => null
});
const Footer = universal(import(`./shared-components/footer`), {
  loading: () => null
});

Navbar.preload();
Footer.preload();

const App = () => (
  <Router>
    <div className="content">
      <Navbar />
      <div className="xs-12 push-down">
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
);

export default hot(module)(App);
