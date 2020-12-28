import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarBrand, NavLink } from "react-bootstrap";
import AppBar from "../../components/Appbar/index";
import AppbarHome from "../../components/Appbar/AppbarHome";

const index = () => {
  return (
    <>
      <AppbarHome />
      <AppBar />
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Profile</h1>
    </>
  );
};

export default index;
