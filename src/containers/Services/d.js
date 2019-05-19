import React, { Component } from "react";
import universal from "react-universal-component";
import { Head } from "react-static";

let ServiceWrapper = universal(import("./wrapper.js"), {
  loading: () => null
});
ServiceWrapper.preload();
import { Translate } from "react-localize-redux";
import p_four from "../../assets/p_four.clean.jpeg";

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
          <h3><Translate id="services.four.heading"/></h3>
          <p>
           <Translate id="services.four.paragraph_one"/>
          </p>
          <div className="xs-12 t-c">
            <img src={p_four} className="fit" />
          </div>

          <p>
          <Translate id="services.four.paragraph_two"/>
          </p>
        </div>
      </div>
    </ServiceWrapper>
  );
};
