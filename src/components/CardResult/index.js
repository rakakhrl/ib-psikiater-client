import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const Index = (item) => {
  const [rating] = useState();

  return (
    <>
        <div className="card" key={item.id}>
                <div className="left-side">
                  <div className="name">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="address">
                    <p>{item.address}</p>
                  </div>
                  <div className="experience">
                    <h6>{item.experience}+ years experiences</h6>
                  </div>
                  <div className="region">
                    <h6>{item.region}</h6>
                  </div>
                </div>
                <div className="middle-side">
                  <div className="star">
                    <StarRatings
                      rating={rating}
                      numberOfStars={item.star}
                      name="rating"
                    />
                  </div>
                  <div className="price">
                    <h2> Rp. {item.price} / hour</h2>
                  </div>
                </div>
                <div className="right-side">
                  <img
                    src={item.image}
                    alt="images"
                    style={{
                      width: "140px",
                      borderRadius: "50%",
                      float: "right",
                    }}
                  />
                </div>
              </div>
    </>
  );
};

export default Index;