import React from "react";
import "./Appointment.css";
import Calendar from "react-calendar";
import API from "../../API/mainServer";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import appointmentAction from "../../redux/actions/appointmentAction";

import CancelModal from "./CancelModal";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Card,
  Spinner,
  Modal,
} from "react-bootstrap";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment/locale/id";

const Appointment = () => {
  const [psikiaterData, setPsikiaterData] = useState({});
  const [appointment_time, setAppointmentTime] = useState("");
  const [appointment_date, setAppointmentDate] = useState("");
  const [complaint, setComplaint] = useState("");
  const [allergy, setAllergy] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [yesButtonCancel, setYesButtonCancel] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.user_data);
  const patient_id = dataUser._id;
  const { psikiater_id } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    moment.locale("id");
    setAppointmentDate(moment(startDate).format("dddd"));
  }, [startDate]);

  const schema = yup.object().shape({
    timeSchedule: yup.string().required("Required!"),
    sessionType: yup.string().required("Required!"),
    complaint: yup.string().required("Required!"),
  });

  const { register, handleSubmit, trigger, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const getIdCallback = (id) => {
    history.push(`/checkout-payment/${id}`);
  };

  const onSubmit = (data) => {
    if (appointment_time !== "") {
      console.log(appointment_date);
      console.log(appointment_time);
      console.log(sessionType);
      console.log(complaint);
      console.log(allergy);
    } else {
      trigger("timeSchedule");
    }
    const accesstoken = localStorage.getItem("accesstoken");
    dispatch(
      appointmentAction.createAppointment(
        complaint,
        allergy,
        appointment_date,
        appointment_time,
        sessionType,
        accesstoken,
        psikiater_id,
        patient_id,
        getIdCallback
      )
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const getData = await API({
          url: `/psikiater/${psikiater_id}`,
          method: "GET",
          headers: {
            accesstoken: localStorage.getItem("accesstoken"),
          },
        });
        setIsLoading(false);
        setPsikiaterData(getData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    return getData;
  }, []);

  const complaintHandler = (e) => {
    setComplaint(e.target.value);
  };

  const allergyHandler = (e) => {
    setAllergy(e.target.value);
  };

  const cancelButton = () => {
    setModalShow(true);
  };

  const sessionTypeHandler = (e) => {
    setSessionType(e.target.value);
  };

  const onHandler = (e) => {
    setAppointmentTime(e.target.value);
  };
  return (
    <>
      {isLoading ? (
        <div className="loading-spinner">
          <Spinner variant="primary" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="page-title">Appointment</h2>

            <Container className="page-wrapper">
              <Card className="psikiater-card-wrapper">
                <Row className="row-1">
                  <Col className="column-row-1-wrapper" md={12} lg={6}>
                    <Row>
                      <Col className="column-image" md={12} lg={6}>
                        <Image
                          className="psikiater-avatar"
                          src={`${psikiaterData?.avatar_url}`}
                          roundedCircle
                        ></Image>
                      </Col>
                      <Col md={12} lg={6} className="psikiater-info">
                        <h5>{`Name : ${psikiaterData?.first_name} ${psikiaterData?.last_name}`}</h5>
                        <h5>{`Address : ${psikiaterData?.work_address}`}</h5>
                        <h5>{`Specialized In : Relationship`}</h5>
                        <h5>{`Experience : ${psikiaterData?.info?.experience_year}`}</h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <h5 className="date-picker-title">Select Date Schedule</h5>
                    <div className="date-picker">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                          setStartDate(date);
                          setAppointmentDate(moment(date).format("dddd"));
                          setAppointmentTime("");
                        }}
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="row-2">
                  <Col className="column-psikiater-schedule">
                    <h5 className="psikiater-time-schedule-title">
                      <b>Psychiatrist Time Schedule</b>
                    </h5>
                    {!psikiaterData?.schedule?.work_days.includes(
                      moment(startDate).format("dddd")
                    ) ? (
                      <Button>Psikiater doesn't have schedule yet</Button>
                    ) : (
                      psikiaterData?.schedule?.work_time.map((item) => {
                        return (
                          <Form.Check
                            className="psikiater-time-schedule"
                            name="timeSchedule"
                            ref={register}
                            checked={item === appointment_time}
                            value={item}
                            type="radio"
                            label={item}
                            id={`disabled-default-radio`}
                            onChange={onHandler}
                          />
                        );
                      })
                    )}
                    {appointment_time === "" ? (
                      <p className="error-message">
                        {errors.timeSchedule?.message}
                      </p>
                    ) : null}
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <h5 className="session-type-title">
                        <b>Session Type</b>
                      </h5>
                      <Form.Control
                        name="sessionType"
                        ref={() => register(register)}
                        onChange={(v) => sessionTypeHandler(v)}
                        className="form-session-type"
                        as="select"
                      >
                        <option>Select Session Type</option>
                        <option>Offline</option>
                        <option>Online</option>
                      </Form.Control>
                      {sessionType.includes("Online" || "Offline") ? null : (
                        <p className="error-message">
                          {errors.sessionType?.message}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="row-3">
                  <Col lg={6}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>
                        <b>COMPLAINTS</b>
                      </Form.Label>
                      <Form.Control
                        name="complaint"
                        ref={register}
                        className="form-complaints"
                        as="textarea"
                        rows={3}
                        placeholder="How do you feel?"
                        onChange={complaintHandler}
                        value={complaint}
                      />
                      <p className="error-message">
                        {errors.complaint?.message}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>
                        <b>ALLERGIES</b>
                      </Form.Label>
                      <Form.Control
                        className="form-allergies"
                        as="textarea"
                        rows={3}
                        type="text"
                        placeholder="e.g Fish Oil"
                        onChange={allergyHandler}
                        value={allergy}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="row-4">
                  <Container className="button-wrapper">
                    <Button
                      onClick={cancelButton}
                      variant="dark"
                      className="cancel-button"
                    >{`< Cancel`}</Button>
                    <CancelModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    <Button
                      onClick={onSubmit}
                      type="submit"
                      className="continue-button"
                    >
                      {"Continue >"}
                    </Button>
                  </Container>
                </Row>
              </Card>
            </Container>
          </Form>
        </div>
      )}
    </>
  );
};

export default Appointment;
