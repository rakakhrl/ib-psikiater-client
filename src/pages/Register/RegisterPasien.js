import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { Form, Row, Col, Container, Button, Image } from "react-bootstrap";

// Form Validation Package
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setDateofBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  //  Yup Validation Schema
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("first name required")
      .max(15, "max 15 character"),
    lastName: yup.string(),
    email: yup.string().required("email required").email(),
    password: yup
      .string()
      .required("password required")
      .min(6, "min 6 character")
      .max(15, "max 15 character"),
    dateOfBirth: yup.string().required("date of birth required"),
    gender: yup.string().required("gender required"),
    address: yup.string().required("address required").max(100),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const callback = () => {
    history.push(`/email-verification?type=sent&email=${email}`);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(
      userAction.registerPatient(
        first_name,
        last_name,
        password,
        email,
        date_of_birth,
        gender,
        address,
        callback
      )
    );
  };

  const handleBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (user.role === "PATIENT") {
      history.push("/");
    }
  }, [user.isLogin]);

  return (
    <>
      <p>
        <b onClick={handleBack} style={{ cursor: "pointer" }}>
          <ArrowLeft color="black" size={20} style={{ paddingRight: "5px" }} />
          Back
        </b>
      </p>
      <h2>Register as Patient</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                ref={register}
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
              ></Form.Control>
              <p>{errors.firstName?.message}</p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                ref={register}
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            ref={register}
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></Form.Control>
          <p>{errors.email?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
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
        <Form.Group>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            name="dateOfBirth"
            ref={register}
            type="date"
            onChange={(e) => setDateofBirth(e.target.value)}
            value={date_of_birth}
          ></Form.Control>
          <p>{errors.dateOfBirth?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            name="gender"
            ref={register}
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="">Choose...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
        <p>{errors.gender?.message}</p>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            ref={register}
            as="textarea"
            rows={2}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></Form.Control>
          <p>{errors.address?.message}</p>
        </Form.Group>
        <Button type="submit" value="Register" style={{ margin: "10px" }}>
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
