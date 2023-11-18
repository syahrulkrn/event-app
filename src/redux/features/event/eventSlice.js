import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
  event: null,
  eventDetail: null,

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getEvent = createAsyncThunk(
  "event/getEvent",
  async (params, thunkAPI) => {
    try {
      const getEvent = await eventService.getEvent({ params });
      return getEvent.response;
    } catch (error) {
      console.error(error);
      let errorMessage = "An error occurred during get data";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getEventDetail = createAsyncThunk(
  "event/getEventDetail",
  async (id, thunkAPI) => {
    try {
      const getEvent = await eventService.getEventDetail(id);
      return getEvent.response;
    } catch (error) {
      console.error(error);
      let errorMessage = "An error occurred during get data";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getHistoryDetail = createAsyncThunk(
  "event/getHistoryDetail",
  async (id, thunkAPI) => {
    try {
      const getEvent = await eventService.getHistoryDetail(id);
      return getEvent.response;
    } catch (error) {
      console.error(error);
      let errorMessage = "An error occurred during get data";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getHistories = createAsyncThunk(
  "event/getHistories",
  async (params, thunkAPI) => {
    try {
      const getEvent = await eventService.getHistories({ params });
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
      // event list
      .addCase(getEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.event = action.payload;
      })
      .addCase(getEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message =
          action.error.message || "An error occurred during get data";
        state.event = null;
      })

      //histories
      .addCase(getHistories.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getHistories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.event = action.payload;
      })

      .addCase(getHistories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message =
          action.error.message || "An error occurred during get data";
        state.event = null;
      })

      // event detail
      .addCase(getEventDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEventDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.eventDetail = action.payload;
      })
      .addCase(getEventDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message =
          action.error.message || "An error occurred during get data";
        state.eventDetail = null;
      })

      // history detail
      .addCase(getHistoryDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHistoryDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.eventDetail = action.payload;
      })
      .addCase(getHistoryDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message =
          action.error.message || "An error occurred during get data";
        state.eventDetail = null;
      });
  },
});

export const { resetEvent } = eventSlice.actions;
export default eventSlice.reducer;
