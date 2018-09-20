import React from "react";
import { NavLink } from "react-static";
import SmallScreen from "./small.style";

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
            <NavLink to="/s'identifier" onClick={dismiss}>
              S'identifier
            </NavLink>
          </li>
          <li className="xs-12">
            <NavLink to="/s'inscrire" className="btn" onClick={dismiss}>
              S'inscrire
            </NavLink>
          </li>
        </div>
      </SmallScreen>
    </React.Fragment>
  );
};
