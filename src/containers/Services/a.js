import React, { Component } from "react";
import universal from "react-universal-component";
import { Head } from "react-static";

let ServiceWrapper = universal(import("./wrapper.js"));
ServiceWrapper.preload();

import p_one from "../../assets/p_one.png";
import check from "../../assets/check.svg";
import etapes from "../../assets/etapes.svg";

export default class ServiceA extends Component {
  render() {
    return (
      <ServiceWrapper>
        <Head>
          <title>
            Investiv Group | Non Sevices - Cartographie aérienne par drone
          </title>
        </Head>

        <div className="xs-12 content">
          <div className="xs-10 xs-off-1 sm-8 sm-off-2">
            <h3> Maitrisez l’état et les dimensions de votre terrain </h3>
            <p>
              Dans la mise en œuvre d’un projet agricole, il est important de
              disposer d’une vue d’ensemble de la parcelle agricole, de
              connaitre avec exactitude les limites de la parcelle et de
              concevoir un plan d’aménagement futur du terrain.
            </p>
            <p>
              Le plan d’aménagement servira de fil conducteur du projet et
              permettra d’attribuer des portions de terre à des vocations
              culturales selon la topographie des sites et les objectifs du
              projet. C’est dans ce cadre qu’INVESTIV met à votre disposition
              des drones capables de réaliser des cartographies aériennes ainsi
              que des courbes de niveaux de votre parcelle. Cette carte
              géo-référencée et prête à emploi est un élément essentiel qui vous
              servira tout le long de la conduite de votre exploitation.
            </p>

            <div className="xs-12 t-c">
              <img src={p_one} />
            </div>

            <h3> Objectifs </h3>

            <p>
              La cartographie aérienne par drone présente les objectifs
              suivants:
            </p>

            <ul id="objectives">
              <li>
                <img src={check} />
                <span>
                  Vue d’ensemble et délimitation exacte de la parcelle
                </span>
              </li>
              <li>
                <img src={check} />
                <span>
                  Connaissance de la topographie du terrain à partir des courbes
                  de niveau
                </span>
              </li>
              <li>
                <img src={check} />
                <span> Plan d’aménagement futur de la parcelle</span>
              </li>
            </ul>

            <div className="xs-12 top">
              <h3> Methodologie </h3>
              <p>
                Nous utilisons des drones pour survoler votre parcelle et
                prendre des images de très haute résolution à des intervalles de
                temps régulier. Après l’activité de terrain, nous procedons au
                traitement des données à travers nos logiciels de cartographie
                afin d’avoir une carte d’ensemble de la parcelle.
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
              <p>
                Les rendus après analyse des données sont présentés comme suit:
              </p>
              <ul id="livrables">
                <li>
                  <img src={check} />
                  <span>Une carte en ortho-mosaïque de la parcelle</span>
                </li>

                <li>
                  <img src={check} />
                  <span>
                    Une carte ortho-mosaïque superposée sur plan satellite
                  </span>
                </li>

                <li>
                  <img src={check} />
                  <span>
                    Une carte DSM (Digital Surface Model) de la parcelle
                  </span>
                </li>

                <li>
                  <img src={check} />
                  <span>Une carte DSM superposée sur plan satellite</span>
                </li>

                <li>
                  <img src={check} />
                  <span>Plan d’aménagement de la parcelle (s’il y’a lieu)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ServiceWrapper>
    );
  }
}
