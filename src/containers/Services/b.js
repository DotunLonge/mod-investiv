import React, { Component } from "react";
import universal from "react-universal-component";
import { Head } from "react-static";

let ServiceWrapper = universal(import("./wrapper.js"), {
  loading: () => null
});
ServiceWrapper.preload();

import p_two from "../../assets/p_two.png";
import check from "../../assets/check.svg";
import etapes from "../../assets/etapes.svg";
import { Translate } from "react-localize-redux";

export default () => {
  return (
    <ServiceWrapper>
      <Head>
        <title>
          Investiv Group | Non Sevices - Diagnostic Phytosanitaire par drone
        </title>
      </Head>

      <div className="xs-12 content">
        <div className="xs-10 xs-off-1 sm-8 sm-off-2">
        <h3> 
            <Translate id="services.two.heading"/>
       </h3>
          <p>
            <Translate id="services.two.paragraph_one"/>
          </p>
          <p>
          <Translate id="services.two.paragraph_two"/>
          
          </p>
          <div className="xs-12 t-c">
            <img src={p_two} className="fit" />
          </div>

          <h3>   <Translate id="services.objectives"/> </h3>

          <p>
          <Translate id="services.two.objectivesText"/>  </p>

          <ul id="objectives">
            <li>
              <img src={check} />
              <span> <Translate id="services.two.objectiveOne"/></span>
            </li>
            <li>
              <img src={check} />
              <span> <Translate id="services.two.objectiveTwo"/></span>

            </li>
            <li>
              <img src={check} />
              <span> <Translate id="services.two.objectiveThree"/></span>

            </li>

            <li>
              <img src={check} />
              <span> <Translate id="services.two.objectiveFour"/></span>

            </li>
            <li>
              <img src={check} />
              <span> <Translate id="services.two.objectiveFive"/></span>
 </li>
            <li>
              <img src={check} />
              <span> <Translate id="services.two.objectiveSix"/></span>
   </li>
          </ul>

          <div className="xs-12 top">
          <h3> <Translate id="services.methodology"/> </h3>
            <p>
            <Translate id="services.two.methodologyText_one"/>
            </p>
            <p>
            <Translate id="services.two.methodologyText_two"/>
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
                <span> <Translate id="services.two.step_one"/> </span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                <span> <Translate id="services.two.step_two"/> </span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                <span> <Translate id="services.two.step_three"/> </span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                <span> <Translate id="services.two.step_four"/> </span>
                </div>
              </li>

              <li>
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>

                <div className="xs-10 sm-11">
                <span> <Translate id="services.two.step_five"/> </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="xs-12 top">
            <h3> Livrables </h3>
            <ul id="livrables">
            <li>
                <img src={check} />
                <span><Translate id="services.one.deliverable_one"/></span>
              </li>

              <li>
                <img src={check} />
                <span>
                  <Translate id="services.two.deliverable_two"/>
                </span>
              </li>

              <li>
                <img src={check} />
                <span>
                <Translate id="services.two.deliverable_three"/>
                 </span>
              </li>

              <li>
                <img src={check} />
                <span>
                <Translate id="services.two.deliverable_four"/></span>
                </li>

              <li>
                <img src={check} />
                <span>
                 <Translate id="services.two.deliverable_five"/></span>
              </li>


              <li>
                <img src={check} />
                <span>
                 <Translate id="services.two.deliverable_six"/></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceWrapper>
  );
};
