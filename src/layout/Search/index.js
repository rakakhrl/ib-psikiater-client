import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, InputGroup, FormControl } from "react-bootstrap";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "react-bootstrap";
import { Doctor } from "./Data";
import StarRatings from "react-star-ratings";
import "./index.scss";

const Index = () => {
  const [menu, setMenu] = useState(false);
  const [isSearch, setIsSearch] = useState();
  const [rating] = useState();

  return (
    <>
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
      <Container>
        <h1>SEARCH DOCTOR</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Find Your Doctor..."
            aria-describedby="basic-addon1"
            prefix="fas fa-search"
            onChange={(e) => {
              setIsSearch(e.target.value);
            }}
          />
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
        <Link to="/psikiater" className="link">
          {Doctor.filter((item) => {
            if (isSearch === "") {
              return item;
            } else if (item.name.toLowerCase().includes(isSearch)) {
              return item;
            } else {
              return null;
            }
          }).map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="left-side">
                  <div className="name">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="address">
                    <p>{item.address}</p>
                  </div>
                  <div className="experience">
                    <h6>{item.experience}+ years experiences</h6>
                  </div>
                </div>
                <div className="middle-side">
                  <div className="star">
                    <StarRatings
                      rating={rating}
                      numberOfStars={item.star}
                      name="rating"
                    />
                  </div>
                  <div className="price">
                    <h2> Rp. {item.price} / hour</h2>
                  </div>
                </div>
                <div className="right-side">
                  <img
                    src={item.image}
                    alt="images"
                    style={{
                      width: "140px",
                      borderRadius: "50%",
                      float: "right",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </Link>
      </Container>
    </>
  );
};

export default Index;
