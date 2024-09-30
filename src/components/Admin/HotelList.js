import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { setHotels } from "../../store/hotelSlice";
import { db } from "../../firebase/firebaseConfig";

const HotelList = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);

  useEffect(() => {
    const fetchHotels = async () => {
      const hotelSnapshot = await getDocs(collection(db, "hotels"));
      const hotelList = hotelSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setHotels(hotelList));
    };

    fetchHotels();
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Hotel List</h2>
      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img
              src="https://source.unsplash.com/400x200/?hotel"
              alt="hotel"
              className="hotel-img"
            />
            <h3>{hotel.name}</h3>
            <p>Location: {hotel.location}</p>
            <p>Price: ${hotel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
