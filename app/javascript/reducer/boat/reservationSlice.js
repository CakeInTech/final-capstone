import { createSlice } from "@reduxjs/toolkit";
import { dipslayReserveData } from "../../actions/reservation";

const initialState = {
  reserve: [],
  status: null
}

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: {
    [dipslayReserveData.pending]: (state) => {
      const isPending = state;
      isPending.state = 'Pending'
    },
    [dispatchEvent.fulfilled]: (state, action) => {
      const isFulfilled = state;
      isFulfilled.state = 'Fulfilled';
      isFulfilled.reservations = action.payload;
    },
    [dispatchEvent.fulfilled]: (state) => {
      const isRejected = state;
      isRejected.state = 'Rejected';
    }
  }
})
export default reservationSlice;