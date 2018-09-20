import React from "react";
import { NavLink } from "react-static";

export default class BigScreenNavbar extends React.PureComponent {
  render() {
    const { className } = this.props;
    return (
      <div className={className} id="right-menu">
        <div className="c-w">
          <div className="c">
            <div className="xs-12 inner">
              <li className="sm">
                <NavLink to="/a-propos">A propos</NavLink>
              </li>
              <li className="sm">
                <NavLink to="/nos-services">Nos services</NavLink>
              </li>
              <li className="sm">
                <NavLink to="/nos-actualités">Nos actualités</NavLink>
              </li>
              <li className="sm">
                <NavLink to="/s'identifier"> S'identifier</NavLink>
              </li>
              <li className="sm">
                <NavLink to="/s'inscrire" className="btn">
                  S'inscrire
                </NavLink>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
