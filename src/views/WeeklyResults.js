import React, { Fragment } from "react";

import { useAuth0 } from "../react-auth0-spa";


const WeeklyResults = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      {isAuthenticated && (
        <div>Weekly Results</div>
      )}
      <hr />
    </Fragment>
  );
};

export default WeeklyResults;