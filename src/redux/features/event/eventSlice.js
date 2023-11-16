import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";
// import { notification } from "antd";

const initialState = {
  event: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Login user
export const getEvent = createAsyncThunk(
  "event/getEvent",
  async (params, thunkAPI) => {
    try {
      const getEvent = await eventService.getEvent(params);

      return getEvent.response;
    } catch (error) {
      console.log(error);
      let errorMessage = "An error occurred during get data";

      // if (error.response && error.response.data && error.response.data.message) {
      //   const { email, password } = error.response.data.message;

      //   if (email && email.length > 0 && password && password.length > 0) {
      //     errorMessage = `${email[0]} ${password[0]}`;
      //   } else if (email && email.length > 0) {
      //     errorMessage = email[0];
      //   } else if (password && password.length > 0) {
      //     errorMessage = password[0];
      //   } else {
      //     errorMessage = error.response.data.message;
      //   }
      // }

      // notification.error({
      //   message: "Error",
      //   description: errorMessage,
      //   placement: "topRight",
      // });

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    resetEvent: (state) => {
      state.event = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.event = action.payload;
      })
      .addCase(getEvent.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload.message;
        state.event = null;
      });
  },
});

export const { resetEvent } = eventSlice.actions;
export default eventSlice.reducer;
