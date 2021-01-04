import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";
import {
  BsArrowCounterclockwise,
  BsFillPersonFill,
  BsFillCalendarFill,
  BsBoxArrowInLeft,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";

const Index = ({ url }) => {
  const dispatch = useDispatch();

  return (
    <Navbar
      style={{ position: "fixed", minWidth: "12vw" }}
      className="navbar d-none d-md-block"
    >
      <Nav className="flex-column">
        <div style={{ position: "absolute", top: 20 }}>
          <Nav.Item>
            <Link to={`${url}`} className="links">
              <h5 className="link">
                {" "}
                <i>
                  <BsFillCalendarFill />
                </i>{" "}
                Schedule
              </h5>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={`${url}/history`} className="links">
              <h5 className="link">
                {" "}
                <i>
                  <BsArrowCounterclockwise />
                </i>
                History
              </h5>
            </Link>
          </Nav.Item>
        </div>
        <div style={{ position: "absolute", bottom: 30 }}>
          <Nav.Item>
            <Link to={`${url}/profile`} className="links">
              <h5 className="link">
                {" "}
                <i>
                  <BsFillPersonFill />
                </i>
                Profile
              </h5>
            </Link>
          </Nav.Item>
          <Nav.Item onClick={() => dispatch(logout())}>
            <h5 className="links">
              <i>
                <BsBoxArrowInLeft />
              </i>
              Sign Out
            </h5>
          </Nav.Item>
        </div>
      </Nav>
      <Nav className="flex-column"></Nav>
    </Navbar>
  );
};

export default Index;
