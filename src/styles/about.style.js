import styled from "styled-components";
import servicebackground from "../assets/aboutbackground.jpeg";

export default styled.div`
.top{
  margin-top: 3em;
}

.content{
 padding: 1em 0;

 p,span{
  margin: 1.5em 0;
  font-weight: 300;
  line-height: 27px;
  font-size: 17px;
  color: #3D4851;
 }
}


#about-lift{
 background: transparent;
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
}

.cards {
 width: 100%;
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

  .image{
   width: 100%;
   object-fit: cover;
  }

  #post-title{
   margin-top: 1em ;
  }

  .withBackground {
    position: relative;
    background: url(${servicebackground});
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
  a {
    padding: 1em;
    width: 100%;
    display: inline-block;
    &.active {
      color: #009444;
    }
    color: #8795a1;
    text-decoration: none;
  }


  .pre{
   h2{
    font-weight: 600;
    line-height: normal;
    font-size: 32px;
    text-align: center;
    color: #222829;
    margin-top: 20px;
   }
   h4{
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 24px;
    text-align: center;
    color: #009444;
    margin-top: 20px;
   }
  }

 .info-card{
  margin: .6em 0;
 height: auto;

  .inner{
   background: #FFFFFF;
   box-shadow: 0px 4px 25px rgba(61, 72, 81, 0.05);
   border-radius: 4px;
   height: 420px;
   width: 95%;
  }

 img{
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
 }

 h4{
  padding: 15px 30px 10px;
 }

 p{
 padding: 0px 30px 45px;
 }

 h4{ 
  font-weight: 600;
  line-height: 33px;
  font-size: 22px;
  color: #009444;
 }
 
 p{
  font-weight: 300;
  line-height: 24px;
  font-size: 18px
  color: #3D4851;
 }

  }
`;
