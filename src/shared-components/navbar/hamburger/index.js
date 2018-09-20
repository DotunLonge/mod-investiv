import React from "react";
// import Hamwrap from "./ham.style";

export default ({ showSideMenu, onClick }) => {
  let isActive = showSideMenu === true ? "is-active" : "";
  return (
    <div>
      <button
        className={"hamburger hamburger--squeeze " + isActive}
        onClick={onClick}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </div>
  );
};
