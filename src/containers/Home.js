import React from "react";
import { withSiteData, NavLink, withRouteData, Head } from "react-static";
import { LazyImage } from "react-lazy-images";

import HomeStyle from "../styles/home.style";
import Background from "../assets/background.clean.jpeg";
import Loading from "../shared-components/loader";

import icon_a from "../assets/icon_a.svg";
import icon_b from "../assets/icon_b.svg";
import icon_c from "../assets/icon_c.svg";

import logo1 from "../assets/logos/logo_a-min.png";
import logo2 from "../assets/logos/logo_b-min.png";
import logo3 from "../assets/logos/logo_c-min.png";
import logo4 from "../assets/logos/logo_d-min.png";
import logo5 from "../assets/logos/logo_e-min.png";
import logo6 from "../assets/logos/logo_f-min.png";
import logo7 from "../assets/logos/logo_g-min.png";
import logo8 from "../assets/logos/logo_h-min.png";

import mlogo1 from "../assets/more-logos/logo_a-min.png";
import mlogo2 from "../assets/more-logos/logo_b-min.png";
import mlogo3 from "../assets/more-logos/logo_c-min.png";
import mlogo4 from "../assets/more-logos/logo_d-min.png";
import mlogo5 from "../assets/more-logos/logo_e-min.png";
import mlogo6 from "../assets/more-logos/logo_f-min.png";

import plogo1 from "../assets/prix/a.png";
import plogo2 from "../assets/prix/b.png";
import plogo3 from "../assets/prix/c.png";
import plogo4 from "../assets/prix/d.png";
import plogo5 from "../assets/prix/e.png";

import coffee from "../assets/coffee.jpeg";

import right_arrow from "../assets/right-arrow.svg";
import p_one from "../assets/p_one.jpeg";

import p_two from "../assets/p_two.jpeg";
import p_three from "../assets/p_three.jpeg";
import p_four from "../assets/p_four.jpeg";
import home from "../json/home.json";

import { truncate } from "../helpers/utils";

const suiviURL = process.env.REACT_STATIC_ENV === 'development' ?
  '' :
  'http://v1.investivgroup.com/suivi/';
