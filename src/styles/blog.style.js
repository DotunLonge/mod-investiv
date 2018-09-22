import styled from "styled-components";
import blogbackground from "../assets/blogbackground.png";

export default styled.div`

.withBackground {
 position: relative;
 background: url(${blogbackground});
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 height: 300px;

 h3{
  position: relative:
  z-index:1 ; 
 font-weight: 600;
 line-height: normal;
 letter-spacing: 1px;
 font-size: 32px;
 color: #FFFFFF;

 }
 &::before {
   content: "";
   position: absolute;
   background: rgba(0, 148, 68, 0.25);

   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   height: 100%;
   width: 100%;
 }
}
  #blog {
    margin: 3em 0;
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
`;
