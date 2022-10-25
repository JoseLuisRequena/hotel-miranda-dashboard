import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import arrayRooms from "../json/Rooms.json";

function delay(data, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
}
export const getAllRooms = createAsyncThunk(
    'rooms/getAllRooms',
    async () => {
        return delay(arrayRooms, 10);
    }
);

export const getRoom = createAsyncThunk(
    'rooms/Rooms',
    async (id) => {
        return delay(arrayRooms.filter(item => item.id === id), 0);
    }
);

export const deleteRoom = createAsyncThunk(
    'rooms/deleteRooms',
    async (id) => {
        return delay(arrayRooms.filter(item => item.room !== id), 3000);
    }
);


export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        allRooms: [],
        room: [],
    },
    reducers: {
        addRooms: (state, action) => {
            return void state.allRooms.push(action.payload);
        },
        editRoom: (state, action) => {
            return state.map((room) =>
              room.id === action.payload.id ? action.payload : room
            );
        },
        //deleteRoom: (state, action) => {
        //    console.log(state)
        //    return state.filter((room) => room.id !== action.payload.id);
        //},
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllRooms.fulfilled, (state, action) => {
            return void (state.allRooms = action.payload);
        })
        .addCase(getRoom.fulfilled, (state, action) => {
           
            return void (state.Room = action.payload);
        })
        .addCase(deleteRoom.fulfilled, (state, action) => {
            console.log(action.payload)
            return void (state.allRooms = action.payload);
        });

    }
})
  
export const { addRooms, editRoom, } = roomsSlice.actions

export const allRoomsArray = (state) => state.rooms.allRooms
    
export const oneRoom = (state) => state.rooms.room
//export const deleteOneRoom = (state) => state.rooms.allRooms


export default roomsSlice.reducer