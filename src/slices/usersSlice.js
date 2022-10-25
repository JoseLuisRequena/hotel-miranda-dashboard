import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import arrayUsers from "../json/Users.json";

function delay(data, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
}
export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async () => {
        return delay(arrayUsers, 10);
    }
);

export const getUser = createAsyncThunk(
    'users/Users',
    async (id) => {
        return delay(arrayUsers.filter(item => item.id === id), 0);
    }
);

export const deleteUser = createAsyncThunk(
    'users/deleteUsers',
    async (id) => {
        return delay(arrayUsers.filter(item => item.id !== id), 3000);
    }
);


export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        allUsers: [],
        user: [],
    },
    reducers: {
        addUsers: (state, action) => {
            return void state.allUsers.push(action.payload);
        },
        editUser: (state, action) => {
            return state.map((user) =>
              user.id === action.payload.id ? action.payload : user
            );
        },
        //deleteUser: (state, action) => {
        //    console.log(state)
        //    return state.filter((user) => user.id !== action.payload.id);
        //},
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.fulfilled, (state, action) => {
            return void (state.allUsers = action.payload);
        })
        .addCase(getUser.fulfilled, (state, action) => {
           
            return void (state.User = action.payload);
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            console.log(action.payload)
            return void (state.allUsers = action.payload);
        });

    }
})

export const { addUsers, editUser, } = usersSlice.actions

export const allUsersArray = (state) => state.users.allUsers
    
export const oneUser = (state) => state.users.user
//export const deleteOneUser = (state) => state.users.allUsers


export default usersSlice.reducer