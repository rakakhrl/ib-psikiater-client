import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppbarHome = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Navbar
      style={{ position: "sticky" }}
      fixed="top"
      color="#ed51b1;"
      light
      expand="lg"
    >
      <Container>
        <Navbar.Brand style={{ color: "yellow" }} href="/">
          Psikiater
        </Navbar.Brand>
        <Nav className="mr-auto" navbar style={{ marginLeft: "68vw" }}>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMenu(!menu)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  style={{ color: "yellow" }}
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  style={{ color: "yellow" }}
                  aria-current="page"
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          {menu && (
            <>
              <Nav.Item>
                <Nav.Link style={{ color: "yellow" }}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: "yellow" }}>About</Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppbarHome;
