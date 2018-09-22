import styled from "styled-components";
import background from "../assets/background.poor.png";

export default styled.div`
  #up {
    z-index: 2;
    position: absolute;
    overflow: hidden;
  }

  #apprende, #nous {
    border: 1px solid rgba(0, 148, 68, 0.5);
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 500;
  }

  background: white;
  height: auto;
  width: auto;

  .header {
    padding: 3em 0 6em;

    a{
      margin: .5em 0;
    }
    h2 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 32px;
      text-align: center;
      color: #222829;
      font-weight: 600;
      margin-top: 0.8em;
      margin-bottom: 0.8em;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-weight: 300;
      line-height: 27px;
      font-size: 18px;
      text-align: center;
      color: #3d4851;
      margin-bottom: 3em;
    }
  }

  .btn,
  .btn-inverse {
    height: 50px;
    line-height: 50px;

    min-width: 80%;
    padding: 0 1em;
    font-size: 17px;
    text-decoration: none;
    border-radius: 4px;

    display: inline-block;
  }

  .btn {
    color: white;
    background: #009444;
  }
  .btn-inverse {
    color: #009444;
    border: 1px solid #009444;
    background: white;
  }

  @media (min-width: 768px) {
    .mr-r {
      float: right;
      margin-right: 0em;
    }

    .mr-l {
      float: left;
      margin-left: 0em;
    }
  }

  #hasBackgroundImage {
    height: auto;
    width: 100%;
    &.loaded {
      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        oject-position: center;
      }
    }
    &.not-loaded .pre {
      height: 500px;
      width: 100%;

      background-image: url(${background});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
      }
    }
  }

  #conseil {
    background: #009444;
    padding: 2.5em 0;
    position: relative;
    top: -5em;

    h2,
    h4 {
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 29px;
      text-align: center;
      color: white;
      font-weight: 600;
      margin-top: 0.8em;
      margin-bottom: 0.8em;
    }

    h4 {
      font-size: 20px;
      color: #009444;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-weight: 300;
      line-height: 27px;
      font-size: 15px;
      text-align: center;
      color: white;
      margin-bottom: 3em;
    }

    #apprende {
      background: #acbb15;
      color: white;
      border 0;
    }
  }

  .cards {
    margin-top: 2em;
    width: 90%;
    margin-left: 5%;
    float:left;
    .inner {
      min-height: 200px;
  
      @media(min-width: 1023px){
        width: 95%;
      }
      width: 100%;
      
      &.full{
        width: 100%;
      }
    }

    .inner {
      background: #ffffff;
      box-shadow: 0px 4px 25px rgba(61, 72, 81, 0.05);
      border-radius: 4px;
      padding: 1em 1em 1.5em;

      .xs-9 {
        padding: 0 0.5em;
      }
    }
  }
  .card {
    margin-top: 1em;
    h4{
      font-size: 19px !important;
    }
    h4,
    p {
      text-align: left !important;
    }

    p {
      margin-bottom: 0 !important;
      font-size: 15px !important;
      color: #3d4851 !important;
    }
    img {
      height: 80px !important;
      width: 100% !important;
      object-fit: contain !important;
      margin: 1.5em 0;
    }
  }

  .nos-services {
    padding: 6em 0 3em;

    h2 {
      margin-bottom: 1.5em;
    }
    h4 {
      line-height: normal;
      font-size: 24px;
      color: #009444;
      font-weight: 300;
      margin-bottom: 0.8em;
    }

    h5 {
      line-height: 27px;
      font-size: 18px;
      color: #3d4851;

      margin-bottom: 1em;
    }

    p {
      line-height: 26px;
      font-size: 16px;
      color: #3d4851;
      font-weight: 300;
      margin-bottom: 1em;
    }

    a {
      line-height: 27px;
      font-size: 18px;
      color: #acbb15;
      text-decoration: none;
    }

    img {
      height: 400px;
      width: 90%;
      object-fit: cover;
      object-position: top;
      margin: auto;
    }
  }

  .m {
    margin-bottom: 2em;
  }

  #bunch-of-logos {
    min-height: 400px;
    background: #009444;
    
    .bunch{
      margin-top: 2em;
      margin-bottom: 2em;
    }

    .px400 {
      height: 400px;
    }
    h3 {
      font-style: normal;
      font-weight: 600;
      line-height: 33px;
      font-size: 24px;
      color: white;
    }

    img {
      height: 100px;
      width: 95%;
    
      object-fit: contain;
      object-position: center;
      background: white;
      border-radius: 5px;
    }

    @media(min-width: 768px){
      img{
        margin: 4% 0;
        height: 90px;
        width: 90%;
      }
    }
  }

  #just-more-logos {
    padding: 3em 0;
    h4 {
      font-style: normal;
      font-weight: 600;
      line-height: 33px;
      font-size: 24px;
      text-align: center;
      color: #009444;
      margin: 1em 0 2em;
    }

    img {
      background: #ffffff;
      border-radius: 4px;
      object-fit: contain;
      height: 100px;
      margin: 1.5em 0;
    }
  }

  #blog {
    margin: 1em 0;
    h2 {
      margin: 4em 0 2em;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 29px;
      color: #222829;
    }
    .post-card {
      margin: 1em 0;
      .inner {
        background: #ffffff;
        box-shadow: 0px 4px 25px rgba(61, 72, 81, 0.05);
        border-radius: 4px;
        min-height: 530px;

        .inner-inner {
          padding: 1.25em;
        }
      }
      h3 {
        line-height: 33px;
        font-size: 20px;
        margin: 0.5em 0;
        color: #009444;
      }
      p {
        line-height: 24px;
        font-size: 14px;

        color: #3d4851;
      }
      img {
        width: 100%;
        height: 230px;
        object-fit: cover;
        object-position: center;
      }

      a {
        margin-top: 1em;
        display: block;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
        font-size: 18px;
        text-decoration: none;
        color: #acbb15;
      }
    }
  }

  #coffee{
    background: #009444;
    height: auto;

    .coffee-h{
      height: 350px;
    }

    h2{
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 29px; 
      color: #FFFFFF;
    }

p{
  font-style: normal;
  font-weight: normal;
  line-height: 27px;
  font-size: 15px;
  color: #FFFFFF;  
  margin-top: .5em;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

#nous{
  border:0;
  color: white !important;
  margin-top: 1em;
  background: #ACBB15;
  display: block;
  width: 170px;
  min-width: unset;
}

  }
`;
