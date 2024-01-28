import { createSlice } from "@reduxjs/toolkit";

const initialAuthStore={
    isAuthenticated:!!localStorage.getItem('token'),
    token:null
}

const authSlice=createSlice({
    name:'Authentication',
    initialState:initialAuthStore,
    reducers:{
        login(state,action){
            state.isAuthenticated=true
            state.token=action.payload.token
        }
    }
})

export const authReducer=authSlice.reducer
export const authActions=authSlice.actions