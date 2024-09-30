import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { addHotel } from "../../store/hotelSlice";
import { db } from "../../firebase/firebaseConfig";

const HotelForm = () => {
  const [hotel, setHotel] = useState({ name: "", location: "", price: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "hotels"), hotel);
      dispatch(addHotel({ id: docRef.id, ...hotel }));
      setHotel({ name: "", location: "", price: "" });
    } catch (error) {
      console.log("Error adding hotel: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={hotel.name}
        onChange={handleChange}
        placeholder="Hotel Name"
      />
      <input
        type="text"
        name="location"
        value={hotel.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="number"
        name="price"
        value={hotel.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default HotelForm;
