import axios from "axios"
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice"


export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post("http://localhost:5050/api/auth/register", user)
        dispatch(registerSuccess())
        navigate("/login")
    } catch (error) {
        dispatch(registerFailed())
    }
}

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        await axios.post("http://localhost:5050/api/auth/login", user)
        dispatch(loginSuccess())
        navigate("/")
    } catch (error) {
        dispatch(loginFailed())
    }
}