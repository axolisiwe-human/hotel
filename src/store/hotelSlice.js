import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
  },
  reducers: {
    setHotels(state, action) {
      state.hotels = action.payload;
    },
    addHotel(state, action) {
      state.hotels.push(action.payload);
    },
  },
});

export const { setHotels, addHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
