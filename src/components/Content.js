import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
    render() {
        return ( <
            div className = "next-steps my-5" >

            <
            h2 className = "my-5 text-center" > What makes Cinchpicks different than other fantasy football leagues ? < /h2> 

            <
            p >
            We realize not everyone has the time, or even the desire to spend hours researching players, teams, injury reports, weather and all the other things it takes to be successful in fantasy football leagues.Cinchpick lives up to it 's name </
            p >



            <
            Row className = "d-flex justify-content-between" > {
                contentData.map((col, i) => ( <
                    Col key = { i }
                    md = { 5 }
                    className = "mb-4" >
                    <
                    h6 className = "mb-3" >
                    <
                    a href = { col.link } >
                    <
                    FontAwesomeIcon icon = "link"
                    className = "mr-2" / > { col.title } <
                    /a> < /
                    h6 > <
                    p > { col.description } < /p> < /
                    Col >
                ))
            } <
            /Row>

            <
            h2 className = "my-5 text-center" > What can I do next ? < /h2> <
            Row className = "d-flex justify-content-between" > {
                contentData.map((col, i) => ( <
                    Col key = { i }
                    md = { 5 }
                    className = "mb-4" >
                    <
                    h6 className = "mb-3" >
                    <
                    a href = { col.link } >
                    <
                    FontAwesomeIcon icon = "link"
                    className = "mr-2" / > { col.title } <
                    /a> < /
                    h6 > <
                    p > { col.description } < /p> < /
                    Col >
                ))
            } <
            /Row> < /
            div >
        );
    }
}

export default Content;