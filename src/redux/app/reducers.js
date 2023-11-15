import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";

const reducers = combineReducers({
  auth,
});

export default reducers;
