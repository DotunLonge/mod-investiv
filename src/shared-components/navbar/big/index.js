import React from "react";
import { NavLink } from "react-static";
import { Translate } from "react-localize-redux";

const suiviURL = process.env.REACT_STATIC_ENV === 'development' ?
  '' :
  'http://v1.investivgroup.com/suivi/';

export default class BigScreenNavbar extends React.PureComponent {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className} id="right-menu">
        <div className="c-w">
          <div className="c">
            <div className="xs-12 inner">
              <li className="sm">
                <NavLink to="/a-propos"><Translate id="navbar.aboutus"/></NavLink>
              </li>
              <li className="sm">
                <NavLink to="/nos-services"><Translate id="navbar.services"/></NavLink>
              </li>
              <li className="sm">
                <NavLink to="/nos-actualités"><Translate id="navbar.blog"/></NavLink>
              </li>
              <li className="sm">
                <NavLink to={suiviURL} target="_blank"> <Translate id="navbar.follow"/></NavLink>
              </li>
              <li className="sm">
                <a href="#contactezNous" className="btn">
                <Translate id="navbar.contact"/>
                </a>
              </li>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
