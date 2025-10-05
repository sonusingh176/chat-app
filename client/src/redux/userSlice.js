import { createSlice } from "@reduxjs/toolkit";
import { all } from "axios";

const userSlice =createSlice({

    name: 'user',
    initialState:{
        user: null, // initially koi user logged-in nahi
        allUsers:[],
    },
    reducers:{
        setUser:(state, action)=>{state.user=action.payload;}, // action.payload mein user ka data aayega
        setAllUsers:(state, action)=>{state.allUsers=action.payload;}, // action.payload mein all users ka data aayega
    }


});

export const {setUser,setAllUsers} = userSlice.actions;
export default userSlice.reducer;