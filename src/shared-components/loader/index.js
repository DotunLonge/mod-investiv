import React from "react";
import LoaderStyle from "./loader.style";

export default class Loader extends React.Component {
  render() {
    return (
      <LoaderStyle>
        <div className="loader">Loading...</div>
      </LoaderStyle>
    );
  }
}
