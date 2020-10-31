import React from "react";
import { Card, Button } from "../components/AuthForms";
// import { useAuth } from "../context/auth";

function Admin(props) {
  // const { setAuthTokens } = useAuth();

  // function logOut() {
  //   setAuthTokens();
  // }

  return (
    <div>
      <div>Admin Page</div>
      <Card>
        <Button>Log out</Button>
      </Card>
    </div>
  );
}

export default Admin;
