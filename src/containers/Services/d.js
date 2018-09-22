import React, { Component } from "react";
import universal from "react-universal-component";
import { Head } from "react-static";

let ServiceWrapper = universal(import("./wrapper.js"), {
  loading: () => null
});
ServiceWrapper.preload();

import p_four from "../../assets/p_four.png";

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
          <h3>Commencez, planifier et controler</h3>
          <p>
            La conduite d’une exploitation agricole est soumise à plusieurs
            aléas et il est important d’avoir une équipe qualifiée pour réaliser
            des études techniques, des audits techniques, d’encadrer les
            producteurs ou de faire des recommandations pour améliorer la tenue
            de votre exploitation ou d’un projet agricole.
          </p>
          <div className="xs-12 t-c">
            <img src={p_four} />
          </div>

          <p>
            Pour répondre à toutes ces préoccupations, nous avons développé un
            service d’assistance technique tailler sur mesure en fonction des
            réalités de nos clients afin de répondre efficacement à leurs
            besoins.
          </p>
        </div>
      </div>
    </ServiceWrapper>
  );
};
