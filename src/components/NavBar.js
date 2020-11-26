import React from "react";
import { Link } from "react-router-dom";
import { ButtonLogoutNav } from "./AuthForms";

const NavbarHasLogin = ({ logOut }) => {
  return (
    <nav
      style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
    >
      <Link to="/" style={{ padding: "10px" }}>
        Home
      </Link>
      <ButtonLogoutNav onClick={logOut} style={{ padding: "10px" }}>
        Logout
      </ButtonLogoutNav>
      <Link to="/admin" style={{ padding: "10px" }}>
        Admin
      </Link>
    </nav>
  );
};

const NavbarLogin = () => {
  return (
    <nav
      style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
    >
      <Link to="/" style={{ padding: "10px" }}>
        Home
      </Link>
      <Link to="/login" style={{ padding: "10px" }}>
        Login
      </Link>
      <Link to="/signup" style={{ padding: "10px" }}>
        Sign Up
      </Link>
    </nav>
  );
};

const Navbar = ({ logOut, authTokens }) => {
  console.log(
    "TESTING logout:",
    logOut,
    "\n\n TESTING setAuthTokens:",
    authTokens
  );

  return authTokens ? <NavbarHasLogin logOut={logOut} /> : <NavbarLogin />;
};

export { NavbarHasLogin, NavbarLogin, Navbar };
