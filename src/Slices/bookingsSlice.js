import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ArrayBookings from "../json/Bookings.json";


export const getAllBookings = createAsyncThunk(
    'bookings/getAllBooking',
    async () => {
        return new Promise((resolve) => 
        setTimeout(resolve(ArrayBookings), 0));
    }
)

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
      allBookings: [],
      booking: [],
    },
    reducers: {
        addBookings: (state, action) => {
            return void state.allBookings.push(action.payload);
        }
    },
    extraReducers: (builder) => {
       
        builder.addCase(getAllBookings.fulfilled, (state, action) => {
            return void (state.allBookings = action.payload);
        })
  }})
  
  export const { addBookings } = bookingsSlice.actions

  export const allBookingsArray = (state) => state.bookings.allBookings
  export const oneBooking = (state) => state.bookings.booking
  

  export default bookingsSlice.reducer