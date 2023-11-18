import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import event from "../features/event/eventSlice";
import profile from "../features/profile/profileSlice";

const reducers = combineReducers({
  auth,
  event,
  profile,
});

export default reducers;
