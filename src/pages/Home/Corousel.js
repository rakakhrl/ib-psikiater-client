import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Icon from "react-bootstrap-icons";
import "../../assets/css/main.css";
import { InputGroup, Form } from "react-bootstrap";
import swal from "sweetalert";

const Carousel = () => {
  const history = useHistory();
  const isLogin = useSelector((store) => store.user.isLogin);
  const [searchInput, setSearchInput] = useState("");

  const search = () => {
    if (!isLogin) {
      swal("Anda harus login sebagai pasien terlebih dahulu", "", "error");
    }
    history.push("search-result", { region: searchInput });
  };

  return (
    <>
      <section id="banner">
        <div className="inner">
          <header>
            <h1>Prioritaskan Kesehatan Mental Anda</h1>
            <p>Karena tak hanya fisik, kesehatan mental pun perlu dijaga.</p>
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

export default Carousel;
