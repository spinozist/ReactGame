import React from "react";
import { Row, Col } from "react-materialize";
import "./style.css";


function NavBar(props) {
    return(
        <Row className="HeaderBar">
             <Col s="6"><h2 id="logo">Gone Postal</h2></Col>
             <Col s="3"><h4 className="ScoreBoards">Your Score: </h4></Col>
             <Col s="3"><h4 className="ScoreBoards">Top Score: </h4></Col>
        </Row>
    );
};

export default NavBar;
