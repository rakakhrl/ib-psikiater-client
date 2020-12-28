import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tables from "../../components/Table/index";
import AppBar from "../../components/Appbar/index";
import AppbarHome from "../../components/Appbar/AppbarHome";

import { NavbarBrand, NavLink } from "react-bootstrap";

const index = () => {
  return (
    <>
      <AppbarHome />
      <AppBar />
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Hisotry</h1>
    </>
  );
};

export default index;
