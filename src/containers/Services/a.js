import React, { Component } from "react";
import universal from "react-universal-component";
import { Head } from "react-static";

let ServiceWrapper = universal(import("./wrapper.js"), {
  loading: () => null
});
ServiceWrapper.preload();

import p_one from "../../assets/p_one.png";
import check from "../../assets/check.svg";
import etapes from "../../assets/etapes.svg";
import { Translate } from "react-localize-redux";

export default () => {
  return (
    <ServiceWrapper>
      <Head>
        <title>
          Investiv Group | Non Sevices - Cartographie aérienne par drone
        </title>
      </Head>

      <div className="xs-12 content">
        <div className="xs-10 xs-off-1 sm-8 sm-off-2">
          <h3> 
            <Translate id="services.one.heading"/>
       </h3>
          <p>
            <Translate id="services.one.paragraph_one"/>
          </p>
          <p>
          <Translate id="services.one.paragraph_two"/>
          
          </p>

          <div className="xs-12 t-c">
            <img src={p_one} className="fit" />
          </div>

          <h3>   <Translate id="services.objectives"/> </h3>

          <p>
          <Translate id="services.one.objectivesText"/>  </p>

          <ul id="objectives">
            <li>
              <img src={check} />
              <span> <Translate id="services.one.objectiveOne"/></span>
            </li>
            <li>
              <img src={check} />
              <span> <Translate id="services.one.objectiveTwo"/></span>
            
            </li>
            <li>
              <img src={check} />
              <span> <Translate id="services.one.objectiveThree"/></span>
              </li>
          </ul>

          <div className="xs-12 top">
          <h3> <Translate id="services.methodology"/> </h3>
            <p>
            <Translate id="services.one.methodologyText"/>
            </p>
          </div>

          <div className="xs-12 top">
            <h3> <Translate id="services.step"/> </h3>

            <ul id="etapes">
              <span id="line" />
              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                  <span> <Translate id="services.one.step_one"/> </span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                  <span>  <Translate id="services.one.step_two"/></span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                  <span>  <Translate id="services.one.step_three"/> </span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                  <span>  <Translate id="services.one.step_four"/> </span>
                </div>
              </li>

              <li>
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>

                <div className="xs-10 sm-11">
                  <span>  <Translate id="services.one.step_five"/> </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="xs-12 top">
            <h3>  <Translate id="services.deliverables"/> </h3>
            <p>
              <span><Translate id="services.one.deliverableText"/></span>
            </p>
            <ul id="livrables">
              <li>
                <img src={check} />
                <span><Translate id="services.one.deliverable_one"/></span>
              </li>

              <li>
                <img src={check} />
                <span>
                  <Translate id="services.one.deliverable_two"/>
                </span>
              </li>

              <li>
                <img src={check} />
                <span>
                <Translate id="services.one.deliverable_three"/>
                 </span>
              </li>

              <li>
                <img src={check} />
                <span>
                <Translate id="services.one.deliverable_four"/></span>
                </li>

              <li>
                <img src={check} />
                <span>
                 <Translate id="services.one.deliverable_five"/></span>
              </li>

              <li>
                <img src={check} />
                <span>
                 <Translate id="services.one.deliverable_six"/></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceWrapper>
  );
};
