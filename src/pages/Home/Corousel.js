import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "../../css/Part.css";
import { InputGroup, Form } from "react-bootstrap";
import swal from "sweetalert";

const Corousel = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  const search = () => {
    history.push("search-result", { region: searchInput });
  };

  return (
    <>
      <section id="jumbotron">
        <div>
          <img
            src="https://i.postimg.cc/50SG5Vgr/cari-psikiater.png"
            style={{ width: "20em" }}
          ></img>
          <header style={{ marginTop: "30px" }} className="inner">
            <h1 style={{ color: "white" }}>
              Prioritaskan Kesehatan Mental Anda
            </h1>
            <p style={{ color: "white" }}>
              Karena tak hanya fisik, kesehatan mental pun perlu dijaga.
            </p>
          </header>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search"
              style={{ borderColor: "white" }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by region"
            />
            <InputGroup.Prepend onClick={search} style={{ cursor: "pointer" }}>
              <InputGroup.Text id="inputGroupPrepend">
                <Icon.Search />
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      </section>
    </>
  );
};

export default Corousel;
