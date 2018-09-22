import React, { Component } from "react";
import universal from "react-universal-component";
import { Head } from "react-static";

let ServiceWrapper = universal(import("./wrapper.js"), {
  loading: () => null
});
ServiceWrapper.preload();

import p_three from "../../assets/p_three.png";

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
          <h3>Produisez sans stress</h3>
          <p>
            Nous mettons à votre disposition des plantations « clé en main » sur
            lesquelles nous vous accompagnons sur un nombre de cycles déterminé
            afin de vous aider à cerner tous les contours d’une activité
            agricole donnée et de prendre votre envol tout seul par la suite.
          </p>
          <div className="xs-12 t-c">
            <img src={p_three} />
          </div>

          <p>
            C’est un package que nous vous offrons dans la mise en place de
            votre exploitation jusqu’à la commercialisation finale de vos
            produits. Tout le long de ce processus, nous vous permettons de
            suivre à distance l’évolution des activités via notre site web.
          </p>
        </div>
      </div>
    </ServiceWrapper>
  );
};
