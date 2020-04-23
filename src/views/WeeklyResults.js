import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import GetGames from "../components/GetGames";
import Can from "../components/Can";
import NoAuth from "../components/NoAuth";

const WeeklyResults = () => {
  const { user } = useAuth0();

  return (
    
    <Fragment>
      <Can
        role={user.role}
        perform="auth-home-page:visit"
        yes={() => (
        <GetGames />

      )}
        no={() => <NoAuth />}
      />
      <hr />
    </Fragment>
  );
};

export default WeeklyResults;