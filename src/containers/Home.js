import React from "react";
import { withSiteData, NavLink } from "react-static";
import HomeStyle from "../styles/home.style";
import Background from "../assets/background.clean.png";
import Loading from "../shared-components/loader";

class Home extends React.Component {
  state = {
    loaded: false
  };

  onLoad = e => {
    this.setState({
      loaded: true
    });
  };

  render() {
    const { loaded } = this.state;
    return (
      <HomeStyle>
        <section className="xs-12 header">
          <div className="c-w">
            <div className="c t-c">
              <h2 className="xs-10 xs-off-1">Révolutionner votre production</h2>
              <p className="xs-10 xs-off-1 sm-6 sm-off-3">
                Modernisez vos opérations agricoles, augmentez vos rendements et
                gagnez du temps grâce à nos services d'agriculture de précision
                axés sur la technologie.
              </p>

              <div className="xs-10 xs-off-1 sm-6 sm-off-3">
                <div className="xs-12 sm-6">
                  <div className="xs-12 sm-10 mr-r">
                    <NavLink to="#" className="btn">
                      S'inscrire
                    </NavLink>
                  </div>
                </div>
                <div className="xs-12 sm-6">
                  <div className="xs-12 sm-10 mr-l">
                    <NavLink to="#" className="btn-inverse">
                      Contactez nous
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`xs-12  ${loaded ? "loaded" : "not-loaded"}`}
          id="hasBackgroundImage"
        >
          {loaded === false && (
            <div className="c-w" id="up">
              <div className="c t-c">
                <Loading />
              </div>
            </div>
          )}

          <img
            src={Background}
            id="actual-background"
            onLoad={this.onLoad}
            height="500px"
            width="100vw"
          />
        </section>
      </HomeStyle>
    );
  }
}

let HomePage = withSiteData(Home);
export default HomePage;
