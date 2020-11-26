import React from "react";
import { Card, Button } from "../components/AuthForms";

function Admin({ logOut }) {
  return (
    <div>
      <div
        style={{
          margin: "20px",
          fontSize: "30px",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >
        <span style={{ fontSize: "100px" }}>👨🏾‍💻</span> <br />
        Admin Page
      </div>
      <Card>
        <Button onClick={logOut}>Log out</Button>
      </Card>
    </div>
  );
}

export default Admin;
