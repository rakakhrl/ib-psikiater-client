import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Navbar,
  Button,
  Image,
  Modal,
  OverlayTrigger,
  Popover,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import userAction from "../../redux/actions/userAction";
import "./AppNavbar.css";

const AppNavbar = () => {
  const isLogin = useSelector((store) => store.user.isLogin);
  const role = useSelector((store) => store.user.role);
  const user = useSelector((store) => store.user.user_data);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [nameFile, setNameFile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uploadPhoto = (e) => {
    e.preventDefault();
    setSelectedFile(e.target.files[0]);
    setNameFile(e.target.files[0].name);
  };

  const handlePhoto = () => {
    dispatch(userAction.uploadFotoPasien(selectedFile));
    dispatch(userAction.fetchUserData());
    handleClose();
  };
  const handlePhotoPsikiater = () => {
    dispatch(userAction.uploadFotoPsikiater(selectedFile));
    dispatch(userAction.fetchUserData());
    handleClose();
  };

  const RoleAction = () => {
    return role === "PATIENT" ? (
      <div className="ml-auto ">
        <Link className="mr-3 text-light" to="/patient-history">
          History
        </Link>
        <OverlayTrigger
          trigger="click"
          placement="bottom-start"
          overlay={
            <Popover id={`popover-positioned`}>
              <Popover.Content>
                <Link to="/profile/me">Profile</Link>
                <br />
                <Link to="/patient-dashboard">Dashboard</Link>
                <br />
                <Link to="#">Sign Out</Link>
              </Popover.Content>
            </Popover>
          }
        >
          <Image
            height="30"
            width="30"
            className="mr-3"
            src={
              user.avatar_url === " " ? "../images/pic04.jpg" : user.avatar_url
            }
            roundedCircle
            // onClick={handleShow}
          />
        </OverlayTrigger>
        <Button onClick={() => dispatch(logout())} variant="outline-light">
          Sign Out
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Foto Profile Patient</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>{nameFile}</label>
              <input type="file" onChange={uploadPhoto} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              value="Upload"
              onClick={handlePhoto}
            >
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    ) : (
      <div className="ml-auto ">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Foto Profile Psikiater</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>{nameFile}</label>
              <input type="file" onChange={uploadPhoto} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlePhotoPsikiater}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
        <Image
          height="30"
          width="30"
          src={user.avatar_url === "" ? "../images/pic04.jpg" : user.avatar_url}
          roundedCircle
          onClick={handleShow}
        />
      </div>
    );
  };

  const NavbarActions = () => {
    return isLogin ? (
      <RoleAction />
    ) : (
      <Navbar id="navbar" className="ml-auto">
        <Link to="/register" className="mr-3 ">
          <Button id="navbar-button" variant="outline-light">
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button id="navbar-button" variant="outline-light">
            Sign In
          </Button>
        </Link>
      </Navbar>
    );
  };

  return (
    // <div className="container">
    <Navbar collapseOnSelect expand="md" id="navbar" sticky="top">
      <Container>
        {role !== "PSIKIATER" ? (
          <Link to="/">
            <Navbar.Brand style={{ color: "white" }}>
              <b id="navbar-brand-name">FILINGS</b>
            </Navbar.Brand>
          </Link>
        ) : (
          <Navbar.Brand>
            <b id="navbar-brand-name">FILINGS</b>
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavbarActions />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  );
};

export default AppNavbar;
