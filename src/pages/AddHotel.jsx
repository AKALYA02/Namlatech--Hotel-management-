
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addHotel } from "../redux/hotelSlice";
import HotelForm from "../components/HotelForm";

function AddHotel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddHotel = (hotelData) => {
    dispatch(addHotel(hotelData));
    navigate("/");
  };

  return (
    <div className="form-page">
      <h1>Add New Hotel</h1>

      <HotelForm
        onSubmit={handleAddHotel}
        buttonText="Add Hotel"
      />
    </div>
  );
}

export default AddHotel;
