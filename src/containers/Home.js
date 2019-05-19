import React from "react";
import ReactDOM from "react-dom";

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

import parlogo1 from "../assets/partners/parlogo1.png";
import parlogo2 from "../assets/partners/parlogo2.png";
import parlogo3 from "../assets/partners/parlogo3.png";
import parlogo4 from "../assets/partners/parlogo4.png";

import coffee from "../assets/coffee.jpeg";

import right_arrow from "../assets/right-arrow.svg";
import p_one from "../assets/p_one.jpeg";

import p_two from "../assets/p_two.jpeg";
import p_three from "../assets/p_three.jpeg";
import p_four from "../assets/p_four.jpeg";
import home from "../json/home.json";
import ImageGallery from 'react-image-gallery';

import { truncate } from "../helpers/utils";
import "react-image-gallery/styles/css/image-gallery.css";
import Axios from 'axios';

import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/global.json";
import { Translate } from "react-localize-redux";

const suiviURL = process.env.REACT_STATIC_ENV === 'development' ?
  '' :
  'http://v1.investivgroup.com/suivi/';
console.log('environnement-courant:', process.env.REACT_STATIC_ENV);

let gallery_url = "https://investiv.now.sh/pictures";

class Home extends React.Component {
  constructor(props){
    super(props);
    props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "French", code: "fr" }
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
  }

  componentWillMount(){
    // this.props.addTranslation(frenchTranslations);

    if( typeof window !== 'undefined' && window.sessionStorage && window.sessionStorage.getItem("isAuthenticated")){
      this.temp = true;
      sessionStorage.clear();
    }
    this.fetchGalleryImages();

  }

  fetchGalleryImages = ()=>{
    Axios({
      url: gallery_url, method: "GET"
    }).then(res=>{
      this.setState({
        galleryImages: res.data.images.map(image=>{
          return {
            original: image.imageUrl,
            thumbnail: image.imageUrl
          }
        })
      });
    }).catch(res=>{
      console.log(res.data);
    });
  }

  componentWillUnmount(){
    if(this.temp === true && typeof window !== 'undefined'){
      window && window.sessionStorage && window.sessionStorage.setItem("isAuthenticated", "true");
    }
  }
  
  state = {
    loaded: false,
    galleryImages: []
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
          <meta property="og:url" content="https://www.investivgroup.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Investiv: Révolutionner votre production" />
          <meta property="og:description" content="Modernisez vos opérations agricoles, augmentez vos rendements et gagnez du temps grâce à nos services d'agriculture de précision axés sur la technologie." />
          <meta property="og:image" content="https://www.investivgroup.com/logo.v1.0.png" />
        </Head>

        <section className="xs-12 header">
          <div className="c-w">
            <div className="c t-c">
              <h2 className="xs-10 xs-off-1">
              <Translate id="home.heading" />
              </h2>
              <p className="xs-10 xs-off-1 sm-6 sm-off-3">
              <Translate id="home.headingText" />
              </p>

              <div className="xs-10 xs-off-1 sm-8 sm-off-2 md-6 md-off-3">
                <div className="xs-12 sm-6">
                  <div className="xs-12 sm-10 mr-r">
                    <a href="#contactezNous" className="btn" onClick={() => document.getElementById('contact.nom').focus()}>
                    <Translate id="home.contact" />
                </a>
                  </div>
                </div>
                <div className="xs-12 sm-6">
                  <div className="xs-12 sm-10 mr-l">
                    <a href={suiviURL} target="_blank" className="btn-inverse">
                    <Translate id="home.follow" />
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
              <Translate id="home.consulting"/>
              </h2>
              <p className="xs-10 xs-off-1 sm-8 sm-off-2">
                <Translate id="home.consultingText"/>
              </p>

              <div className="xs-12">
                <div className="xs-12 sm-4 sm-off-4">
                  <button className="btn-inverse" id="apprende">
                    <Translate id="home.learnMore"/>
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
                          <h4> <Translate id="home.precision"/> </h4>
                          <p>
                            O<Translate id="home.precisionText"/>
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
                          <h4> <Translate id="home.performance"/> </h4>
                          <p>
                          <Translate id="home.performanceText"/>
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
                          <h4>  
                            <Translate id="home.win"/>
                          </h4>
                          <p>
                            <Translate id="home.winText"/>
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
            <h2 className="t-c">  <Translate id="home.service"/>  </h2>

            <div className="xs-12 m">
              <div className="xs-12 sm-6 l show-768">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={p_one} alt="drone" />
              </div>

              <div className="xs-12 sm-6">
                <h4>  
                  <Translate id="home.serviceOne"/>
                </h4>
                <h5>
                  <Translate id="home.serviceOneSub"/>
                </h5>
               
                <p className="sm-12 xs-10">
                <Translate id="home.serviceOneText"/>
               </p>
                <div className="xs-12">
                  <NavLink to={home.one.link}>
                  <Translate id="home.learnMore"/>
                         
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
                
                <h4>  
                  <Translate id="home.serviceTwo"/>
                </h4>
                <h5>
                  <Translate id="home.serviceTwoSub"/>
                </h5>
               
                <p className="sm-12 xs-10">
                <Translate id="home.serviceTwoText"/>
               </p>
                <div className="xs-12">
                  <NavLink to={home.two.link}>
                  <Translate id="home.learnMore"/>
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
              <h4>  
                  <Translate id="home.serviceThree"/>
                </h4>
                <h5>
                  <Translate id="home.serviceThreeSub"/>
                </h5>
               
                <p className="sm-12 xs-10">
                <Translate id="home.serviceThreeText"/>
               </p>
                <div className="xs-12">
                  <NavLink to={home.three.link}>
                  <Translate id="home.learnMore"/>
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
              <h4>  
                  <Translate id="home.serviceFour"/>
                </h4>
                <h5>
                  <Translate id="home.serviceFourSub"/>
                </h5>
               
                <p className="sm-12 xs-10">
                <Translate id="home.serviceFourText"/>
               </p>
                <div className="xs-12">
                  <NavLink to={home.four.link}>
                  <Translate id="home.learnMore"/>
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
                     <Translate id="home.someLogos"/>
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
            <h4> <Translate id="home.someMoreLogos"/> </h4>
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
          <h2 className="t-c"><Translate id="home.blog"/></h2>

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
        {
          Boolean(this.state.galleryImages.length) &&
            <section className="lightbox xs-12">
              <div className="xs-12" id="blog">
                <div className="t-c">
                  <h2 className="t-c">Galerie</h2>
                </div>
              </div>   
              <div className='xs-12 i-h'> 
              <ImageGallery items={this.state.galleryImages} />
              </div>
            </section>
        }

<section className='xs-12 partners' id="just-more-logos">
          <div className='xs-12'>
            <h4> <Translate id="partners.text"/> </h4>
            <div className="xs-10 xs-off-1 sm-11">
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={parlogo1} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={parlogo2} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={parlogo3} className="xs-12 md-11" />
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={parlogo4} className="xs-12 md-11" />
              </div>
             
            </div>
        
          </div>
        </section>
   

        <section className="xs-12" id="coffee">
          <div className="xs-12 sm-6 coffee-h">
            <div className="c-w">
              <div className="c">
                <div className="xs-10 xs-off-1">
                  <h2> <Translate id="home.revolution"/></h2>
                  <p>
                  <Translate id="home.revolutionText"/>
                  </p>
                  <NavLink
                    className="btn-inverse"
                    id="nous"
                    to="#contactezNous"
                  >
                    <Translate id="home.contact"/>
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
            <h4> <Translate id="home.distinctions"/> </h4>
            <div className="xs-10 xs-off-1 sm-11">
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo1} className="xs-12 md-11" />
                <p><Translate id="home.awardOne"/></p>
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo2} className="xs-12 md-11" />
                <p><Translate id="home.awardTwo"/></p>
              </div>
              <div className="xs-6 sm-4 md-3">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo3} className="xs-12 md-11" />
                <p>
                <Translate id="home.awardThree"/>
                </p>
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo4} className="xs-12 md-11" />
                <p><Translate id="home.awardFour"/></p>
              </div>
              <div className="xs-6 sm-4 md-2">
                <LazyImage
                placeholder={({imageProps, ref}) => (
                  <div className="imgPlaceholder" ref={ref} />)}
                actual={({imageProps}) => (<img {...imageProps}/>)}
                src={plogo5} className="xs-12 md-11" />
                <p>
                <Translate id="home.awardFive"/>
                </p>
              </div>
            </div>
          </div>
        </section>

  
      </HomeStyle>
    );
  }
}

let HomePage = withRouteData(withSiteData(withLocalize(Home)));
export default HomePage;
