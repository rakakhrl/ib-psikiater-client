import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Form, Button, Card, Col, Row } from "react-bootstrap";
import CardResult from "../../components/CardResult/index";
import API from "../../API/mainServer";
import swal from "sweetalert";
import _ from "lodash";
import "./index.css";

const Index = () => {
  const isLogin = useSelector((store) => store.user.isLogin);
  const [filter, setFilter] = useState({
    specialties: { id: "" },
    gender: { id: "" },
    price: { id: "" },
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  const [filteredResult, setFilteredResult] = useState();
  const [searchResult, setSearchResult] = useState([]);
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
        { label: "All", value: "" },
        { label: "Child", value: "Child" },
        { label: "Relationship", value: "Relationship" },
        { label: "Mental Health", value: "Mental Health" },
      ],
      onChange: (v) => setFilter({ ...filter, specialties: { id: v } }),
    },
    {
      label: "Gender",
      option: [
        { label: "All", value: "" },
        { label: "Female", value: "Female" },
        { label: "Male", value: "Male" },
        { label: "Other", value: "Other" },
      ],
      onChange: (v) => setFilter({ ...filter, gender: { id: v } }),
    },
    {
      label: "Price",
      option: [
        { label: "All", value: "" },
        { label: "500k - 1mill", value: "1" },
        { label: "1mill - 3mill", value: "2" },
        { label: "3mill - 5mill", value: "3" },
      ],
      onChange: (v) => {
        switch (v) {
          case "1":
            setFilter({
              ...filter,
              price: { id: "1", min: 500000, max: 1000000 },
            });
            break;
          case "2":
            setFilter({
              ...filter,
              price: { id: "2", min: 1000000, max: 3000000 },
            });
            break;
          case "3":
            setFilter({
              ...filter,
              price: { id: "3", min: 3000000, max: 5000000 },
            });
            break;
          default:
            setFilter({ ...filter, price: { id: "" } });
            break;
        }
      },
    },
  ];

  const fetchSearchResult = async (routeArgs) => {
    try {
      const token = localStorage.getItem("accesstoken");
      const url = !routeArgs
        ? "/psikiater" // TODO: Get all psychiatrist
        : `/psikiater/search?first_name=${routeArgs.name}&region=${routeArgs.region}`;

      const response = await API({
        method: "GET",
        url: url,
        headers: {
          accesstoken: token,
        },
      });

      setSearchResult(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      fetchSearchResult(location.state);
      return fetchSearchResult;
    },
    // eslint-disable-next-line
    []
  );

  const filterResult = () => {
    console.log(searchResult);
    const result = _.filter(
      searchResult,
      (s) =>
        s.gender === filter.gender.id ||
        s.specialize === filter.specialties.id ||
        (s.fees >= filter.price.min && s.fees <= filter.price.max)
    );

    setFilteredResult(result);
  };

  useEffect(() => {
    if (
      filter.specialties.id !== "" ||
      filter.gender.id !== "" ||
      filter.price.id !== ""
    ) {
      filterResult();
    } else {
      setFilteredResult();
    }
  }, [filter.specialties, filter.gender, filter.price]);

  const handleClick = (psikiater_id) => {
    if (!isLogin) {
      swal("You have to login first!");
    } else {
      history.push(`/appointment/${psikiater_id}`);
    }
  };

  return (
    <Container id="search-container">
      <h1 style={{ textAlign: "center", marginTop: "30px", color: "#70a1ff" }}>
        {filteredResult ? filteredResult.length : searchResult.length}{" "}
        Psychiatrist Found
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
              <option value={r === "Select Region" ? "" : r}>{r}</option>
            ))}
          </Form.Control>
        </Col>
        <Col md={2}>
          <Button
            onClick={() =>
              fetchSearchResult({ name: searchInput, region: searchRegion })
            }
          >
            Search
          </Button>
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
                      filter[`${f.label.toLowerCase()}`].id === option.value
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
        <Col md={10} id="result-section">
          {!filteredResult
            ? searchResult.map((item) => {
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
                    gender={item.gender}
                    price={item.fees}
                    region={item.info.region}
                    specialize={item.specialize}
                    star={item.star}
                  />
                );
              })
            : filteredResult.map((item) => {
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
