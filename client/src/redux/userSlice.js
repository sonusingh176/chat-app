import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({

    name: 'user',
    initialState:{
        user: null, // initially koi user logged-in nahi
      },
    reducers:{
        setUser:(state, action)=>{state.user=action.payload;}, // action.payload mein user ka data aayega
    }


});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;