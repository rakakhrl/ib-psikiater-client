import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";
import { BsArrowCounterclockwise, BsFillPersonFill, BsFillCalendarFill, BsBoxArrowInLeft } from "react-icons/bs";

const index = () => {
  return (
    <Navbar
      style={{ position: "fixed", minWidth: "12vw" }}
      className="navbar d-none d-md-block"
    >
      <Nav className="flex-column">
        <div style={{ position: "absolute", top: 20 }}>
          <Nav.Item>
            <Link to="/psikiater" className="links">
              <h5 className="link">
                {" "}
                <i><BsFillCalendarFill/></i> Schedule
              </h5>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/history" className="links">
              <h5 className="link">
                {" "}<i><BsArrowCounterclockwise/></i>
                 History
              </h5>
            </Link>
          </Nav.Item>
        </div>
        <div style={{ position: "absolute", bottom: 30 }}>
          <Nav.Item>
            <Link to="/profile" className="links">
              <h5 className="link">
                {" "}<i><BsFillPersonFill/></i>
                Profile
              </h5>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/" className="links">
              <h5 className="link">
                {" "}
                <i><BsBoxArrowInLeft/></i> Sign Out
              </h5>
            </Link>
          </Nav.Item>
        </div>
      </Nav>
      <Nav className="flex-column"></Nav>
    </Navbar>
  );
};

export default index;
