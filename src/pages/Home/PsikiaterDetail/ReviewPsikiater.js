import React, { useEffect, useState } from "react";
import API from "../../../API/mainServer";
import StarRatings from "react-star-ratings";

function ReviewPsikiater({ id }) {
  const [ratingPsikiater, setRatingPsikiater] = useState(null);

  useEffect(() => {
    const accesstoken = localStorage.getItem("accesstoken");
    const getReviewPsikiater = async () => {
      const response = await API({
        method: "GET",
        url: `/psikiater/rating/${id}`,
        headers: {
          accesstoken: accesstoken,
        },
      });
      setRatingPsikiater(response.data.data);
      console.log(response.data);
    };
    getReviewPsikiater();
    return getReviewPsikiater;
  }, []);
  return (
    <div>
      {!ratingPsikiater ? (
        <StarRatings
          starSpacing="8px"
          starDimension="25px"
          rating={0}
          numberOfStars={5}
        />
      ) : (
        <StarRatings
          rating={Number(
            parseFloat(ratingPsikiater?.review?.average_rating?.$numberDecimal)
          )}
          numberOfStars={5}
          starRatedColor="gold"
          starDimension="20px"
        />
      )}
    </div>
  );
}
export default ReviewPsikiater;
