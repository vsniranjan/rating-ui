const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const clicked = (index) => console.log(index);
  return (
    <div className='rating-container'>
      <h2>Rate your experience</h2>
      <div className='stars'>
        {stars.map((star, index) => (
          <span onClick={() => clicked(index)} key={star} className='star'>
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
