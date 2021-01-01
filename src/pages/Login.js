import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleClose = () => {
    history.push("/");
  };

  const formHandle = (e) => {
    e.preventDefault();
    dispatch(userAction.userLogin(email, password));
  };

  const registerPsikiater = () => {
    history.push("/registerPsikiater");
  };

  const registerPasien = () => {
    history.push("/registerPasien");
  };

  useEffect(() => {
    if (user.role === "PSIKIATER") {
      history.push("/psikiater");
    } else if (user.role === "PATIENT") {
      history.push("/pasien");
    }
  }, [user]);

  return (
    <div>
      <Container style={{marginLeft:"0%"}}>
        <Row>
          <Col style={{backgroundImage: `url("https://images.unsplash.com/photo-1580820267682-426da823b514?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80")`}}>
          </Col>
          <Col style={{padding:"18%"}}>
            <h1>Login</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></Form.Control>
              </Form.Group>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{ margin: "5px" }}
              >
                Home
              </Button>
              <Button variant="primary" onClick={formHandle}>
                Sign In
              </Button>
            </Form>
            <Form.Group style={{ textAlign: "center", color: "red" , marginTop:"10%"}}>
              <a>Don't have an account?</a>
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
          </Col>
        </Row>
      </Container>
      {/* <span>{JSON.stringify(user)}</span> */}
      {/* <form onSubmit={formHandle}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="submit" value="Login" />
        <button onClick={registerPsikiater}>Register Psikiater</button>
        <button onClick={registerPasien}>Register Pasien</button>
      </form> */}
    </div>
  );
};

export default Login;
