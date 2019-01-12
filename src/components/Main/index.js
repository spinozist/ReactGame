import React, { Component } from "react";
import postcards from "../../postcards.json";
import { Parallax, Col, Row } from "react-materialize";
import "./style.css";   


class Main extends Component {
    
    state = {
        postcards
    };

    handleClick = event => {
        event.preventDefault();
        console.log(`${event.target.id}: ${event.target.name}`);
      };

    render() {
        return(
            <div className="Main">
            <Parallax className="TopParallax" imageSrc="http://www.hipkiss.org/data/maps/william-mackenzie_gallery-of-geography_1870_eastern-united-states_2000_2410_600.jpg"/>
            <div className="section white">
                <div className="row container">
                    <Row>
                        <Col s="4">
                            <h4>Your Score: </h4>
                        </Col>
                        <Col s="4"/>
                        <Col s="4">
                            <h4>Top Score: </h4>
                        </Col>
                    </Row>
                    <Row>
                    {this.state.postcards.map(postcard => (
                        <Col s="4">
                            <img className="postcard" onClick={this.handleClick} id={postcard.id} src={postcard.imagepath} name={postcard.name} alt={postcard.name}/>
                        </Col>
                    ))}
                    </Row>
                </div>
            </div>
            <Parallax className="Parallax" imageSrc="http://www.hipkiss.org/data/maps/william-mackenzie_gallery-of-geography_1870_eastern-united-states_2000_2410_600.jpg"/>
            </div>
        );
    }
};

export default Main;