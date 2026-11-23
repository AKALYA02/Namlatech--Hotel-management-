
import { createSlice } from "@reduxjs/toolkit";
import initialHotels from "../data/hotels";

const hotelSlice = createSlice({
  name: "hotels",

  initialState: {
    hotels: initialHotels,
  },

  reducers: {
    // Add a new hotel
    addHotel: (state, action) => {
      state.hotels.push({
        ...action.payload,
        id: Date.now(),
      });
    },

    // Update an existing hotel
    updateHotel: (state, action) => {
      const index = state.hotels.findIndex(
        (hotel) => hotel.id === action.payload.id
      );

      if (index !== -1) {
        state.hotels[index] = action.payload;
      }
    },

    // Delete a hotel
    deleteHotel: (state, action) => {
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      );
    },
  },
});

export const { addHotel, updateHotel, deleteHotel } =
  hotelSlice.actions;

export default hotelSlice.reducer;