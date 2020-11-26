import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import { Card, Form, Input, Button, Error } from "../components/AuthForms";

function Signup(props) {
  const [isSignUp, setSignUp] = useState(false);
  const [isError, setIsError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const referer = "/login";

  function postSignup() {
    axios
      .post("http://localhost:8080/api/v1/signup", {
        username,
        email,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setSignUp(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
        setErrorMessage(e.response.data.message);
      });
  }

  if (isSignUp) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
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
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="your@email.com"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postSignup}>Sign Up</Button>
      </Form>
      <Link to="/login" style={{ marginBottom: "20px" }}>
        Already have an account?
      </Link>
      {isError && <Error>{errorMessage}</Error>}
    </Card>
  );
}

export default Signup;
