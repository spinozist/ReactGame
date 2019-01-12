import React from "react";
import Card from "./Card";
import "./style.css";

function Container() {
    return(
    <div className="section white">
      <div className="row container">
        <h2 className="header">Click a Postcard</h2>
        <Card />
      </div>
    </div>
    );
};

export default Container;