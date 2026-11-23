
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteHotel } from "../redux/hotelSlice";
import HotelCard from "../components/HotelCard";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
import SuccessPopup from "../components/SuccessPopup";

function HotelList() {
  const hotels = useSelector((state) => state.hotels.hotels);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const hotelsPerPage = 4;

  const filteredHotels = hotels.filter((hotel) => {
  const matchesSearch = hotel.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesMin =
    minPrice === "" || hotel.price >= Number(minPrice);

  const matchesMax =
    maxPrice === "" || hotel.price <= Number(maxPrice);

  return matchesSearch && matchesMin && matchesMax;
});

const hasNoResults = filteredHotels.length === 0;

  const totalPages = Math.ceil(
    filteredHotels.length / hotelsPerPage
  );

  const startIndex = (currentPage - 1) * hotelsPerPage;

  const currentHotels = filteredHotels.slice(
    startIndex,
    startIndex + hotelsPerPage
  );

  const handleDelete = (id) => {
    dispatch(deleteHotel(id));
    setShowPopup(true);
  };

  return (
    <div className="hotel-list-page">
      <header className="page-header">
        <h1>JUST STAY</h1>

        <button onClick={() => navigate("/add")}>
          + Add Hotel
        </button>
      </header>

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <div className="hotel-grid">
        {hasNoResults ? (
  <p className="no-results">
    No hotels found.
  </p>
) : (
  currentHotels.map((hotel) => (
    <HotelCard
      key={hotel.id}
      hotel={hotel}
      onView={() => navigate(`/hotel/${hotel.id}`)}
      onEdit={() => navigate(`/edit/${hotel.id}`)}
      onDelete={() => handleDelete(hotel.id)}
    />
  ))
)}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {showPopup && (
        <SuccessPopup
          message="Hotel deleted successfully!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default HotelList;
