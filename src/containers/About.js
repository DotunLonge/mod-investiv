import React from "react";
import AboutStyle from "../styles/about.style";
import icon_b from "../assets/about/icon_b.svg";
import icon_c from "../assets/about/icon_c.svg";
import { Head } from "react-static";
import about from "../json/about.json";
import { Translate } from "react-localize-redux";

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
            <h3> <Translate id="about.title"/> </h3>
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
                      <Translate id="about.visionText"/>
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
                      <h4>  <Translate id="about.objective"/> </h4>
                      <p>
                      <Translate id="about.objectiveText"/>
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
           <Translate id="about.p_one"/>           
          </p>
          <p>
          <Translate id="about.p_two"/>           
          </p>
          <p>
          <Translate id="about.p_three"/>           
          </p>
        </div>
      </div>

      <div className="xs-10 xs-off-1 top">
        <div className="xs-12" id="Equipe">
          <div className="xs-12 pre t-c">
            <h2>    <Translate id="about.team"/>           
         </h2>
            <h4>    <Translate id="about.team_one"/>           
         </h4>
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
            <h4>    <Translate id="about.team_two"/>           
         </h4>
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
            <h4> <Translate id="about.team_three"/> </h4>
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
            <h4> <Translate id="about.team_four"/> </h4>
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
