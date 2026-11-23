
function SuccessPopup({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="success-popup">
        <h2>Success!</h2>

        <p>{message}</p>

        <button onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

export default SuccessPopup;
