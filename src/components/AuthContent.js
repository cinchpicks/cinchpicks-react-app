import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

import { useAuth0 } from "../react-auth0-spa";

const AuthContent = () => {
    const { user, isAuthenticated } = useAuth0();

    return(
        <div className="next-steps my-5">
            <h2 className="my-5 text-center">
                {" "}
            </h2>{" "}
        </div>
    );
};

export default AuthContent;