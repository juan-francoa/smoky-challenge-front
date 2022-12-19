import { combineReducers } from "@reduxjs/toolkit";
import vapersReducer from "./vapersReducer";
<<<<<<< HEAD

const mainReducer = combineReducers({
    vapersReducer,
=======
import eliquidsReducer from "./eliquidsReducer";
import userReducer from "./userReducer";

const mainReducer = combineReducers({
    vapersReducer,
    eliquidsReducer,
<<<<<<< HEAD
>>>>>>> d1d203a9331d6354bf1b61319335ecdcaee42417
=======
    userReducer

>>>>>>> 25a3b89b0f6f0835ee7ab0b089f1fcb9920bac1d
})

export default mainReducer