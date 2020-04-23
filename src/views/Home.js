import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import NoAuthContent from "../components/NoAuthContent";
import { useAuth0 } from "../react-auth0-spa";
import Can from "../components/Can";


const Home = () => {

  const {user } = useAuth0();

  return (
    <Fragment>
      <div>User Role: {user.role}</div>

      <Can
        role={user.role}
        perform="auth-home-page:visit"
        yes={() => (
          <Dashboard />
      )}
        no={() => ""}
      />

      <Can
        role={user.role}
        perform="no-auth-home-page:visit"
        yes={() => (
        <Fragment>
          <Hero />
          <NoAuthContent />
        </Fragment>
      )}
        no={() => ""}
      />

    </Fragment>
  );
};

export default Home;
