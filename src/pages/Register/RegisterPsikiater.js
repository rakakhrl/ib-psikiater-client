import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import userAction from "../../redux/actions/userAction";
import { Form, Row, Col, Container, Button, Image } from "react-bootstrap";
import "./RegisterPsikiater.css";
import "./index.css";

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
  const [specialize, setSpecialize] = useState("");
  const [experience_year, setExperienceYear] = useState("");
  const [region, setRegion] = useState("");
  const [fee, setFee] = useState("");
  const [work_address, setWorkAddress] = useState("");

  // Yup Validation Schema
  const schema = yup.object().shape({
    firstName: yup.string().required("Required").max(15, "max 15 character"),
    lastName: yup.string(),
    email: yup.string().required("Required").email(),
    password: yup
      .string()
      .required("Required")
      .min(6, "min 6 character")
      .max(15, "max 15 character"),
    dateOfBirth: yup.string().required("Required"),
    placeOfBirth: yup.string().required("Required"),
    gender: yup.string().required("Required"),
    specialize: yup.string().required("Required").max(30),
    workAdress: yup.string().required("Required"),
    experienceYear: yup.string().required("Required"),
    region: yup.string().required("Required").min(5).max(9),
    fee: yup.number().required("Required"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(
      userAction.registerPsikiater(
        first_name,
        last_name,
        password,
        email,
        date_of_birth,
        gender,
        specialize,
        experience_year,
        region,
        fee,
        work_address,
        () => history.push("/email-verification?type=psychiatrist-registration")
      )
    );
  };

  const handleClose = () => {
    history.push("/");
  };

  useEffect(() => {
    if (user.role === "PSIKIATER") {
      history.push("/psikiater-dashboard");
    }
  }, [user.isLogin]);

  return (
    <>
      <p>
        <b onClick={handleClose} style={{ cursor: "pointer" }}>
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
              <p id="register-psikiater-error-message">
                {errors.firstName?.message}
              </p>
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
              <p id="register-psikiater-error-message">
                {errors.lastName?.message}
              </p>
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
          <p id="register-psikiater-error-message">{errors.email?.message}</p>
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
          <p id="register-psikiater-error-message">
            {errors.password?.message}
          </p>
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
          <p id="register-psikiater-error-message">
            {errors.dateOfBirth?.message}
          </p>
        </Form.Group>

        <Row>
          <Col>
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
              <p id="register-psikiater-error-message">
                {errors.gender?.message}
              </p>
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Specialize In</Form.Label>
            <Form.Control
              name="specialize"
              ref={register}
              placeholder="e.g Anxiety"
              onChange={(e) => setSpecialize(e.target.value)}
            ></Form.Control>
            <p id="register-psikiater-error-message">
              {errors.specialize?.message}
            </p>
          </Col>
        </Row>

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
          <p id="register-psikiater-error-message">
            {errors.workAddress?.message}
          </p>
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
              <p id="register-psikiater-error-message">
                {errors.experienceYear?.message}
              </p>
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
              <p id="register-psikiater-error-message">
                {errors.region?.message}
              </p>
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
              <p id="register-psikiater-error-message">{errors.fee?.message}</p>
            </Form.Group>
          </Col>
        </Row>
        <Button
          className="register-button"
          onClick={onSubmit}
          type="submit"
          value="Register"
        >
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
