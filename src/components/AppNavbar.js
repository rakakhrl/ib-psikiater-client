import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navbar, Button, Image, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";
import userAction from "../redux/actions/userAction";
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
        <Image
          height="30"
          width="30"
          className="mr-3"
          src={user.avatar_url}
          roundedCircle
          onClick={handleShow}
        />
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
          src={
            user.avatar_url ??
            "https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          }
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
      <div className="ml-auto">
        <Link to="/registerPasien" className="mr-3 ">
          <Button variant="outline-light">Register as Patient</Button>
        </Link>
        <Link to="/registerPsikiater" className="mr-3 ">
          <Button variant="outline-light">Register as Psikiater</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline-light">Sign In</Button>
        </Link>
      </div>
    );
  };

  return (
    // <div className="container">
    <Navbar className="navbar-color" sticky="top">
      {role !== "PSIKIATER" ? (
        <Link to="/">
          <Navbar.Brand style={{ color: "white" }}>
            <b>CAPER | CARI PSIKIATER</b>
          </Navbar.Brand>
        </Link>
      ) : (
        <Navbar.Brand>
          <b>CAPER | CARI PSIKIATER</b>
        </Navbar.Brand>
      )}
      <NavbarActions />
    </Navbar>
    // </div>
  );
};

export default AppNavbar;
