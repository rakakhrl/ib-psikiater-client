import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import placeholderimg from "../../assets/images/fauzihaqmuslim.jpg";

const Index = ({
  id,
  first_name,
  last_name,
  work_address,
  experience_year,
  avatar_url,
  price,
  region,
  star,
  onClick,
}) => {
  const [rating] = useState();
  const history = useHistory();
  console.log(JSON.stringify(avatar_url));

  return (
    <>
      <div className="card">
        <div className="left-side">
          <div className="name">
            <h4>
              {first_name} {last_name}
            </h4>
          </div>
          <div className="address">
            <p>Work Address: {work_address}</p>
          </div>
          <div className="experience">
            <h6>Year of experience: {experience_year}</h6>
          </div>
          <div className="region">
            <h6>Region: {region}</h6>
          </div>
        </div>
        <div className="middle-side">
          <div className="star">
            <StarRatings rating={rating} numberOfStars={star} name="rating" />
          </div>
          <div className="price">
            <h2> Rp. {price} / hour</h2>
          </div>
          <button onClick={onClick}>book appointment</button>
        </div>
        <div className="right-side">
          <Image
            src={avatar_url === " " ? placeholderimg : avatar_url}
            roundedCircle
            style={{ width: "200px" }}
          />
          <button onClick={() => history.push(`/profile/${id}`)}>
            see profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
