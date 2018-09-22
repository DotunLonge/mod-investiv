import React, { Component } from "react";
import ServicesStyle from "../../styles/services.style";
import { NavLink } from "react-static";

class Services extends Component {
  render() {
    return (
      <ServicesStyle className="xs-12">
        <div className="xs-12 withBackground">
          <div className="c-w relative">
            <div className="c t-c">
              <h3> Nos services </h3>
            </div>
          </div>
        </div>

        <div className="xs-12 nav-container">
          <div className="xs-10 xs-off-1">
            <div className="xs-12 sm-3">
              <NavLink
                activeClassName="active"
                to="/nos-services/cartographie-aérienne-par-drone"
              >
                Cartographie aérienne par drone
              </NavLink>
            </div>

            <div className="xs-12 sm-3">
              <NavLink
                activeClassName="active"
                to="/nos-services/diagnostic-phytosanitaire-par-drone"
              >
                Diagnostic Phytosanitaire par drone
              </NavLink>
            </div>

            <div className="xs-12 sm-3">
              <NavLink
                activeClassName="active"
                to="/nos-services/gestion-intelligente-d’exploitation-agricole"
              >
                Gestion intelligente d’exploitation agricole
              </NavLink>
            </div>

            <div className="xs-12 sm-3">
              <NavLink
                activeClassName="active"
                to="/nos-services/assistance-technique"
              >
                Assistance technique
              </NavLink>
            </div>
          </div>
        </div>
        <div className="xs-12">{this.props.children}</div>
      </ServicesStyle>
    );
  }
}

export default Services;
