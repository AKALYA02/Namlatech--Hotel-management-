
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { updateHotel } from "../redux/hotelSlice";
import HotelForm from "../components/HotelForm";

function EditHotel() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hotel = useSelector((state) =>
    state.hotels.hotels.find(
      (item) => item.id === Number(id)
    )
  );

  const handleUpdateHotel = (hotelData) => {
    dispatch(
      updateHotel({
        ...hotelData,
        id: Number(id),
      })
    );

    navigate("/");
  };

  if (!hotel) {
    return <h2>Hotel not found!</h2>;
  }

  return (
    <div className="form-page">
      <h1>Edit Hotel</h1>

      <HotelForm
        initialData={hotel}
        onSubmit={handleUpdateHotel}
        buttonText="Update Hotel"
      />
    </div>
  );
}

export default EditHotel;
