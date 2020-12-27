import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./index.scss";

const index = () => {
  return (
    <Navbar style={{position: "fixed", width: "10vw"}}  className="navbar">
      <Nav vertical>
        <NavItem>
          <Link to="/psikiater" className="links">
            <h5 className="link">
              {" "}
              <i class="far fa-calendar-alt"></i> Schedule
            </h5>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/history" className="links">
            <h5 className="link">
              {" "}
              <i class="fas fa-history"></i> History
            </h5>
          </Link>
        </NavItem>
      </Nav>
      <Nav vertical>
        <NavItem>
          <Link to="/profile" className="links">
            <h5 className="link">
              {" "}
              <i class="fas fa-user-circle"></i> Profile
            </h5>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/" className="links">
            <h5 className="link">
              {" "}
              <i class="fas fa-sign-out-alt"></i> Sign Out
            </h5>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default index;
