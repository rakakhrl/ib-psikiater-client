import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Button, Image } from "react-bootstrap";

const AppNavbar = () => {
  const isLogin = useSelector((store) => store.user.isLogin);
  const role = useSelector((store) => store.user.role);

  const RoleAction = () => {
    return role === "PATIENT" ? (
      <div className="ml-auto ">
        <Image className="mr-3" src="holder.js/180x180" roundedCircle />
        <Button variant="outline-light">Sign Out</Button>
      </div>
    ) : (
      <div className="ml-auto ">
        <Image src="holder.js/180x180" roundedCircle />
      </div>
    );
  };

  const NavbarActions = () => {
    return isLogin ? (
      <RoleAction />
    ) : (
      <div className="ml-auto ">
        <Button variant="outline-light" className="mr-3">
          Register
        </Button>
        <Button variant="outline-light">Sign In</Button>
      </div>
    );
  };

  return (
    <Navbar bg="primary" variant="dark">
      <div className="container">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <NavbarActions />
      </div>
    </Navbar>
  );
};

export default AppNavbar;
