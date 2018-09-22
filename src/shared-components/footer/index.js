import React from "react";
import facebook from "../../assets/sm/facebook.svg";
import twitter from "../../assets/sm/twitter.svg";
import youtube from "../../assets/sm/youtube.svg";
import linkedin from "../../assets/sm/linkedin.svg";

import { NavLink } from "react-static";
import FooterStyle from "./footer.style";

import logo1 from "../../assets/footer-logos/placeholder.svg";
import logo2 from "../../assets/footer-logos/smartphone.svg";
import logo3 from "../../assets/footer-logos/phone.svg";
import logo4 from "../../assets/footer-logos/whatsapp.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <FooterStyle className="xs-12">
        <div className="xs-10 xs-off-1">
          <div className="xs-12 md-4">
            <h4> COMPAGNIE </h4>

            <ul className="xs-12">
              <li className="xs-12">
                <NavLink to="/a-propos">A propos</NavLink>
              </li>
              <li className="xs-12 ">
                <NavLink to="/nos-services">Nos services</NavLink>
              </li>
              <li className="xs-12">
                <NavLink to="/nos-actualités">Nos actualités</NavLink>
              </li>

              <li className="xs-12">
                <NavLink to="#">Suivre mon projet</NavLink>
              </li>
              <li className="xs-12">
                <NavLink to="#">Contactez nous</NavLink>
              </li>
            </ul>
          </div>
          <div className="xs-12 md-4">
            <h4>CONTACTEZ NOUS</h4>
            <form className="xs-12">
              <div className="xs-12 form-group">
                <input className="xs-12" name="name" placeholder="Prénom" />
              </div>

              <div className="xs-12 form-group">
                <input
                  className="xs-12"
                  name="email"
                  placeholder="Adresse e-mail"
                />
              </div>

              <div className="xs-12 form-group">
                <textarea
                  className="xs-12"
                  name="message"
                  placeholder="Votre message"
                />
              </div>

              <div className="xs-12 form-group">
                <input type="submit" name="Envoyer" value="Envoyer" />
              </div>
            </form>
          </div>
          <div className="xs-12 md-4 infos">
            <div className="xs-12 info">
              <div className="xs-2 sm-3">
                <img src={logo1} />
              </div>
              <div className="xs-10 sm-9">
                <h4>Investiv - Côte d'Ivoire </h4>
                <p>Cocody, 2-Plateaux Vallons Abidjan</p>
              </div>
            </div>

            <div className="xs-12 info">
              <div className="xs-2 sm-3">
                <img src={logo2} />
              </div>
              <div className="xs-10 sm-9">
                <p>+22588352190</p>
              </div>
            </div>

            <div className="xs-12 info">
              <div className="xs-2 sm-3">
                <img src={logo3} />
              </div>
              <div className="xs-10 sm-9">
                <p>+22520362499</p>
              </div>
            </div>

            <div className="xs-12 info">
              <div className="xs-2 sm-3">
                <img src={logo4} />
              </div>
              <div className="xs-10 sm-9">
                <p>+22584202221</p>
              </div>
            </div>
          </div>

          <div className="xs-12 bar" />
          <div className="xs-12 sp">
            <div className="xs-12 md-6 f-l">
              <p> © 2018 Investiv. Tous Droits Réservés. </p>
            </div>
            <div className="xs-12 md-6 f-r">
              <div className="xs-12 md-8 md-off-4">
                <div className="xs-3">
                  <a href="#" target="_blank">
                    <img src={facebook} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href="#" target="_blank">
                    <img src={twitter} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href="#" target="_blank">
                    <img src={youtube} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href="#" target="_blank">
                    <img src={linkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterStyle>
    );
  }
}
