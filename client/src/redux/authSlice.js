import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetch: false,
            error: false
        },
        register: {
            isFetching: false,
            error: false,
            success: false
        },
    },
    reducers: {
        loginStart: (state) =>  {
            state.login.isFetch = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetch = false
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFailed: (state) => {
            state.login.isFetch = false
            state.login.error = true
        },

        registerStart: (state) =>  {
            state.register.isFetching = true
        },
        registerSuccess: (state) => {
            state.register.isFetching = false
            state.register.error = false
            state.register.success = true
        },
        registerFailed: (state) => {
            state.register.isFetching = false
            state.register.error = true
            state.register.success = false
        }, 
        logout: (state) => {
            state.login.currentUser = null;
        },
    }
})

export const {
    loginStart, loginSuccess, loginFailed,
    registerStart, registerSuccess, registerFailed, logout
} = authSlice.actions
export default authSlice.reducer