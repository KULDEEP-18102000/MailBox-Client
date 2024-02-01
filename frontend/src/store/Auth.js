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
            localStorage.setItem('token',action.payload.token)
            state.isAuthenticated=true
            state.token=action.payload.token
        },
        logOut(state,action){
            localStorage.clear()
            state.isAuthenticated=false
            state.token=null
        }
    }
})

export const authReducer=authSlice.reducer
export const authActions=authSlice.actions