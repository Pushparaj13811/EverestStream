import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";

const home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default home;
