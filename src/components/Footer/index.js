import React from "react";
import { Footer } from "react-materialize";
import "./style.css";

function FooterComp() {
    return(
    <Footer copyrights="&copy 2019 Copyright Erik Woodworth">
        <h5 className="white-text">spinozist.github.com</h5>
    </Footer>
    );
};

export default FooterComp;