import React from "react";
import * as Icon from 'react-bootstrap-icons';
import "../../assets/css/main.css"
import {InputGroup, Form} from "react-bootstrap"


const Carousel = () => {
  
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
                  style={{borderColor:"white"}}
                />
                <InputGroup.Prepend onClick={()=>{console.log("tes")}} style={{cursor:"pointer"}}>
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
