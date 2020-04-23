import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import GetUsersList from "../../components/admin/GetUsersList";
import CreateUser from "../../components/admin/CreateUser";
import Can from "../../components/Can";
import NoAuth from "../../components/NoAuth";

const Admin = () => {

  const {user } = useAuth0();

  return (

    <Can
        role={user.role}
        perform="admin-get-users-list:visit"
        yes={() => (
          <Fragment>
              <GetUsersList />
              <CreateUser />
          </Fragment>
    )}
        no={() => <NoAuth />}
    />
  );
};

export default Admin;