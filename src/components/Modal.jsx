const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className='model-overlay'>
      <div className='modal'>
        <h2>Thank you</h2>
        <p>
          You rated us {rating} {rating < 1 ? "star" : "stars"}
        </p>
        <button className='close-btn' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
