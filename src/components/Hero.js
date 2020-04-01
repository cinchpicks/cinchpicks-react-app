import React from "react";

import logo from "../assets/football.png";

const Hero = () => ( <
    div className = "text-center hero my-5" >
    <
    img className = "mb-3 app-logo"
    src = { logo }
    alt = "React logo"
    width = "120" / >
    <
    h1 className = "mb-4" > Future home of Cinchpick < /h1>

    <
    p className = "lead" >
    Because we have jobs and a life but we still want fantasy football. < /
    p > <
    /div>
);

export default Hero;