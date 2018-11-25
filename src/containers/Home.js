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
import logo9 from "../assets/logos/logo_i-min.png";
import logo10 from "../assets/logos/logo_j-min.png";

import mlogo1 from "../assets/more-logos/logo_a-min.png";
import mlogo2 from "../assets/more-logos/logo_b-min.png";
import mlogo3 from "../assets/more-logos/logo_c-min.png";
import mlogo4 from "../assets/more-logos/logo_d-min.png";
import mlogo5 from "../assets/more-logos/logo_e-min.png";
import mlogo6 from "../assets/more-logos/logo_f-min.png";
import mlogo7 from "../assets/more-logos/logo_h-min.png";
import mlogo8 from "../assets/more-logos/logo_j-min.png";

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
          <meta property="og:url"                content="http://www.investivgroup.com/" />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Investiv: Révolutionner votre production" />
          <meta property="og:description"        content="Modernisez vos opérations agricoles, augmentez vos rendements et gagnez du temps grâce à nos services d'agriculture de précision axés sur la technologie." />
          <meta property="og:image"             content="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMTIwIDM1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDguOTYgMjQuOTI4N0g0Ni44MjYxVjExLjc2NjRINDguOTZWMjQuOTI4N1pNNTcuODUxMSAxNC43NTc4QzU4Ljk1NDcgMTQuNzU3OCA1OS44NTIxIDE1LjA3NjkgNjAuNTQzNCAxNS43MTUxQzYxLjI0ODEgMTYuMzUzMiA2MS42MDA0IDE3LjI3MDYgNjEuNjAwNCAxOC40NjcyVjI0LjkyODdINTkuNDY2NVYxOS4xNDUzQzU5LjQ2NjUgMTcuMzkwMyA1OC43NTUyIDE2LjUxMjggNTcuMzMyNiAxNi41MTI4QzU2LjU4ODEgMTYuNTEyOCA1NS45NDk5IDE2Ljc3MiA1NS40MTgxIDE3LjI5MDZDNTQuODg2MyAxNy43OTU4IDU0LjYyMDQgMTguNTgwMiA1NC42MjA0IDE5LjY0MzhWMjQuOTI4N0g1Mi40ODY1VjE0Ljk1NzJINTQuMzgxMUw1NC40ODA4IDE2LjYxMjVDNTQuODEzMSAxNS45ODc2IDU1LjI3MTggMTUuNTIyMyA1NS44NTY5IDE1LjIxNjVDNTYuNDQxOSAxNC45MTA3IDU3LjEwNjYgMTQuNzU3OCA1Ny44NTExIDE0Ljc1NzhaTTczLjM3NTggMTQuOTU3Mkw2OS40MDcyIDI0LjkyODdINjcuMDczOEw2My4wODUyIDE0Ljk1NzJINjUuNDM4NUw2OC4yNTA1IDIzLjE5MzdMNzEuMTQyMiAxNC45NTcySDczLjM3NThaTTg0LjA1MDkgMTkuNjQzOEM4NC4wNTA5IDIwLjAyOTQgODQuMDI0NyAyMC4zOTUgODMuOTcxMiAyMC43NDA3SDc2LjY3MkM3Ni43OTE3IDIxLjYxODIgNzcuMTA0NSAyMi4yODk2IDc3LjYwOTMgMjIuNzU0OUM3OC4xMTQ4IDIzLjIwNyA3OC43NjYgMjMuNDMzIDc5LjU2MzggMjMuNDMzQzgwLjIxNTYgMjMuNDMzIDgwLjc1NDEgMjMuMzIgODEuMTc5MSAyMy4wOTRDODEuNjE3OSAyMi44NTQ3IDgxLjkxNyAyMi41MTU2IDgyLjA3NjYgMjIuMDc2OUw4My44NTE1IDIyLjgxNDhDODMuMTA3NCAyNC4zNTcgODEuNjc3NyAyNS4xMjgyIDc5LjU2MzggMjUuMTI4MkM3Ny45OTUxIDI1LjEyODIgNzYuNzY1NSAyNC42Njk1IDc1Ljg3NDMgMjMuNzUyMUM3NC45OTY4IDIyLjgzNDcgNzQuNTU4MSAyMS41NjUgNzQuNTU4MSAxOS45NDNDNzQuNTU4MSAxOC4zMDc3IDc0Ljk4MzcgMTcuMDM4IDc1LjgzNDQgMTYuMTMzOUM3Ni42ODU3IDE1LjIxNjUgNzcuODgyMyAxNC43NTc4IDc5LjQyNDIgMTQuNzU3OEM4MC44ODY4IDE0Ljc1NzggODIuMDIzNiAxNS4yMDMyIDgyLjgzNDQgMTYuMDk0QzgzLjY0NTggMTYuOTg0NyA4NC4wNTA5IDE4LjE2ODEgODQuMDUwOSAxOS42NDM4Wk03OS40MjQyIDE2LjQ1M0M3OC42NTMyIDE2LjQ1MyA3OC4wMjgxIDE2LjY3OSA3Ny41NDk1IDE3LjEzMUM3Ny4wODQ2IDE3LjU4MyA3Ni43OTE3IDE4LjI0MTIgNzYuNjcyIDE5LjEwNTRIODIuMDU2NkM4MS45NTA3IDE4LjI2NzggODEuNjY0NiAxNy42MTYzIDgxLjE5OTEgMTcuMTUxQzgwLjc0NzIgMTYuNjg1NiA4MC4xNTU4IDE2LjQ1MyA3OS40MjQyIDE2LjQ1M1pNOTAuMzM0MiAyNS4xMjgyQzg5LjMyNCAyNS4xMjgyIDg4LjQyNjUgMjQuOTU1MyA4Ny42NDE5IDI0LjYwOTZDODYuODcxIDI0LjI2MzkgODYuMjg1OCAyMy43Mzg4IDg1Ljg4NjkgMjMuMDM0MUw4Ny4zMjI4IDIxLjc5NzdDODcuNTc1MiAyMi4zNjk0IDg3Ljk2NzggMjIuNzg4MiA4OC40OTk1IDIzLjA1NDFDODkuMDMxMSAyMy4zMiA4OS42NjkyIDIzLjQ1MjkgOTAuNDE0IDIzLjQ1MjlDOTEuMDkyIDIzLjQ1MjkgOTEuNjE3NCAyMy4zNDY2IDkxLjk4OTUgMjMuMTMzOUM5Mi4zNjE1IDIyLjkwNzggOTIuNTQ3OSAyMi42MTUzIDkyLjU0NzkgMjIuMjU2NEM5Mi41NDc5IDIxLjkzNzMgOTIuMzc1MiAyMS42ODQ3IDkyLjAyOTQgMjEuNDk4NUM5MS42ODM1IDIxLjI5OTEgOTEuMDg1MiAyMS4xMTI5IDkwLjIzNDUgMjAuOTQwMUM4OC43NTg3IDIwLjY2MDkgODcuNzIxNyAyMC4yODg3IDg3LjEyMzQgMTkuODIzM0M4Ni41MjUxIDE5LjM1OCA4Ni4yMjYgMTguNjk5OCA4Ni4yMjYgMTcuODQ5Qzg2LjIyNiAxNy4zMDM4IDg2LjM5MjQgMTYuNzk4NyA4Ni43MjQ1IDE2LjMzMzNDODcuMDU2NyAxNS44NTQ3IDg3LjUzNTMgMTUuNDc1OCA4OC4xNjA0IDE1LjE5NjZDODguNzk4NiAxNC45MDQxIDg5LjU0OTYgMTQuNzU3OCA5MC40MTQgMTQuNzU3OEM5MS41MTc3IDE0Ljc1NzggOTIuNDAxNCAxNC45NDQgOTMuMDY2NCAxNS4zMTYyQzkzLjczMTQgMTUuNjc1MiA5NC4yNDMgMTYuMjQwMyA5NC42MDIgMTcuMDExNEw5My4wODYzIDE4LjEyODJDOTIuODQ3IDE3LjU0MzIgOTIuNTA4IDE3LjExNzcgOTIuMDY5MiAxNi44NTE4QzkxLjY0MzYgMTYuNTcyNiA5MS4wOTg5IDE2LjQzMyA5MC40MzM5IDE2LjQzM0M4OS44MzU2IDE2LjQzMyA4OS4zMzcxIDE2LjU1OTMgODguOTM4MiAxNi44MTE5Qzg4LjU1MjQgMTcuMDUxMiA4OC4zNTk4IDE3LjMzMDQgODguMzU5OCAxNy42NDk1Qzg4LjM1OTggMTguMDA4NSA4OC41MzI1IDE4LjI5NDQgODguODc4NCAxOC41MDcxQzg5LjIzNzMgMTguNzE5OCA4OS44ODI0IDE4LjkxMjYgOTAuODEyOCAxOS4wODU0QzkyLjIyMTkgMTkuMzM4IDkzLjIxOTEgMTkuNjk3IDkzLjgwNDMgMjAuMTYyNEM5NC4zODk1IDIwLjYyNzcgOTQuNjgxOCAyMS4yNzkyIDk0LjY4MTggMjIuMTE2OEM5NC42ODE4IDIzLjAwNzUgOTQuMjk2IDIzLjczMjEgOTMuNTI1MSAyNC4yOTA1QzkyLjc1NDIgMjQuODQ5IDkxLjY5MDMgMjUuMTI4MiA5MC4zMzQyIDI1LjEyODJaTTEwMy43NDIgMjQuMjcwNkMxMDMuNDIzIDI0LjUzNjUgMTAzLjAzIDI0Ljc0OTIgMTAyLjU2NSAyNC45MDg4QzEwMi4xMTMgMjUuMDU1IDEwMS42MjEgMjUuMTI4MiAxMDEuMDkgMjUuMTI4MkMxMDAuMTcyIDI1LjEyODIgOTkuNDM0NCAyNC45MDIxIDk4Ljg3NiAyNC40NTAxQzk4LjMzMDcgMjMuOTg0NyA5OC4wNTE1IDIzLjI2NjggOTguMDM4NCAyMi4yOTYzVjE2LjYzMjRIOTYuMTQzOFYxNC45NTcySDk4LjAzODRWMTIuNjIzOUwxMDAuMTcyIDEyLjAyNTZWMTQuOTU3MkgxMDMuNjYyVjE2LjYzMjRIMTAwLjE3MlYyMS45MzczQzEwMC4xNzIgMjIuNDE1OSAxMDAuMjk4IDIyLjc3NDkgMTAwLjU1MSAyMy4wMTQyQzEwMC44MTcgMjMuMjQwMiAxMDEuMTc2IDIzLjM1MzIgMTAxLjYyOCAyMy4zNTMyQzEwMi4yNCAyMy4zNTMyIDEwMi43NzggMjMuMTQwNSAxMDMuMjQ0IDIyLjcxNTFMMTAzLjc0MiAyNC4yNzA2Wk0xMDYuODEgMTMuMjgyQzEwNi4zNTggMTMuMjgyIDEwNi4wMDUgMTMuMTY5IDEwNS43NTMgMTIuOTQzQzEwNS41IDEyLjcwMzcgMTA1LjM3NCAxMi4zNzEzIDEwNS4zNzQgMTEuOTQ1OEMxMDUuMzc0IDExLjUyMDQgMTA1LjUgMTEuMTk0NyAxMDUuNzUzIDEwLjk2ODZDMTA2LjAwNSAxMC43NDI2IDEwNi4zNTggMTAuNjI5NiAxMDYuODEgMTAuNjI5NkMxMDcuMjYxIDEwLjYyOTYgMTA3LjYwNyAxMC43NDI2IDEwNy44NDcgMTAuOTY4NkMxMDguMDk5IDExLjE5NDcgMTA4LjIyNiAxMS41MjA0IDEwOC4yMjYgMTEuOTQ1OEMxMDguMjI2IDEyLjM3MTMgMTA4LjA5OSAxMi43MDM3IDEwNy44NDcgMTIuOTQzQzEwNy42MDcgMTMuMTY5IDEwNy4yNjEgMTMuMjgyIDEwNi44MSAxMy4yODJaTTEwNy44NjcgMjQuOTI4N0gxMDUuNzMzVjE0Ljk1NzJIMTA3Ljg2N1YyNC45Mjg3Wk0xMjAgMTQuOTU3MkwxMTYuMDMxIDI0LjkyODdIMTEzLjY5OEwxMDkuNzA5IDE0Ljk1NzJIMTEyLjA2M0wxMTQuODc1IDIzLjE5MzdMMTE3Ljc2NiAxNC45NTcySDEyMFoiIGZpbGw9IiMyMjI4MjkiLz4KPHBhdGggZD0iTTE3LjQ1MDEgMzQuOTAwMkMyNy4wODc1IDM0LjkwMDIgMzQuOTAwMiAyNy4wODc1IDM0LjkwMDIgMTcuNDUwMUMzNC45MDAyIDcuODEyNjggMjcuMDg3NSAwIDE3LjQ1MDEgMEM3LjgxMjY4IDAgMCA3LjgxMjY4IDAgMTcuNDUwMUMwIDI3LjA4NzUgNy44MTI2OCAzNC45MDAyIDE3LjQ1MDEgMzQuOTAwMloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTEzLjc3NjQgMTMuNzc2NEwyMC4yMDU0IDcuMzQ3NDFWMjYuNjM0NEgxMy43NzY0VjEzLjc3NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTcuNDUwMSIgeTE9IjAiIHgyPSIxNy40NTAxIiB5Mj0iMzQuOTAwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNTZFODU0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOTQ0NCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" />
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
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="200px" width="100%" src={logo9} />
                  </div>
                  <div className="xs-4">
                    <LazyImage
                    placeholder={({imageProps, ref}) => (
                      <div className="imgPlaceholder" ref={ref} />)}
                    actual={({imageProps}) => (<img {...imageProps}/>)}
                    height="200px" width="100%" src={logo10} />
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
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo1} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo2} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo3} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo4} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo5} className="xs-12 md-11" />
              </div>

              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo6} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                style={{maxWidth: 230, maxHeight: 150}}
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo7} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={mlogo8} className="xs-12 md-11" />
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
