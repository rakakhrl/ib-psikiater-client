import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authAction";
import { useHistory, useLocation } from "react-router-dom";
import {
  Alert,
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

// Form Validation Package
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// SVG
import loginUndraw from "../images/login-page-male.svg";

// CSS
import "./Login.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertShow, setAlertShow] = useState(false);
  const history = useHistory();
  const query = useQuery();

  // Yup Validation Schema

  const schema = yup.object().shape({
    email: yup.string().required("email required"),
    password: yup.string().required("password required"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    setEmail("");
    setPassword("");
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (query.get("verify") === "true") {
      setAlertShow(true);
    }
  }, []);

  useEffect(() => {
    if (user.role === "PSIKIATER") {
      // TODO: change the route to psikiater dashboard
      history.push("/psikiater");
    } else if (user.role === "PATIENT") {
      history.push("/");
    }
  }, [user.isLogin]);

  const handleClose = () => {
    history.push("/");
  };

  const formHandle = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <Container>
        <Card className="user-login-page-card-wrapper">
          <Row>
            <Col md={12} lg={6}>
              <img className="login-page-undraw-image" src={loginUndraw}></img>
            </Col>
            <Col md={12} lg={6}>
              <Row>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    ref={register}
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                  />
                  <p id="login-page-error-message">{errors.email?.message}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={register}
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="***********"
                  />
                  <p id="login-page-error-message">
                    {errors.password?.message}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="user-login-page-button-back"
                    variant="outline-dark"
                    onClick={handleClose}
                  >
                    Back
                  </Button>
                  <Button
                    className="user-login-page-button-sign-in"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Sign In
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Don't Have Account Yet?{"  "}
                    <a
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => history.push("/register")}
                    >
                      Register here
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Login;

{
  /* <Container style={{ marginLeft: "0%" }}>
        <Row>
          <Col
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80")`,
            }}
          ></Col>
          <Col style={{ padding: "18%" }}>
            <Alert
              show={alertShow}
              variant="success"
              dismissible
              onClose={() => setAlertShow(false)}
            >
              Your email successfully verified! Please login to continue.
            </Alert>
            <h1>Login</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  ref={register}
                  type="text"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></Form.Control>
                <p>{errors.email?.message}</p>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  name="password"
                  ref={register}
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></Form.Control>
                <p>{errors.password?.message}</p>
              </Form.Group>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{ margin: "5px" }}
              >
                Home
              </Button>
              <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                Sign In
              </Button>
            </Form>
            <Form.Group
              style={{ textAlign: "center", color: "red", marginTop: "10%" }}
            >
              <p>
                Don't have an account?{" "}
                <a
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => history.push("/register")}
                >
                  Register here
                </a>
              </p>
            </Form.Group>
          </Col>
        </Row>
      </Container> */
}
