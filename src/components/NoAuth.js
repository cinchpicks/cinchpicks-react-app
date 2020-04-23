import React from "react";

const NoAuth = () => {

    return(
        <div className="text-center hero my-5">
            <p className="lead">
                The current logged in user is not allowed to access this page.  If you feel you have reached this page in error, please contact your team admin.
            </p>{" "}
        </div>
    );
};

export default NoAuth;