import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navbar } from "./components/NavBar";
import axios from "axios";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("success", JSON.stringify(data));
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };

  const useTokens = (data) => {
    localStorage.getItem("success", JSON.stringify(data));
    localStorage.getItem("token", JSON.stringify(data));
    setAuthTokens(data);
    console.log("\n\nPRINT USETOKENS-DATA: \n", data);
  };

  const logOut = () => {
    localStorage.clear();
    setAuthTokens();
  };

  useEffect(() => {
    const useTokens = (data) => {
      localStorage.getItem("success", JSON.stringify(data));
      localStorage.getItem("token", JSON.stringify(data));
      setAuthTokens(data);
      console.log("\n\nPRINT USETOKENS-DATA: \n", data);
    };
  });

  console.log(
    "PRINT AUTHTOKENS: \n",
    authTokens,
    "\n\nPRINT SETAUTHTOKENS: \n",
    setAuthTokens,
    "\n\nPRINT SETTOKENS: \n",
    setTokens,
    "\n\nPRINT USETOKENS: \n",
    useTokens
  );

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Navbar logOut={logOut} authTokens={authTokens}></Navbar>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
