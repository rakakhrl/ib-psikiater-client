import React from "react";
// import { Navbar,Nav,s Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import {
  BsArrowCounterclockwise,
  BsFillPersonFill,
  BsFillCalendarFill,
  BsBoxArrowInLeft,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const Index = ({ url }) => {
  const dispatch = useDispatch();

  return (
    <SideNav
      id="sidebar-sidenav"
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav>
        <NavItem>
          <NavIcon>
            <i>
              <BsFillCalendarFill size="2em" />
            </i>
          </NavIcon>
          <NavText id="sidebar-navtext">
            <Link to={`${url}`}>Schedule</Link>
          </NavText>
        </NavItem>
        <NavItem>
          <NavIcon>
            <i>
              <BsArrowCounterclockwise size="2em" />
            </i>
          </NavIcon>
          <NavText>
            <Link to={`${url}/history`}>History</Link>
          </NavText>
        </NavItem>
        <NavItem>
          <NavIcon>
            <i>
              <BsFillPersonFill size="2em" />
            </i>
          </NavIcon>
          <NavText>
            <Link to={`${url}/profile`}>Profile</Link>
          </NavText>
        </NavItem>
        <NavItem>
          <NavIcon>
            <i>
              <BsBoxArrowInLeft size="2em" />
            </i>
          </NavIcon>
          <NavText>
            <Link onClick={() => dispatch(logout())}>Sign Out</Link>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default Index;

// Old Code

{
  /* <Navbar
      style={{ position: "fixed", minWidth: "12vw" }}
      className="side-bar d-none d-md-block"
    >
      <Nav className="flex-column">
        <div style={{ position: "absolute", top: 20 }}>
          <Nav.Item>
            <Link to={`${url}`} className="links">
              <h5 className="link">
                {" "}
                
                <BsFillCalendarFill />
                
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
    </Navbar> */
}
