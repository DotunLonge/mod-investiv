import styled from "styled-components";
import background from "../assets/background.poor.png";

export default styled.div`
  #up {
    z-index: 2;
    position: absolute;
    overflow: hidden;
  }
  background: white;

  .header {
    padding: 3em 0 6em;
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
    height: 500px;
    width: 100%;
    &.loaded {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        oject-position: center;
      }
    }
    &.not-loaded {
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
`;
