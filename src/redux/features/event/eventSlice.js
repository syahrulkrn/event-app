// eventSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
  event: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getEvent = createAsyncThunk(
  "event/getEvent",
  async (params, thunkAPI) => {
    try {
      const getEvent = await eventService.getEvent(params);
      return getEvent.response;
    } catch (error) {
      console.error(error);
      let errorMessage = "An error occurred during get data";
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
        state.event = action.payload.data;
      })
      .addCase(getEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message =
          action.error.message || "An error occurred during get data";
        state.event = null;
      });
  },
});

export const { resetEvent } = eventSlice.actions;
export default eventSlice.reducer;
