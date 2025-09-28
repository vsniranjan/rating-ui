import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const clicked = (index) => console.log(index);
  return (
    <div className='rating-container'>
      <h2>Rate your experience</h2>
      <div className='stars'>
        <p>{hover}</p>
        <p>{rating}</p>
        {stars.map((star, index) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
            className='star'
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
