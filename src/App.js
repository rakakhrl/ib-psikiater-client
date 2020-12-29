// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import { useHistory } from "react-router-dom";
import { Jumbotron, Button, Form, Modal, Col, Carousel } from "react-bootstrap";

import PrivateRoutePsikiater from "./component/PrivateRoutePsikiater";
import PrivateRoutePasien from "./component/PrivateRoutePasien";

import userAction from "./redux/actions/userAction";
import appAction from "./redux/actions/appAction";

import RegisterPsikiater from "./pages/RegisterPsikiater";
import RegisterPasien from "./pages/RegisterPasien";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Psikiater from "./pages/Psikiater";
import Pasien from "./pages/Pasien";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isLoading = useSelector((state) => state.app.isLoading);
  const userLogin = useSelector((state) => state.user.user_id);
  console.log(userLogin);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      dispatch(appAction.setLoading(false));
    } else {
      dispatch(userAction.checkAccessToken(accessToken));
    }
  }, []);

  const handleLogout = () => {
    swal({
      title: "Apakah anda yakin keluar dari halaman ini?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("accessToken");
        window.location.reload();

        dispatch({
          type: "CHANGE_USER_LOGIN_STATUS",
          payload: {
            loginStatus: false,
          },
        });
      } else {
        // swal("Silahkan Lanjutkan!");
      }
    });
  };

  const formHandle = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      e.preventDefault();
    }

    setValidated(true);
    dispatch(userAction.userLogin(email, password));
  };

  const registerPsikiater = () => {
    history.push("/registerPsikiater");
  };

  const registerPasien = () => {
    history.push("/registerPasien");
  };

  useEffect(() => {
    if (user.role === "administrator") {
      history.push("/psikiater");
    } else if (user.role === "pasien") {
      history.push("/pasien");
    }
  }, [user]);
  const [validated, setValidated] = useState(false);
  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <Router>
          <nav>
            <Link to="/psikiater">Psikiater</Link>
            <Link to="/pasien">Pasien</Link>
            {userLogin ? (
              <Button onClick={handleLogout} style={{ backgroundColor: "red" }}>
                Logout
              </Button>
            ) : (
              <Button variant="primary" onClick={handleShow}>
                Login
              </Button>
            )}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form noValidate validated={validated}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      email tidak boleh kosong.
                    </Form.Control.Feedback>{" "}
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      password tidak boleh kosong.
                    </Form.Control.Feedback>{" "}
                  </Form.Group>
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    style={{ margin: "5px" }}
                  >
                    Close
                  </Button>
                  <Button variant="primary" onClick={formHandle}>
                    Sign In
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Form.Group style={{ textAlign: "center", color: "red" }}>
                  <a>Tidak Memiliku Akun?</a>
                </Form.Group>
                <Form.Group style={{ textAlign: "center", color: "blue" }}>
                  <a style={{ cursor: "pointer" }} onClick={registerPsikiater}>
                    Sign Up Psikiater
                  </a>{" "}
                  ||{" "}
                  <a style={{ cursor: "pointer" }} onClick={registerPasien}>
                    Sign Up Pasien
                  </a>
                </Form.Group>
              </Modal.Footer>
            </Modal>
          </nav>
          <Switch>
            <PrivateRoutePsikiater path="/psikiater" exact>
              <Psikiater />
            </PrivateRoutePsikiater>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registerPsikiater">
              <RegisterPsikiater />
            </Route>
            <Route path="/registerPasien">
              <RegisterPasien />
            </Route>
            <PrivateRoutePasien path="/pasien" exact>
              <Pasien />
            </PrivateRoutePasien>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
