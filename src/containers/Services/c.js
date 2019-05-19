import React, { Component } from "react";
import universal from "react-universal-component";
import { Head } from "react-static";

let ServiceWrapper = universal(import("./wrapper.js"), {
  loading: () => null
});
ServiceWrapper.preload();

import p_three from "../../assets/p_three.clean.jpeg";
import { Translate } from "react-localize-redux";

export default () => {
  return (
    <ServiceWrapper>
      <Head>
        <title>
          Investiv Group | Non Sevices - Gestion intelligente d’exploitation
          agricole
        </title>
      </Head>

      <div className="xs-12 content">
        <div className="xs-10 xs-off-1 sm-8 sm-off-2">
          <h3><Translate id="services.three.heading"/></h3>
          <p>
           <Translate id="services.three.paragraph_one"/>
          </p>
           <div className="xs-12 t-c">
            <img src={p_three} className="fit" />
          </div>
          <p>
           <Translate id="services.four.paragraph_two"/>
          </p>
         
        </div>
      </div>
    </ServiceWrapper>
  );
};
