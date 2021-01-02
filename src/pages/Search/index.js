import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import {  Container, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { Doctor } from "./Data";
import Navbar from "../../components/Navbar/AppbarHome";
import CardResult from "../../components/CardResult/index";
import "./index.scss";

const Index = () => {
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();

  function handleClick() {
    history.push("/history", {_id: 1})
  }

  return (
    <>
      <Navbar/>
      <Container>
        <h1>SEARCH RESULT</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Find Your Region..."
            aria-describedby="basic-addon1"
            prefix="fas fa-search"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <Button>
            Search
          </Button>
        </InputGroup>

        <Card onClick={handleClick} className="link">
          {Doctor.filter((item) => {
            if (searchInput === "") {
              return item;
            } else if (item.region.toLowerCase().includes(searchInput)) {
              return item;
            } else {
              return null;
            }
          }).map((item) => {
            return (
              <CardResult
              _id={item._id}
              first_name={item.first_name}
              last_name={item.last_name}
              work_address={item.work_address}
              experience_year={item.experience_year}
              avatar_url={item.avatar_url}
              price={item.price}
              region={item.region}
              star={item.star}
              />
            );
          })}
        </Card> 
      </Container>
    </>
  );
};

export default Index;
