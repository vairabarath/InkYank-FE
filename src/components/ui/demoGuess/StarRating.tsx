import React, { useState } from "react";

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number;
  onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    if (onChange) {
      onChange(ratingValue);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={ratingValue}
            style={{
              cursor: "pointer",
              color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              fontSize: "2rem",
            }}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleClick(ratingValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
