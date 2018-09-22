import styled from "styled-components";

export default styled.footer`
  padding: 3.5em 0;

  h4 {
    font-weight: 600;
    line-height: 27px;
    font-size: 18px;
    color: #009444;
    margin-bottom: 1em;
  }

  ul {
    padding: 1em 0 2em;
    li {
      list-style-type: none;
      a {
        display: block;
        text-decoration: none;
        padding: 0.35em 0;
        line-height: 27px;
        font-size: 15px !important;
        color: #3d4851;
        font-weight: 300;

        &:hover {
          color: #009444;
        }
      }
    }
  }

  form {
    padding: 1.25em 0;
    .form-group {
      margin: 0.5em 0;

      input,
      textarea {
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 0 1.5em;
        line-height: 27px;
        font-size: 16px;
        color: #3d4851;
      }

      input {
        height: 50px;
      }

      textarea {
        min-height: 200px;
      }

      input[type="submit"] {
        height: 50px;
        color: white;
        background: linear-gradient(0deg, #009444, #009444);
        border-radius: 4px;
        width: 100%;
        border: 0;
      }
    }
  }

  .bar {
    height: 1px;
    background: #e5e5e5;
    margin: 3em 0;
  }

  .infos {
    padding-top: 4em;
    padding-left: 1em;
    padding-right: 1em;

    .info {
      margin: 0.6em 0;
      * {
        color: #3d4851;
      }
      img {
        height: 30px;
        width: 60px;
        object-fit: contain;
        object-position: center;
      }
      h4 {
        font-size: 15px;
      }
      p {
        font-size: 15px;
        font-weight: 300;
      }
    }
  }

  .sp {
    > div {
      margin: 1em 0;

      @media (max-width: 768px) {
        float: left !important;
      }
    }
  }
`;
