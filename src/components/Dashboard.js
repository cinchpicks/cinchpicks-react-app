import React from "react";

import logo from "../assets/football.png";
import { useAuth0 } from "../react-auth0-spa";

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth0();

    return(
        <div className="text-center hero my-5">
            <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
            <h1 className="mb-4"> Welcome back <b>{user.nickname}</b> </h1>
            <p className="lead">
                {" "}
            </p>{" "}
        </div>
    );
};

export default Dashboard;