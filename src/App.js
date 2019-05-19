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
import { LocalizeProvider } from "react-localize-redux";

const App = () => (
  <LocalizeProvider>

  <Router>
    <div className="content">
      <Navbar />
        <div className={sessionStorage.getItem("isAuthenticated") === 'true' ? 'xs-12': 'push-down xs-12'}>
          <Routes />
        </div>
      <Footer />
    </div>
  </Router>
  </LocalizeProvider>

);

export default hot(module)(App);
