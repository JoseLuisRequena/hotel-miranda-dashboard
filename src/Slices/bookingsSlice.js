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
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllBookings.fulfilled, (state, action) => {
            return void (state.allBookings = action.payload);
        })
  }})
  
  export const { addBookings } = bookingsSlice.actions

    //La siguiente función se llama thunk y nos permite realizar una lógica asíncrona. Eso
    //se puede enviar como una acción normal: `dispatch(incrementAsync(10))`. Este
    //llamará al thunk con la función `dispatch` como primer argumento. asíncrono
    //entonces se puede ejecutar el código y se pueden enviar otras acciones

    //La siguiente función se llama selector y nos permite seleccionar un valor de
    //el estado. Los selectores también se pueden definir en línea donde se usan en lugar de
    //en el archivo de corte. Por ejemplo: `useSelector((estado) => estado.contador.valor)`
  export const allBookingsArray = (state) => state.bookings.allBookings
  export const oneBooking = (state) => state.bookings.booking
  

  export default bookingsSlice.reducer