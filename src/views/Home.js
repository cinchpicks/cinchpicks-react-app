import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import NoAuthContent from "../components/NoAuthContent";
import AuthContent from "../components/AuthContent";
import { useAuth0 } from "../react-auth0-spa";



const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      {!isAuthenticated && (
        <Hero />
      )}
      {isAuthenticated && (
        <Dashboard />
      )}
      <hr />
      {!isAuthenticated && (
        <NoAuthContent />
      )}
      {isAuthenticated && (
        <AuthContent />
      )}
    </Fragment>
  );
};

export default Home;
