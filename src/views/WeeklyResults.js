import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import GetGames from "../components/GetGames";


const WeeklyResults = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      {isAuthenticated && (
        <GetGames />
      )}
      <hr />
    </Fragment>
  );
};

export default WeeklyResults;