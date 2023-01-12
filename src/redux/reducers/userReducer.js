import { createReducer } from "@reduxjs/toolkit";
import userAction from '../actions/userAction'

const { login, reEntry, signOff, updateMyProfile, doUser} = userAction
const initialState = {
    user: [],
    name: "",
    photo: "",
    email: "",
    logged: false,
    token: "",
    role: "",
    id: "",
    myUser: {}
}


const userReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                console.log(action.payload.response);
                const { success, response } = action.payload
                if (success) {
                    let { user, token } = response//este es el token que viene del back
                    localStorage.setItem("token", JSON.stringify({ token: { user: token } }))
                    let newState = {
                        ...state,
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        photo: user.photo,
                        role: user.role,
                        logged: true,
                        token: token,
                    }
                    return newState
                } else {
                    let newState = {
                        ...state,
                        message: response
                    }
                    return newState
                }
            })
            .addCase(reEntry.fulfilled, (state, action) => {
                const { success, response, token } = action.payload
                if (success) {
                    let {user} = response
                    let newState = {
                        ...state,
                        email: user.email,
                        name: user.name,
                        photo: user.photo,
                        role: user.role,
                        logged: true,
                        token: token,
                        myUser: user,
                        id: user.id
                    }
                    return newState
                } else {
                    let newState = {
                        ...state,
                        message: response
                    }
                    return newState
                }
            })
            .addCase(signOff.fulfilled, (state, action) => {
                const { success, response } = action.payload
                if (success) {
                    localStorage.removeItem('token')
                    let newState = {
                        ...state,
                        name: '',
                        photo: '',
                        logged: false,
                        token: '',
                        role: ''
                    }
                    return newState
                } else {
                    let newState = {
                        ...state,
                        mensaje: response
                    }
                    return newState
                }
            })
            .addCase(updateMyProfile.fulfilled, (state, action) => {
                console.log(action.payload)
                return { ...state, myUser: action.payload }
            })
    
            .addCase(doUser.fulfilled, (state, action) => {
                return {
                    ...state,
                    myUser: action.payload.response,
                };
            })

    })
export default userReducer