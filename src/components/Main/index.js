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
        console.log(`${event.target.id}: ${event.target.name} (${event.target.value})`);
        if (event.target.value === "false"){
            this.setState({
                clickstatus: "true"
            });
            console.log(event.target);
        } else {
            console.log(event.target);
        }
    };


    shuffleArray = InputArray => {
        var ctr = InputArray.length, temp;
        var index = 0;
        while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        console.log(index)

        ctr--;
        temp = InputArray[ctr];
        InputArray[ctr] = InputArray[index];
        InputArray[index] = temp;
        }
        return InputArray
    };

    render() {

        const newState = { ...this.state };

        this.shuffleArray(newState.postcards);

        return(
            <div className="Main">
                <Parallax className="Parallax" imageSrc="http://www.hipkiss.org/data/maps/william-mackenzie_gallery-of-geography_1870_eastern-united-states_2000_2410_600.jpg"/>
                <div className="section white">
                    <div className="row container">
                        <Row>
                        {newState.postcards.map(postcard => (
                            <Col s="4" className="postcard">
                                <img onClick={this.handleClick} value={postcard.clickstatus} id={postcard.id} src={postcard.imagepath} name={postcard.name} alt={postcard.name} />
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