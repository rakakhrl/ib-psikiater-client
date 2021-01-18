import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Form, Button, Card, Col, Row } from "react-bootstrap";
import CardResult from "../../components/CardResult/index";
import API from "../../API/mainServer";
import swal from "sweetalert";
import "./index.css";

const Index = () => {
  const isLogin = useSelector((store) => store.user.isLogin);
  const [filter, setFilter] = useState({
    specialties: "all",
    gender: "all",
    price: "all",
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  const [searchResult, setSearchResult] = useState([
    {
      fees: 600000,
      info: {
        specialties: "relationship",
        experience_year: "100+ year",
        region: "Bekasi",
      },
      schedule: {
        work_days: ["Senin", "Jumat"],
        work_time: ["09:00 - 12:00", "13:00 - 16:00"],
      },
      is_active: true,
      avatar_url: "",
      _id: "5fe5a1efdf84fa2ae85c7861",
      first_name: "Psikiater",
      last_name: "Handal",
      password: "$2b$10$PRx0VgUKDWZoduM9uT7BvuvyI3vHKMIdO51sFNDvegcKOPl5TF1hW",
      email: "saya_handal@gmail.com",
      date_of_birth: "1885-12-25T00:00:00.000Z",
      gender: "male",
      createdAt: "2020-12-25T08:25:19.195Z",
      updatedAt: "2020-12-25T09:14:38.035Z",
    },
    {
      fees: 1500000,
      info: {
        specialties: "child",
        experience_year: "100+ year",
        region: "Depok",
      },
      schedule: {
        work_days: ["Senin", "Jumat"],
        work_time: ["09:00 - 12:00", "13:00 - 16:00"],
      },
      is_active: true,
      avatar_url: "",
      _id: "5fe5a1efdf84fa2ae85c7861",
      first_name: "Psikiater",
      last_name: "Handal",
      password: "$2b$10$PRx0VgUKDWZoduM9uT7BvuvyI3vHKMIdO51sFNDvegcKOPl5TF1hW",
      email: "saya_handal@gmail.com",
      date_of_birth: "1885-12-25T00:00:00.000Z",
      gender: "female",
      createdAt: "2020-12-25T08:25:19.195Z",
      updatedAt: "2020-12-25T09:14:38.035Z",
    },
  ]);
  const history = useHistory();
  const location = useLocation();

  const regionOption = [
    "Select Region",
    "Bekasi",
    "Bogor",
    "Depok",
    "Jakarta",
    "Tanggerang",
  ];

  const filterOption = [
    {
      label: "Specialties",
      option: [
        { label: "All", value: "all" },
        { label: "Child", value: "child" },
        { label: "Relationship", value: "relationship" },
        { label: "Mental Health", value: "mental" },
      ],
      onChange: (v) => setFilter({ ...filter, specialties: v }),
    },
    {
      label: "Gender",
      option: [
        { label: "All", value: "all" },
        { label: "Female", value: "female" },
        { label: "Male", value: "male" },
        { label: "Other", value: "other" },
      ],
      onChange: (v) => setFilter({ ...filter, gender: v }),
    },
    {
      label: "Price",
      option: [
        { label: "All", value: "all" },
        { label: "500k - 1mill", value: "1" },
        { label: "1mill - 3mill", value: "2" },
        { label: "3mill - 5mill", value: "3" },
      ],
      onChange: (v) => setFilter({ ...filter, price: v }),
    },
  ];

  const fetchSearchResult = async (routeArgs) => {
    try {
      const token = localStorage.getItem("accesstoken");
      const url = !routeArgs
        ? "/psikiater" // TODO: Get all psychiatrist
        : `/psikiater/search?name=${routeArgs.name}&region=${routeArgs.region}`;

      const response = await API({
        method: "GET",
        url: url,
        headers: {
          accesstoken: token,
        },
      });

      console.log(response.data.data);
      setSearchResult(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      // fetchSearchResult(location.state);
      // return fetchSearchResult;
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    // TODO: Implement filter psychiatrist
    console.log(filter);
  }, [filter]);

  const handleClick = (psikiater_id) => {
    if (!isLogin) {
      swal("anda harus login terlebih dahulu");
    } else {
      history.push(`/appointment/${psikiater_id}`);
    }
  };

  return (
    <Container className="search-container">
      <h1 style={{ textAlign: "center", marginTop: "30px", color: "#70a1ff" }}>
        {searchResult.length} Psychiatrist Found
      </h1>
      <Form className="mb-3 mt-5 d-flex">
        <Col md={7}>
          <Form.Control
            placeholder="Search psychiatrist...."
            aria-describedby="basic-addon1"
            prefix="fas fa-search"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            as="select"
            onChange={(e) => setSearchRegion(e.target.value)}
          >
            {regionOption.map((r) => (
              <option>{r}</option>
            ))}
          </Form.Control>
        </Col>
        <Col md={2}>
          <Button onClick={() => fetchSearchResult(searchInput)}>Search</Button>
        </Col>
      </Form>

      <Row className="mt-4">
        <Col md={2}>
          <Form>
            {filterOption.map((f) => (
              <Form.Group>
                <Form.Label>{f.label}</Form.Label>
                {f.option.map((option) => (
                  <Form.Check
                    custom
                    type="checkbox"
                    name={f.label}
                    id={`${f.label}-${option.value}`}
                    checked={
                      filter[`${f.label.toLowerCase()}`] === option.value
                    }
                    value={option.value}
                    onChange={(e) => f.onChange(e.target.value)}
                    label={option.label}
                  />
                ))}
              </Form.Group>
            ))}
          </Form>
        </Col>
        <Col md={10} className="result-section">
          {searchResult.map((item) => {
            return (
              <CardResult
                onClick={() => handleClick(item._id)}
                key={item._id}
                id={item._id}
                first_name={item.first_name}
                last_name={item.last_name}
                work_address={item.work_address}
                experience_year={item.info.experience_year}
                avatar_url={item.avatar_url}
                price={item.fees}
                region={item.info.region}
                star={item.star}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
