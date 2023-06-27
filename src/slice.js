import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        submitData : (state,action)=>{
            state.user = action.payload
        },
        goBack: (state) => {
            state.user = null
        },
    },
});

export const {submitData , goBack} = slice.actions

export const submitUser = (state) => state.user.user

export default slice.reducer