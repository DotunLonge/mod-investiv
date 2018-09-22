import styled from "styled-components";
import servicebackground from "../assets/servicebackground.png";

export default styled.div`
  .nav-container {
    background: #fafafa;
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


  .content{
   padding: 4em 0;
   h3{
font-style: normal;
font-weight: 600;
line-height: normal;
font-size: 24px;
color: #009444;
   }

   p,span{
font-weight: 300;
line-height: 27px;
font-size: 18px;
color: #3D4851;
margin: 1.5em 0;
   }
#objectives,#livrables{
 img{
  margin-right: 1em;
 }
}

   #objectives, #etapes, #livrables{
    list-style-type: none;
li{
 padding: .3em 0;
}
    img{
     position: relative;
     top: 10px;
    }
   }
  
   .top{
    margin-top: 3em;
   }
  }


  #etapes{
position relative;
float:left;
   #line{
 

width: 1px;
position: absolute;
top: 0;
bottom: 0;
left: 15.5px;
background: #e7e9ea;
display: block;

   }
   li{
    padding: 1.5em 0 !important;

    img{ 
     margin-right: .5em !important;
     top: 0 !important;
    }
   }
  }
  
`;
