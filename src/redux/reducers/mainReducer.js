import { combineReducers } from "@reduxjs/toolkit";
import vapersReducer from "./vapersReducer";

const mainReducer = combineReducers({
    vapersReducer,
})

export default mainReducer