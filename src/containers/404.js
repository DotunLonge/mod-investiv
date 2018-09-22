import React from "react";
import styled from "styled-components";

const Error = styled.div`
  height: calc(100vh - 100px);
  width: 100vw;

  h1 {
    font-size: 4em;
    color: #009444;
  }

  h3 {
    color: #222829;
    font-weight: 300;
  }
`;

export default () => (
  <Error className="xs-12">
    <div className="c-w">
      <div className="c t-c">
        <div className="xs-10 xs-off-1">
          <h1>404</h1>
          <h3> Oh no's! We couldn't find that page :(</h3>
        </div>
      </div>
    </div>
  </Error>
);
