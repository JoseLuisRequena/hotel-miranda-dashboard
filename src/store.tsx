import { configureStore } from "@reduxjs/toolkit";
import bookingsSliceReducer from './slices/bookingsSlice';

export const store = configureStore({
    reducer: {
      bookings: bookingsSliceReducer,
    },
    //middleware: getDefaultMiddleware =>  getDefaultMiddleware({ serializableCheck: false, })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch