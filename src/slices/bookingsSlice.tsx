import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import arrayBookingsJson from "../json/Bookings.json";
import type { RootState } from '../store'

const arrayBookings: any = arrayBookingsJson

interface IBooking {
    [key: string]: any
}
function delay(data: any, time: number) {
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
    async (id: number) => {
        return delay(arrayBookings.filter((item: IBooking) => item.id === id), 0);
    }
);

export const deleteBooking = createAsyncThunk(
    'bookings/deleteBooking',
    async (id: number) => {
        return delay(arrayBookings.filter((item: IBooking) => item.id !== id), 3000);   
    }
);

interface IBookingsState {
    allBookings: IBooking[],
    booking: IBooking,
};
const initialState: IBookingsState = {
    allBookings: [],
    booking: {},
};
// Define the initial state using that type

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        //addBookings: (state, action: PayloadAction<IBooking>) => {
        //    return void state.allBookings.push(action.payload);
        //},
        //editBooking: (state, action: PayloadAction<IBooking>) => {
        //    return state.allBookings.map((booking: IBooking) =>
        //      booking.id === action.payload.id ? action.payload : booking
        //    );
        //},
        //deleteBooking: (state, action) => {
        //    console.log(state)
        //    return state.filter((booking) => booking.id !== action.payload.id);
        //},
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllBookings.fulfilled, (state, action: PayloadAction<Array<IBooking>>) => {
            state.allBookings = action.payload;
        })
        .addCase(getBooking.fulfilled, (state, action: PayloadAction<IBooking>) => {
            return void (state.booking = action.payload);
        })
        .addCase(deleteBooking.fulfilled, (state, action: PayloadAction<Array<IBooking>>) => {
            return void (state.allBookings = action.payload);
        });

    }
})
  
export const { addBookings, editBooking, } = bookingsSlice.actions

export const allBookingsArray = (state: RootState) => state.bookings.allBookings
    
export const oneBooking = (state: RootState) => state.bookings.booking
//export const deleteOneBooking = (state) => state.bookings.allBookings


export default bookingsSlice.reducer