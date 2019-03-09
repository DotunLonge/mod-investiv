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

import request from 'axios';

const suiviURL = process.env.REACT_STATIC_ENV === 'development' ?
  '' :
  'http://v1.investivgroup.com/suivi/';
const contactURL = process.env.REACT_STATIC_ENV === 'development' ?
  'http://localhost:8000/jsoncontact/' :
  'http://v1.investivgroup.com/jsoncontact/';

export default class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactStatus: ''
    }
  }
  
  onContactChange = () => {
    this.setState({contactStatus: ''});
  };

  envoyerMessage = (event) => {
    event.preventDefault();
    if (this.honeypot.value) return;
    let data = {
      'full_name': this.nom.value.trim(),
      'email': this.email.value.trim(),
      'message': this.message.value.trim()
    };
    this.setState({'contactStatus': 'submitting'});
    const post = () => {
      request.post(contactURL, data, {
        headers: {
          'X-CSRFToken': this.csrf_token,
          'Accept': 'application/json'
        }
      }).then(res => {
        if (res.data.success) this.setState({'contactStatus': 'submitted'});
        else this.setState({'contactStatus': 'failed'});
      })
      .catch(err => this.setState({'contactStatus': 'failed'}))
    };
    post();
  };

  render() {
    let btnSubmitText = this.state.contactStatus === 'submitting' ?
      'Envoi en cours...' :
      this.state.contactStatus === 'failed' ?
      'Réessayez plus tard.' :
      this.state.contactStatus === 'submitted' ?
      'Merci! Nous avons reçu votre message.' :
      'Envoyer';
    let btnSubmitColors = {
      submitting: {
        color: 'initial',
        background: 'initial'
      },
      failed: {
        color: 'white',
        background: '#ef6c00'
      },
      submitted: {
        background: '#8bc34a',
        color: 'white'
      }
    };
    let btnSubmitStyle = {...btnSubmitColors[this.state.contactStatus]};
    let btnSubmitDisabled = this.state.contactStatus === 'submitting';

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
                <a href={suiviURL} target="_blank">Suivre mon projet</a>
              </li>
              <li className="xs-12">
                <a href="#contactezNous">Contactez nous</a>
              </li>
            </ul>
          </div>
          <div className="xs-12 md-4" id="contactezNous">
            <h4>CONTACTEZ NOUS</h4>
            <form onSubmit={this.envoyerMessage} className="xs-12">
              <div className="xs-12 form-group">
                <input id="contact.nom" className="xs-12" required={true} ref={e => this.nom = e} name="name" placeholder="Nom"
                  onChange={this.onContactChange} />
              </div>

              <div className="xs-12 form-group">
                <input
                  className="xs-12"
                  ref={e => this.email = e}
                  required={true}
                  type="email"
                  name="email"
                  placeholder="Adresse e-mail"
                  onChange={this.onContactChange}
                />
              </div>

              <div className="xs-12 form-group">
                <textarea
                  className="xs-12"
                  ref={e => this.message = e}
                  required={true}
                  name="message"
                  placeholder="Votre message"
                  onChange={this.onContactChange}
                />
              </div>

              <div className="xs-12 hide">
                <input 
                  type="text"
                  placeholder="Ne remplissez pas ce champ"
                  ref={e => this.honeypot = e}
                  name="check_human"/>
              </div>

              <div className="xs-12 form-group">
                <input 
                  type="submit"
                  name="Envoyer"
                  style={btnSubmitStyle}
                  disabled={btnSubmitDisabled}
                  value={btnSubmitText} />
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
                  <a href="https://www.facebook.com/investivgroup/" target="_blank">
                    <img src={facebook} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href="https://twitter.com/investivgroup" target="_blank">
                    <img src={twitter} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href="https://www.youtube.com/channel/UCfRxKICObOqIsztHFQwlpxQ" target="_blank">
                    <img src={youtube} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href="https://www.linkedin.com/company/investivgroup/" target="_blank">
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
