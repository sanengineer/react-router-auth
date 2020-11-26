import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/AuthForms";
import FormLogin from "../elements/form/login";

function Login(props) {
  return (
    <Card>
      <FormLogin />
      <Link to="/signup">Don't have an account?</Link>
    </Card>
  );
}

export default Login;
