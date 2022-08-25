import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from './Slices/bookingsSlice';


export const store = configureStore({
    reducer: {
      bookings: bookingsReducer,
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware({ serializableCheck: false, })
});