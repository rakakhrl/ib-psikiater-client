import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "../../API/mainServer";
import {
  Container,
  Form,
  Col,
  Row,
  Image,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import moment from "moment";
import userAction from "../../redux/actions/userAction";

const Index = () => {
  const [workDays, setWorkDays] = useState([""]);
  const [workTimes, setWorkTimes] = useState([""]);

  const dispatch = useDispatch();
  const accesstoken = localStorage.getItem("accesstoken");
  const psikiater = useSelector((store) => store.user.user_data);
  const psikiater_id = psikiater._id;

  useEffect(() => {
    console.log(psikiater);
    console.log(psikiater_id);
  }, []);

  useEffect(() => {
    console.log(workDays);
    console.log(workTimes);
  }, [workDays, workTimes]);

  const updateButtonHandler = () => {
    dispatch(
      userAction.changePsikiaterSchedule(
        psikiater_id,
        accesstoken,
        workDays,
        workTimes
      )
    );
  };

  const workDaysHandler = (e) => {
    setWorkDays(e.target.value.split(", "));
  };

  const workTimesHandler = (e) => {
    setWorkTimes(e.target.value.split(", "));
  };

  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
          color: "#70a1ff",
        }}
      >
        Profile
      </h1>
      <Container>
        <Row>
          <Col>
            <Image
              src={
                psikiater.avatar_url === ""
                  ? "../images/pic04.jpg"
                  : psikiater.avatar_url
              }
            ></Image>
          </Col>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={`${psikiater.first_name} ${psikiater.last_name}`}
                    readOnly
                  />
                </Col>
                <Col>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control value={`${psikiater.gender}`} readOnly />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control
                    value={moment(`${psikiater.date_of_birth}`).format(
                      "DD MMMM YYYY"
                    )}
                    readOnly
                  />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={psikiater.email} readOnly />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Specialize & Experience Year</Form.Label>
                  <Form.Control
                    value={`${psikiater.specialize} (${psikiater.info.experience_year})`}
                    readOnly
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Work Days & Work Times</Form.Label>
                  {psikiater.schedule.work_days.length === 0 &&
                  psikiater.schedule.work_time.length === 0 ? (
                    <>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Input Your Work Days"
                          onChange={workDaysHandler}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Input Your Work Times"
                          onChange={workTimesHandler}
                        />
                      </InputGroup>

                      <Button
                        disabled={
                          workDays.includes("") && workTimes.includes("")
                            ? true
                            : false
                        }
                        onClick={updateButtonHandler}
                      >
                        Update
                      </Button>
                    </>
                  ) : (
                    <>
                      <Row>
                        <Col>
                          {psikiater.schedule.work_days.map((days) => (
                            <li>{days}</li>
                          ))}
                        </Col>
                        <Col>
                          {psikiater.schedule.work_time.map((times) => (
                            <li>{times}</li>
                          ))}
                        </Col>
                      </Row>
                      <Container>
                        <Button
                          style={{
                            display: "flex",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        >
                          Update
                        </Button>
                      </Container>
                    </>
                  )}
                </Col>
                {/* <Col>
                  <Form.Label>Work Days</Form.Label>
                  {psikiater.schedule.work_days.length === 0 ? (
                    <div>
                      <Form.Control onChange={workDaysHandler} />
                      <Button
                        disabled={
                          workDays.length === 0 && workTimes.length === 0
                            ? true
                            : false
                        }
                        onClick={updateButtonHandler}
                      >
                        Update
                      </Button>
                    </div>
                  ) : (
                    psikiater.schedule.work_days.map((days) => <li>{days}</li>)
                  )}
                </Col>
                <Col>
                  <Form.Label>Work Time</Form.Label>
                  {psikiater.schedule.work_time.length === 0 ? (
                    <Form.Control onChange={workTimesHandler} />
                  ) : (
                    psikiater.schedule.work_time.map((times) => (
                      <li>{times}</li>
                    ))
                  )}
                </Col> */}
              </Row>

              <Row>
                <Col>
                  <Form.Label>Work Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    row={3}
                    value={`${psikiater.work_address}, ${psikiater.info.region}`}
                  />
                  <Button variant="dark">Edit Work Address</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;

{
  /* <Form
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Col style={{ textAlign: "center" }}>
            <Image
              src={
                profile.avatar_url === ""
                  ? "../images/pic04.jpg"
                  : profile.avatar_url
              }
              roundedCircle
              alt="images"
              height="300"
              width="300"
            />
          </Col>
          <Form.Group as={Row}>
            <Col sm="3">
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Depan"
                value={profile.first_name}
                readOnly
              />
            </Col>
            <Col sm="3">
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Panjang"
                value={profile.last_name}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="email"
                value={profile.email}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tanggal Lahir"
                value={profile.date_of_birth}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jenis Kelamin"
                value={profile.gender}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Alamat Kantor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alamat Kantor"
                value={profile.work_address}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col sm="8">
              <Form.Label>Pengalaman</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pengalaman"
                value={profile.info?.experience_year}
                readOnly
              />
            </Col>
          </Form.Group>
          <Form.Group style={{ marginBottom: "100px" }}>
            <Col sm="8">
              <Form.Label>Wilayah</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wilayah"
                value={profile.info?.region}
                readOnly
              />
            </Col>
          </Form.Group>
        </Form> */
}
