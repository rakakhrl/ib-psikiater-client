import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";

const AppNavbar = () => {
  const isLogin = useSelector((store) => store.user.isLogin);
  const role = useSelector((store) => store.user.role);
  const dispatch = useDispatch();

  const RoleAction = () => {
    return role === "PATIENT" ? (
      <div className="ml-auto ">
        <Link className="mr-3 text-light" to="/patient-history">
          History
        </Link>
        <Image
          height="30"
          width="30"
          className="mr-3"
          src="https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          roundedCircle
        />
        <Button onClick={() => dispatch(logout())} variant="outline-light">
          Sign Out
        </Button>
      </div>
    ) : (
      <div className="ml-auto ">
        <Image
          height="30"
          width="30"
          src="https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          roundedCircle
        />
      </div>
    );
  };

  const NavbarActions = () => {
    return isLogin ? (
      <RoleAction />
    ) : (
      <div className="ml-auto ">
        <Link to="/registerPasien" className="mr-3 ">
          <Button variant="outline-light">Register as Patient</Button>
        </Link>
        <Link to="/registerPsikiater" className="mr-3 ">
          <Button variant="outline-light">Register as Psikiater</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline-light">Sign In</Button>
        </Link>
      </div>
    );
  };

  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <div className="container">
        <Link to="/">
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Link>
        <NavbarActions />
      </div>
    </Navbar>
  );
};

export default AppNavbar;
