import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import AppStyle from './app.css.js'
import "./global.css";

const App = () => (
  <Router>
    <AppStyle>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </AppStyle>
  </Router>
)

export default hot(module)(App)
