import { combineReducers } from "@reduxjs/toolkit";
import vapersReducer from "./vapersReducer";
<<<<<<< HEAD

const mainReducer = combineReducers({
    vapersReducer,
=======
import eliquidsReducer from "./eliquidsReducer";

const mainReducer = combineReducers({
    vapersReducer,
    eliquidsReducer,
>>>>>>> d1d203a9331d6354bf1b61319335ecdcaee42417
})

export default mainReducer