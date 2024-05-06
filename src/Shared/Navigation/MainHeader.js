import React from "react";
import NavigationLinks from "./NavigationLinks";
import "./MainHeader.css";

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <div className="main-header">
        <h1 className="main-title">ThriveTrack</h1>
        <nav>
          <NavigationLinks />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