console.log('environnement-courant:', process.env.REACT_STATIC_ENV);

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
    const { loaded } = this.state,
      { posts } = this.props;

    return (
      <HomeStyle className="xs-12">
        <Head>
          <title> Investiv Group | Home Page</title>
        </Head>

        <section className="xs-12 header">
          <div className="c-w">
            <div className="c t-c">
              <h2 className="xs-10 xs-off-1">Révolutionner votre production</h2>
              <p className="xs-10 xs-off-1 sm-6 sm-off-3">
                Modernisez vos opérations agricoles, augmentez vos rendements et
                gagnez du temps grâce à nos services d'agriculture de précision
                axés sur la technologie.
              </p>

              <div className="xs-10 xs-off-1 sm-8 sm-off-2 md-6 md-off-3">
                <div className="xs-12 sm-6">
                  <div className="xs-12 sm-10 mr-r">
                    <a href="#contactezNous" className="btn" onClick={() => document.getElementById('contact.nom').focus()}>
                      Contactez nous
                    </a>
                  </div>
                </div>
                <div className="xs-12 sm-6">
                  <div className="xs-12 sm-10 mr-l">
                    <a href={suiviURL} target="_blank" className="btn-inverse">
                      Suivre mon projet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="xs-12" id="hasBackgroundImage">
          <div className="xs-12" id="conseil">
            <div className="t-c">
              <h2 className="xs-10 xs-off-1">
                Conseil en agriculture de précision
              </h2>
              <p className="xs-10 xs-off-1 sm-8 sm-off-2">
                Investiv est une entreprise Ivoirienne spécialisée dans le
                conseil en matière d’agriculture de précision. Pionnière dans
                l'utilisation des drones en agriculture en Afrique de l'Ouest,
                nous fournissons à nos clients des solutions techniques et
                innovantes alliant productivité, performance et gain de temps.
              </p>

              <div className="xs-12">
                <div className="xs-12 sm-4 sm-off-4">
                  <button className="btn-inverse" id="apprende">
                    Apprendre encore plus
                  </button>
                </div>
              </div>

              <div className="cards">
                <div className="xs-12 md-4 card f-l">
                  <div className="xs-12  inner">
                    <div className="c-w">
                      <div className="c">
                        <div className="xs-3">
                          <img src={icon_a} />
                        </div>
                        <div className="xs-9">
                          <h4> Précision </h4>
                          <p>
                            Obtenir des données plus précises sur l'état et les
                            dimensions de votre terrain.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xs-12 md-4 card ">
                  <div className="xs-12  inner full">
                    <div className="c-w">
                      <div className="c">
                        <div className="xs-3">
                          <img src={icon_b} />
                        </div>
                        <div className="xs-9">
                          <h4> Haute performance </h4>
                          <p>
                            Atteindre un niveau de performance supérieur aux
                            normes actuelles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xs-12 md-4 card f-r">
                  <div className="xs-12  inner f-r">
                    <div className="c-w">
                      <div className="c">
                        <div className="xs-3">
                          <img src={icon_c} />
                        </div>
                        <div className="xs-9">
                          <h4> Gagner du temps </h4>
                          <p>
                            Gagnez du temps dans vos opérations agricoles avec
                            des outils de haute technologie
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="xs-10 xs-off-1 sm-10 sm-off-1">
          <div className="nos-services xs-12">
            <h2 className="t-c"> Nos services</h2>

            <div className="xs-12 m">
              <div className="xs-12 sm-6 l show-768">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={p_one} alt="drone" />
              </div>

              <div className="xs-12 sm-6">
                <h4> {home.one.title} </h4>
                <h5>{home.one.subTitle}</h5>
                <p className="sm-12 xs-10">{home.one.description} </p>
                <div className="xs-12">
                  <NavLink to={home.one.link}>
                    Apprendre encore plus
                    <img src={right_arrow} className="arrow" />
                  </NavLink>
                </div>
              </div>

              <div className="xs-12 sm-6 r-bg hide-768">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={p_one} alt="drone" />
              </div>
            </div>

            <div className="xs-12 m">
              <div className="xs-12 sm-6 l">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={p_two} alt="drone" className="" />
              </div>

              <div className="xs-12 sm-6">
                <h4> {home.two.title} </h4>
                <h5>{home.two.subTitle} </h5>
                <p className="sm-12 xs-10">{home.two.description} </p>
                <div className="xs-12">
                  <NavLink to={home.two.link}>
                    Apprendre encore plus
                    <img src={right_arrow} className="arrow" />
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="xs-12 m">
              <div className="xs-12 sm-6 l show-768">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={p_three} alt="drone" />
              </div>

              <div className="xs-12 sm-6">
                <h4> {home.three.title} </h4>
                <h5> {home.three.subTitle} </h5>
                <p className="sm-12 xs-10">{home.three.description} </p>
                <div className="xs-12">
                  <NavLink to={home.three.link}>
                    Apprendre encore plus
                    <img src={right_arrow} className="arrow" />
                  </NavLink>
                </div>
              </div>

              <div className="xs-12 sm-6 r-bg hide-768 ">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={p_three} alt="" />
              </div>
            </div>

            <div className="xs-12 m">
              <div className="xs-12 sm-6 l">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={p_four} alt="" />
              </div>

              <div className="xs-12 sm-6">
                <h4>{home.four.title}</h4>
                <h5>{home.four.subTitle}</h5>
                <p className="sm-12 xs-10">{home.four.description}</p>
                <div className="xs-12">
                  <NavLink to={home.four.link}>
                    Apprendre encore plus
                    <img src={right_arrow} className="arrow" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="xs-12" id="bunch-of-logos">
          <div className="xs-12 i-h">
            <div className="xs-12 sm-6 px400 ">
              <div className="xs-12 sm-10 sm-off-1 i-h">
                <div className="c-w">
                  <div className="c">
                    <h3 className="xs-10 xs-off-1">
                      Notre travail nous a valu la reconnaissance de ces
                      partenaires de confiance
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="xs-12 sm-6">
              <div className="xs-10 xs-off-1 bunch">
                <div className="xs-12">
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="100px" width="100%" src={logo1} />
                  </div>
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="100px" width="100%" src={logo2} />
                  </div>
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="100px" width="100%" src={logo3} />
                  </div>
                </div>

                <div className="xs-12">
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="100px" width="100%" src={logo4} />
                  </div>
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="100px" width="100%" src={logo5} />
                  </div>
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="100px" width="100%" src={logo6} />
                  </div>
                </div>

                <div className="xs-12">
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="200px" width="100%" src={logo7} />
                  </div>
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="200px" width="100%" src={logo8} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="xs-12" id="just-more-logos">
          <div className="xs-12">
            <h4> En vedette dans </h4>
            <div className="xs-10 xs-off-1 ">
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo1} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo2} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo3} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo4} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo5} className="xs-12 md-11" />
              </div>

              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo6} className="xs-12 md-11" />
              </div>
            </div>
          </div>
        </section>

        {posts.length > 0 && 
        <section className="xs-12" id="blog">
          <h2 className="t-c">Dernières nouvelles sur notre blog</h2>
          <div className="xs-10 xs-off-1">
            {posts.map(post => (
              <div className="xs-12 sm-4 post-card" key={post.data.slug}>
                <div className="xs-12 sm-11 inner">
                  <LazyImage
                  placeholder={({imageProps, ref}) => (
                    <div className="imgPlaceholder" ref={ref} />)}
                  actual={({imageProps}) => (<img {...imageProps}/>)}
                  className="image" src={post.data.thumbnail} alt="" />
                  <div className="inner-inner">
                    <h3>{post.data.title}</h3>
                    <p>{truncate(post.content)}</p>

                    <NavLink to={`/nos-actualités/post/${post.data.slug}`}>
                      Lire la suite <LazyImage
                      placeholder={({imageProps, ref}) => (
                        <div className="imgPlaceholder" ref={ref} />)}
                      actual={({imageProps}) => (<img {...imageProps}/>)}
                      src={right_arrow} className="arrow" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>}

        <section className="xs-12" id="coffee">
          <div className="xs-12 sm-6 coffee-h">
            <div className="c-w">
              <div className="c">
                <div className="xs-10 xs-off-1">
                  <h2> Prêt à révolutionner votre production?</h2>
                  <p>
                    Vous pouvez commencer dès aujourd'hui et faire progresser
                    vos opérations agricoles
                  </p>
                  <NavLink
                    className="btn-inverse"
                    id="nous"
                    to="#contactezNous"
                  >
                    Contactez nous
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="xs-12 sm-6 coffee-h">
            <LazyImage
            placeholder={({imageProps, ref}) => (
              <div className="imgPlaceholder" ref={ref} />)}
            actual={({imageProps}) => (<img {...imageProps}/>)}
            src={coffee} />
          </div>
        </section>

        <section className="xs-12" id="just-more-logos">
          <div className="xs-12">
            <h4> Prix ​​et distinctions </h4>
            <div className="xs-10 xs-off-1 sm-11">
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo1} className="xs-12 md-11" />
                <p>Grand prix de la bpc du patronnat Ivoirien 2017</p>
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo2} className="xs-12 md-11" />
                <p>Prix de la fondation Tony Elumelu 2017</p>
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo3} className="xs-12 md-11" />
                <p>
                  3ème prix au forum des start-up de l’école polytechnique de
                  Paris en 2018
                </p>
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo4} className="xs-12 md-11" />
                <p>Prix du district d’Abidjan 2017</p>
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo5} className="xs-12 md-11" />
                <p>
                  1er Prix au forum de la BAD sur les jeunes agriculteurs
                  (Agripitch) en 2018
                </p>
              </div>
            </div>
          </div>
        </section>
      </HomeStyle>
    );
  }
}

let HomePage = withRouteData(withSiteData(Home));
export default HomePage;
