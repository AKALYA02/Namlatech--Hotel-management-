
function HotelCard({ hotel, onEdit, onDelete, onView }) {
  return (
    <div className="hotel-card">
      <img
        src={hotel.image}
        alt={hotel.title}
        className="hotel-image"
      />

      <div className="hotel-info">
        <h2>{hotel.title}</h2>

        <p>{hotel.description}</p>

        <h3>₹{hotel.price} </h3>

        <div className="hotel-actions">
          <button onClick={onView}>View Details</button>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete} >Delete</button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;