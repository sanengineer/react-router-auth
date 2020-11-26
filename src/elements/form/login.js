import React, { useState } from "react";
import { Input, Form, Button, Error } from "../../components/AuthForms";

import { Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";

function Formlogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { setAuthTokens } = useAuth();
  const referer = "/admin";

  function postLogin() {
    axios
      .post("http://localhost:8080/api/v1/login", {
        username,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          console.log(result.data.token);
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
        setErrorMessage(e.response.data.message);
      });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Form>
      <Input
        type="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <Button onClick={postLogin}>Sign In</Button>
      {isError && errorMessage && <Error>{errorMessage}</Error>}
    </Form>
  );
}

export default Formlogin;
