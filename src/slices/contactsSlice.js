import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import arrayContacts from "../json/Contacts.json";

function delay(data, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
}
export const getAllContacts = createAsyncThunk(
    'contacts/getAllContacts',
    async () => {
        return delay(arrayContacts, 10);
    }
);

export const getContact = createAsyncThunk(
    'contacts/Contacts',
    async (id) => {
        return delay(arrayContacts.filter(item => item.id === id), 0);
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (id) => {
        return delay(arrayContacts.filter(item => item.id !== id), 3000);
    }
);


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        allContacts: [],
        contact: [],
    },
    reducers: {
        addContacts: (state, action) => {
            return void state.allContacts.push(action.payload);
        },
        editContact: (state, action) => {
            return state.map((contact) =>
              contact.id === action.payload.id ? action.payload : contact
            );
        },
        //deleteContact: (state, action) => {
        //    console.log(state)
        //    return state.filter((contact) => contact.id !== action.payload.id);
        //},
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllContacts.fulfilled, (state, action) => {
            return void (state.allContacts = action.payload);
        })
        .addCase(getContact.fulfilled, (state, action) => {
           
            return void (state.Contact = action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            console.log(action.payload)
            return void (state.allContacts = action.payload);
        });

    }
})
  
export const { addContacts, editContact, } = contactsSlice.actions

export const allContactsArray = (state) => state.contacts.allContacts
    
export const oneContact = (state) => state.contacts.contact
//export const deleteOneContact = (state) => state.contacts.allContacts


export default contactsSlice.reducer