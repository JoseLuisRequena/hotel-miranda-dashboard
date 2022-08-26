import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ArrayBookings from "../json/Bookings.json";


export const getAllBookings = createAsyncThunk(
    'bookings/getAllBooking',
    async () => {
        return new Promise((resolve) => 
            setTimeout(resolve(ArrayBookings), 0)
        );
    }
)

export const getBooking = createAsyncThunk(
    'bookings/booking',
    async (id) => {
        return new Promise( resolve => 
            setTimeout(resolve(ArrayBookings.filter(item => item.id === id)), 
            0)
        )
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
        },
        editBooking: (state, action) => {
            return state.map((booking) =>
              booking.id === action.payload.id ? action.payload : booking
            );
        },
        deleteBooking: (state, action) => {
            console.log(state)
            return state.filter((booking) => booking.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllBookings.fulfilled, (state, action) => {
            return void (state.allBookings = action.payload);
        })
        .addCase(getBooking.fulfilled, (state, action) => {
            console.log(action.payload)
            //return void (state.booking = action.payload);
        });
  }})
  
  export const { addBookings, editBooking, deleteBooking } = bookingsSlice.actions

  export const allBookingsArray = (state) => state.bookings.allBookings
  export const oneBooking = (state) => state.bookings.booking
  

  export default bookingsSlice.reducer