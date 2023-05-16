import React, { useState } from "react";
import { addReservation } from "../Redux/Reservations/addResevation";
import { useSelector } from "react-redux";

const Reserve = () => {
  const [city, setCity] = useState("");
  const [pick_up, setPick_up] = useState("");
  const [return_date, setReturn_date] = useState("");
  const { boats } = useSelector((state) => state.boats);
  const { user_id } = useSelector((state) => state.users);
  const { authorization } = useSelector((state) => state.authorization);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() && pick_up.trim() && return_date.trim()) {
      dispatch(addReservation(user_id, {
        city,
        pick_up,
        return_date,
        boat_id: boats[0].id,
        user_id: user_id,
      }));
      setCity('');
      setPick_up('');
      setReturn_date('');
    } else {
      alert('Enter details');
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5 border border-primary">
        Book a Test Ride
      </h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group m-4">
          <label for="city">Enter city</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="city"
            name="city"
            value={city}
            onChange = {(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group m-4">
          <label for="pick-up">Pick-Up Date</label>
          <input
            type="date"
            className="form-control"
            id="pick-up"
            placeholder="pick-up date"
            name="pick_up"
            value={pick_up}
            onChange = {(e) => setPick_up(e.target.value)}
          />
        </div>
        <div className="form-group m-4">
          <label for="return-date">Return Date</label>
          <input
            type="date"
            className="form-control"
            id="return-date"
            placeholder="return-date"
            name="return_date"
            value={return_date}
            onChange = {(e) => setReturn_date(e.target.value)}
          />
        </div>
        {authorization.includes('create') ? (
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        ) : (
          <button type="button" disabled>Create Reservation</button>
        )}
      </form>
    </div>
  );
};

export default Reserve;
