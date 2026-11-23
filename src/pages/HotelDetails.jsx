
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Helmet } from "react-helmet-async";

import "leaflet/dist/leaflet.css";

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = useSelector((state) =>
    state.hotels.hotels.find(
      (item) => item.id === Number(id)
    )
  );

  if (!hotel) {
    return <h2>Hotel not found!</h2>;
  }

  return (
    <div className="hotel-details">
      <Helmet>
        <title>{hotel.title} | Hotel Management</title>
        <meta
          name="description"
          content={hotel.description}
        />
      </Helmet>

      <button onClick={() => navigate("/")}>
        Back to Hotels
      </button>

      <h1>{hotel.title}</h1>

      <img
        src={hotel.image}
        alt={hotel.title}
        className="details-image"
      />

      <p>{hotel.description}</p>

      <h2>Price: ₹{hotel.price} </h2>

      <h3>Hotel Location</h3>

      <MapContainer
        center={[hotel.latitude, hotel.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[hotel.latitude, hotel.longitude]}
        >
          <Popup>{hotel.title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default HotelDetails;
