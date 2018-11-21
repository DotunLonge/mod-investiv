import React from "react";
import { NavLink } from "react-static";
import SmallScreen from "./small.style";

const suiviURL = process.env.REACT_STATIC_ENV === 'development' ?
  '' :
  '//v1.investivgroup.com/suivi/';

export default ({ showSideMenu, dismiss }) => {
  return (
    <React.Fragment>
      <SmallScreen className="xs-12 fade" showSideMenu={showSideMenu}>
        <div className="xs-12" id="small-screen-nav">
          <li className="xs-12">
            <NavLink to="/a-propos" onClick={dismiss}>
              A propos
            </NavLink>
          </li>
          <li className="xs-12 ">
            <NavLink to="/nos-services" onClick={dismiss}>
              Nos services
            </NavLink>
          </li>
          <li className="xs-12">
            <NavLink to="/nos-actualités" onClick={dismiss}>
              Nos actualités
            </NavLink>
          </li>

          <li className="xs-12">
            <a href={suiviURL} onClick={dismiss}>
              Suivre mon projet
            </a>
          </li>
          <li className="xs-12">
            <a href="#contactezNous" className="btn" onClick={dismiss}>
              Contactez nous
            </a>
          </li>
        </div>
      </SmallScreen>
    </React.Fragment>
  );
};
