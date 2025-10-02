import Button from "./Button";

const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className='model-overlay'>
      <div className='modal'>
        <h2>Thank you</h2>
        <p>
          You rated us {rating} {rating < 1 ? "star" : "stars"}
        </p>
        <Button className='close-btn' onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
