import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import event from "../features/event/eventSlice";

const reducers = combineReducers({
  auth,
  event,
});

export default reducers;
