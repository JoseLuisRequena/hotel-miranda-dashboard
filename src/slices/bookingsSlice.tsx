import { createSlice, createAsyncThunk, PayloadAction, createAction } from "@reduxjs/toolkit";
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

const getAllBookingsR = createAction<Array<IBooking>>('getAllBookingsR');
const getBookingR = createAction<IBooking>('getBookingR');
const deleteBookingR = createAction<Array<IBooking>>('deleteBookingR');


export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        addBookings:(state, action: PayloadAction<IBooking>) => {
            state.allBookings.push(action.payload)
        },
        editBooking: (state, action: PayloadAction<IBooking>) => {
            state.allBookings.map((booking: IBooking) =>
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
        .addCase(getAllBookingsR, (state, action) => {
            state.allBookings = action.payload;
          })
        .addCase(getBookingR, (state, action) => {
            state.booking = action.payload;
        })
        .addCase(deleteBookingR, (state, action) => {
            state.allBookings = action.payload;
        });

    }
})
  
export const { addBookings, editBooking, } = bookingsSlice.actions

export const allBookingsArray = (state: RootState) => state.bookings.allBookings
    
export const oneBooking = (state: RootState) => state.bookings.booking
//export const deleteOneBooking = (state) => state.bookings.allBookings


export default bookingsSlice.reducer