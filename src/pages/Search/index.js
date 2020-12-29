import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  Container, InputGroup, FormControl } from "react-bootstrap";
import { Doctor } from "./Data";
import AppbarHome from "../../components/Appbar/AppbarHome";
import CardResult from "../../components/CardResult/index";
import "./index.scss";

const Index = () => {
  const [isSearch, setIsSearch] = useState();

  return (
    <>
      <AppbarHome/>
      <Container>
        <h1>SEARCH DOCTOR</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Find Your Region..."
            aria-describedby="basic-addon1"
            prefix="fas fa-search"
            onChange={(e) => {
              setIsSearch(e.target.value);
            }}
          />
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
        <Link to="/psikiater" className="link">
          {Doctor.filter((item) => {
            if (isSearch === "") {
              return item;
            } else if (item.region.toLowerCase().includes(isSearch)) {
              return item;
            } else {
              return null;
            }
          }).map((item) => {
            return (
              <CardResult
              name={item.name}
              address={item.address}
              experience={item.experience}
              image={item.image}
              price={item.price}
              region={item.region}
              />
            );
          })}
        </Link>
      </Container>
    </>
  );
};

export default Index;
