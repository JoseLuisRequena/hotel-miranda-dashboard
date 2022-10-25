import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from './slices/bookingsSlice';
import contactsReducer from './slices/contactsSlice';
import roomsReducer from './slices/roomsSlice';
import usersReducer from './slices/usersSlice';


export const store = configureStore({
    reducer: {
      bookings: bookingsReducer,
      contacts: contactsReducer,
      rooms: roomsReducer,
      users: usersReducer,
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware({ serializableCheck: false, })
});