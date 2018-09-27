import React from "react";
import NavbarStyle from "./navbar.style";
// Fade
import { NavLink } from "react-static";

import logoPlain from "../../assets/logo.plain.svg";
import universal from "react-universal-component";

import Hamburger from "./hamburger";

const BigScreenNavbar = universal(import(`./big`), {
  loading: () => null
});
const SmallScreenNavbar = universal(import(`./small`), {
  loading: () => null
});
BigScreenNavbar.preload();
SmallScreenNavbar.preload();

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showSideMenu: false
    };
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      this.setState({
        isBigScreen: window.innerWidth > 1023
      });
      window.addEventListener("resize", this.resizeEventListener);
    }
  }

  resizeEventListener = () => {
    if (typeof window !== undefined) {
      this.setState({
        isBigScreen: window.innerWidth > 1023
      });
    }
  };

  triggerSideMenu = () =>
    this.setState(p => {
      return { showSideMenu: !p.showSideMenu };
    });

  closeSideMenu = () => {
    this.setState({
      showSideMenu: false
    });
  };

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.resizeEventListener);
    }
  }

  render() {
    const { isBigScreen, showSideMenu } = this.state;

    return (
      <NavbarStyle className="xs-12">
        <div className="xs-10 xs-off-1">
          {/* <Fade showSideMenu={showSideMenu} /> */}

          {isBigScreen ? (
            <React.Fragment>
              <div className="xs-12 sm-3">
                <li className="xs-12" id="logo-li">
                  <div className="c-w">
                    <div className="c">
                      <div className="xs-10">
                        <NavLink to="/" id="logo-link">
                          <img src={logoPlain} alt="logo-plain" id="logo" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <BigScreenNavbar className="xs-12 sm-9" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="xs-12">
                <li className="xs-12" id="logo-li">
                  <div className="c-w">
                    <div className="c">
                      <div className="xs-9 l">
                        <NavLink to="/" id="logo-link">
                          <img src={logoPlain} alt="logo-plain" id="logo" />
                        </NavLink>
                      </div>
                      <div className="xs-3 show-1023 r">
                        <Hamburger
                          onClick={this.triggerSideMenu}
                          showSideMenu={showSideMenu}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <SmallScreenNavbar
                showSideMenu={showSideMenu}
                dismiss={this.triggerSideMenu}
              />
            </React.Fragment>
          )}
        </div>
      </NavbarStyle>
    );
  }
}

export default Navbar;
