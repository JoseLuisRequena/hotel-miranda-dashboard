import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import arrayBookings from "../json/Bookings.json";

function delay(data, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
}
export const getAllBookings = createAsyncThunk(
    'bookings/getAllBooking',
    async () => {
        return delay(arrayBookings, 10);
    }
);

export const getBooking = createAsyncThunk(
    'bookings/booking',
    async (id) => {
        return delay(arrayBookings.filter(item => item.id === id), 0);
    }
);

export const deleteBooking = createAsyncThunk(
    'bookings/deleteBooking',
    async (id) => {
        return delay(arrayBookings.filter(item => item.id !== id), 3000);
    }
);

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
        //deleteBooking: (state, action) => {
        //    console.log(state)
        //    return state.filter((booking) => booking.id !== action.payload.id);
        //},
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllBookings.fulfilled, (state, action) => {
            return void (state.allBookings = action.payload);
        })
        .addCase(getBooking.fulfilled, (state, action) => {
           
            return void (state.booking = action.payload);
        })
        .addCase(deleteBooking.fulfilled, (state, action) => {
            console.log(action.payload)
            return void (state.allBookings = action.payload);
        });

    }
})
  
export const { addBookings, editBooking, } = bookingsSlice.actions

export const allBookingsArray = (state) => state.bookings.allBookings
    
export const oneBooking = (state) => state.bookings.booking
//export const deleteOneBooking = (state) => state.bookings.allBookings


export default bookingsSlice.reducer