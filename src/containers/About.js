import React from "react";
import AboutStyle from "../styles/about.style";
import icon_b from "../assets/about/icon_b.svg";
import icon_c from "../assets/about/icon_c.svg";
import { Head } from "react-static";
import about from "../json/about.json";

const teamReq = require.context('../assets/team/', false);
const getTeamPic = link => link.startsWith('http') ? link : teamReq('./' + `${link}`);
const teamPics = Object.keys(about).reduce(
  (acc, newEl) => ({...acc, [newEl]: about[newEl].map((e) => getTeamPic(e.link))}), {});

export default () => {
  return (
    <AboutStyle className="xs-12">
      <Head>
        <title>Investiv Group | A propos</title>
      </Head>

      <div className="xs-12 withBackground">
        <div className="c-w relative">
          <div className="c t-c">
            <h3> A propos </h3>
          </div>
        </div>
      </div>

      <div className="xs-10 xs-off-1">
        <div className="xs-10 xs-off-1 sm-10 sm-off-1" id="about-lift">
          <div className="cards">
            <div className="xs-12 md-6 card f-l">
              <div className="xs-12  inner">
                <div className="c-w">
                  <div className="c">
                    <div className="xs-3">
                      <img src={icon_b} />
                    </div>
                    <div className="xs-9">
                      <h4> Vision </h4>
                      <p>
                        Bâtir le futur de l’agriculture africaine en misant sur
                        l’agriculture de précision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xs-12 md-6 card f-r">
              <div className="xs-12  inner">
                <div className="c-w">
                  <div className="c">
                    <div className="xs-3">
                      <img src={icon_c} />
                    </div>
                    <div className="xs-9">
                      <h4> Objectif </h4>
                      <p>
                        Devenir un leader en matière de conseil agricole en
                        Afrique grâce à une expérience basée sur l’agriculture
                        de précision
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xs-10 xs-off-1 sm-8 sm-off-2 content">
          <p>
            Investiv est une entreprise Ivoirienne spécialisée dans le conseil
            en matière d’agriculture de précision. Pionnière dans l'utilisation
            des drones en agriculture en Afrique de l'Ouest, nous fournissons à
            nos clients des solutions techniques et innovantes alliant
            productivité, performance et gain de temps.
          </p>
          <p>
            Ces solutions leur permettent de réduire de prime abord, les pertes
            liées aux problèmes phytosanitaires, puis de connaître avec
            précision l'état et les dimensions de leurs terres, enfin, de suivre
            l'évolution de leurs activités agricoles et de faire des études
            techniques préalables à la mise en œuvre de leur projet agricole.
          </p>
          <p>
            Nous travaillons avec plusieurs catégories de clients, notamment :
            les particuliers voulant se lancer en agriculture, les
            professionnels du secteur agricole, les producteurs eux-mêmes, les
            coopératives agricoles, les institutions qui financent des projets
            agricoles, les institutions gouvernementales, les entreprises
            agricoles et les ONG qui soutiennent le secteur agricole.
          </p>
        </div>
      </div>

      <div className="xs-10 xs-off-1 top">
        <div className="xs-12" id="Equipe">
          <div className="xs-12 pre t-c">
            <h2> Equipe </h2>
            <h4> Equipe agronomique </h4>
          </div>

          <div className="xs-12 top">
            {about.equip.map((p, i) => {
              return (
                <div className="xs-12 sm-6 md-4 info-card" key={i}>
                  <div className="inner">
                    <img src={teamPics.equip[i]} />
                    <h4>{p.name}</h4>
                    <p>{p.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="xs-12 top" id="Equipe">
          <div className="xs-12 pre t-c">
            <h4> Equipe Technologique </h4>
          </div>

          <div className="xs-12 top">
            {about.technologies.map((p, i) => {
              return (
                <div className="xs-12 sm-6 md-4 info-card" key={i}>
                  <div className="inner">
                    <img src={teamPics.technologies[i]} />
                    <h4>{p.name}</h4>
                    <p>{p.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="xs-12 top" id="Equipe">
          <div className="xs-12 pre t-c">
            <h4> Equipe administrative </h4>
          </div>

          <div className="xs-12 top">
            {about.admins.map((p, i) => {
              return (
                <div className="xs-12 sm-6 md-4 info-card" key={i}>
                  <div className="inner">
                    <img src={teamPics.admins[i]} />
                    <h4>{p.name}</h4>
                    <p>{p.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="xs-12 top" id="Equipe">
          <div className="xs-12 pre t-c">
            <h4> Pilote de drone </h4>
          </div>

          <div className="xs-12 top">
            {about.drone.map((p, i) => {
              return (
                <div className="xs-12 sm-6 md-4 info-card" key={i}>
                  <div className="inner">
                    <img src={teamPics.drone[i]} />
                    <h4>{p.name}</h4>
                    <p>{p.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AboutStyle>
  );
};
