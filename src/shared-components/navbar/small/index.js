import React from "react";
import { NavLink } from "react-static";
import SmallScreen from "./small.style";
import { Translate } from "react-localize-redux";

const suiviURL = process.env.REACT_STATIC_ENV === 'development' ?
  '' :
  '//v1.investivgroup.com/suivi/';

export default ({ showSideMenu, dismiss, children }) => {
  return (
    <React.Fragment>
      <SmallScreen className="xs-12 fade" showSideMenu={showSideMenu}>
        <div className="xs-12" id="small-screen-nav">

        <li className="sm">
                <NavLink to="/a-propos" onClick={dismiss}><Translate id="navbar.aboutus"/></NavLink>
              </li>
              <li className="sm">
                <NavLink to="/nos-services" onClick={dismiss}><Translate id="navbar.services"/></NavLink>
              </li>
              <li className="sm">
                <NavLink to="/nos-actualités" onClick={dismiss}><Translate id="navbar.blog"/></NavLink>
              </li>
              <li className="sm">
                <NavLink to={suiviURL} target="_blank" onClick={dismiss}> <Translate id="navbar.follow"/></NavLink>
              </li>
              <li className="sm">
                <a href="#contactezNous" className="btn" onClick={dismiss}>
                <Translate id="navbar.contact"/>
                </a>
              </li>
              {children}
            

   
        </div>
      </SmallScreen>
    </React.Fragment>
  );
};
