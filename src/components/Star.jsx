const Star = ({ star, rating, hover, ratingClick, mouseEnter, mouseLeave }) => {
  return (
    <span
      className={`star ${star <= (hover || rating) ? "active" : ""}`}
      onClick={() => ratingClick(star)}
      onMouseEnter={() => mouseEnter(star)}
      onMouseLeave={() => mouseLeave(0)}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
