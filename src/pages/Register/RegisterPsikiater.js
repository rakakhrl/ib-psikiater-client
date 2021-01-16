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
  const [experience_year, setExperienceYear] = useState("");
  const [region, setRegion] = useState("");
  const [fee, setFee] = useState("");
  const [work_address, setWorkAddress] = useState("");

  // Yup Validation Schema
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
    workAdress: yup.string().required("work address required"),
    experienceYear: yup.string().required("experience year required"),
    region: yup.string().required("region required").min(5).max(9),
    fee: yup.number().required("fee required"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    history.push("/email-verification-sent");
  };

  // const formHandle = (e) => {
  //   e.preventDefault();
  //   // dispatch(
  //   //   userAction.registerPsikiater(
  //   //     first_name,
  //   //     last_name,
  //   //     password,
  //   //     email,
  //   //     date_of_birth,
  //   //     gender,
  //   //     experience_year,
  //   //     region,
  //   //     fee,
  //   //     work_address
  //   //   )
  //   // );
  //   history.push("/email-verification-sent");
  // };

  const handleBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (user.role === "PSIKIATER") {
      history.push("/psikiater-dashboard");
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
      <h2>Register as Psikiater</h2>
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
              <p>{errors.lastName?.message}</p>
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
          <p>{errors.gender?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Work Address</Form.Label>
          <Form.Control
            name="workAddress"
            ref={register}
            as="textarea"
            rows={2}
            placeholder="Work Address"
            onChange={(e) => setWorkAddress(e.target.value)}
            value={work_address}
          ></Form.Control>
          <p>{errors.workAddress?.message}</p>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Experience Year</Form.Label>
              <Form.Control
                name="experienceYear"
                ref={register}
                type="text"
                placeholder="Experience Year"
                onChange={(e) => setExperienceYear(e.target.value)}
                value={experience_year}
              ></Form.Control>
              <p>{errors.experienceYear?.message}</p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Region</Form.Label>
              <Form.Control
                name="region"
                ref={register}
                type="text"
                placeholder="Region"
                onChange={(e) => setRegion(e.target.value)}
                value={region}
              ></Form.Control>
              <p>{errors.region?.message}</p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Fee</Form.Label>
              <Form.Control
                name="fee"
                ref={register}
                type="number"
                placeholder="Fee"
                onChange={(e) => setFee(e.target.value)}
                value={fee}
                defaultValue="0"
              ></Form.Control>
              <p>{errors.fee?.message}</p>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" value="Register">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
