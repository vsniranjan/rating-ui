import { useState } from "react";
import Star from "./Star";

const Rating = ({
  question = "Rate your experience",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showSubmitBtn, setshowSubmitBtn] = useState(true);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  function handleSubmit() {
    if (rating > 0) {
      setSubmitted(true);
      setshowSubmitBtn(false);
    }
  }

  function closeModal() {
    setshowSubmitBtn(true);
    setSubmitted(false);
    setRating(0);
    setHover(0);
  }

  return (
    <div className='rating-container'>
      <h2>{question}</h2>
      <div className='stars'>
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            ratingClick={setRating}
            mouseEnter={setHover}
            mouseLeave={setHover}
          />
        ))}
      </div>
      <p className='feedback'>{feedbackMessages[rating - 1]}</p>
      {showSubmitBtn && (
        <button
          className='submit-btn'
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Submit
        </button>
      )}
      {submitted && (
        <div className='model-overlay'>
          <div className='modal'>
            <h2>Thank you</h2>
            <p>
              You rated us {rating} {rating < 1 ? "star" : "stars"}
            </p>
            <button className='close-btn' onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
