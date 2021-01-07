import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import CardResult from "../../components/CardResult/index";
import "./index.scss";
import API from "../../API/mainServer";
import swal from "sweetalert";

const Index = () => {
  const isLogin = useSelector((store) => store.user.isLogin);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const fetchSearchResult = async (region) => {
    try {
      const token = localStorage.getItem("accesstoken");

      const response = await API({
        method: "GET",
        url: `/psikiater/search/${region}`,
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
      fetchSearchResult(location.state?.region ?? "none");
    },
    // eslint-disable-next-line
    []
  );

  const handleClick = (psikiater_id) => {
    if (!isLogin) {
      swal("anda harus login terlebih dahulu");
    } else {
      history.push(`/appointment/${psikiater_id}`);
    }

    // TODO: go to create appointment page
  };

  return (
    <>
      <Container>
        <h1
          style={{ textAlign: "center", marginTop: "30px", color: "#70a1ff" }}
        >
          SEARCH RESULT
        </h1>
        <InputGroup style={{ marginTop: "50px" }} className="mb-3">
          <FormControl
            placeholder="Find Your Region..."
            aria-describedby="basic-addon1"
            prefix="fas fa-search"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <Button onClick={() => fetchSearchResult(searchInput)}>Search</Button>
        </InputGroup>

        <Card style={{ marginTop: "50px" }} className="link">
          {searchResult.map((item) => {
            return (
              <Card.Body
                style={{ paddingBottom: "50px", backgroundColor: "#70a1ff" }}
              >
                <CardResult
                  onClick={() => handleClick(item._id)}
                  key={item._id}
                  first_name={item.first_name}
                  last_name={item.last_name}
                  work_address={item.work_address}
                  experience_year={item.info.experience_year}
                  avatar_url={item.avatar_url}
                  price={item.fees}
                  region={item.info.region}
                  star={item.star}
                />
              </Card.Body>
            );
          })}
        </Card>
      </Container>
    </>
  );
};

export default Index;
