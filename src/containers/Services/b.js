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
            Atteignez des niveaux de performance supérieur aux standards actuels
          </h3>
          <p>
            En Côte d’Ivoire, 50% des pertes agricoles sont liées aux maladies
            des plantes. Ce pourcentage élevé est aussi valable dans plusieurs
            pays de la sous-région Ouest-Africaine. Aujourd’hui plus que jamais,
            il est primordiale d’identifier rapidement les foyers de
            contaminations sur les parcelles afin de trouver des solutions
            adéquates en vue d’optimiser la production, de prévenir les attaques
            et d’éviter des pertes de production.
          </p>
          <p>
            C’est dans cette perspective qu’INVESTIV a conçu un service de
            diagnostic phytosanitaire par drone qui a pour application de
            répondre efficacement à cette problématique.
          </p>

          <div className="xs-12 t-c">
            <img src={p_two} />
          </div>

          <h3> Objectifs </h3>

          <p>
            La cartographie aérienne par drone présente les objectifs suivants:
          </p>

          <ul id="objectives">
            <li>
              <img src={check} />
              <span>Identification des zones de maladies </span>
            </li>
            <li>
              <img src={check} />
              <span>
                Identification des zones oins fertiles et moins hydratées
              </span>
            </li>
            <li>
              <img src={check} />
              <span>
                Précision des épandages d’engrais et des traitements
                phytosanitaires
              </span>
            </li>

            <li>
              <img src={check} />
              <span>
                Gestion rationnel des ressources en eau et des intrants
              </span>
            </li>
            <li>
              <img src={check} />
              <span>Comptage des plants </span>
            </li>
            <li>
              <img src={check} />
              <span>Estimations des rendements potentiels</span>
            </li>
          </ul>

          <div className="xs-12 top">
            <h3> Methodologie </h3>
            <p>
              Nous disposons de drones équipées de capteurs multi-spectraux
              permettant d’identifier rapidement sur votre parcelle les zones de
              maladies, les zones les moins fertiles et les moins hydratées, de
              manière à faire des épandages d’engrais et des traitements
              phytosanitaires beaucoup plus précis, à gérer la ressource en eau
              et à économiser les intrants.
            </p>
            <p>
              Pour ce faire, au cours de l’activité de terrain, on établit avec
              le drone un plan de vol parcellaire dont l’objectif est d’extraire
              le plus de données possible de l’état de la parcelle. Ces données
              sont ensuite traitées par des experts et ingénieurs agronome afin
              d’établir des cartes.
            </p>
          </div>

          <div className="xs-12 top">
            <h3> Etapes </h3>

            <ul id="etapes">
              <span id="line" />
              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                  <span> Études préalables à la mission </span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                  <span> Organisation du plan de vol</span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                  <span> Réalisation de la mission sur le terrain </span>
                </div>
              </li>

              <li className="xs-12">
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>
                <div className="xs-10 sm-11">
                  <span> Analyse des données </span>
                </div>
              </li>

              <li>
                <div className="xs-2 sm-1">
                  <img src={etapes} />
                </div>

                <div className="xs-10 sm-11">
                  <span> Livraison du rapport final </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="xs-12 top">
            <h3> Livrables </h3>
            <ul id="livrables">
              <li>
                <img src={check} />
                <span>
                  Calcul de l’indice de végétation et du taux de floraison
                </span>
              </li>

              <li>
                <img src={check} />
                <span>Carte de fertilisation azotée </span>
              </li>

              <li>
                <img src={check} />
                <span>Évaluation du stress hydrique</span>
              </li>

              <li>
                <img src={check} />
                <span>Carte de l’activité chlorophyllienne</span>
              </li>

              <li>
                <img src={check} />
                <span>Mesure de la densité de culture</span>
              </li>

              <li>
                <img src={check} />
                <span>Estimation de la biomasse et du rendement</span>
              </li>

              <li>
                <img src={check} />
                <span>Détection des zones de maladies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceWrapper>
  );
};
