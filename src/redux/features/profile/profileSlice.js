import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";

const initialState = {
  profile: null,

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (id, thunkAPI) => {
    try {
      const getProfile = await profileService.getProfile();
      return getProfile.response;
    } catch (error) {
      console.error(error);
      let errorMessage = "An error occurred during get data";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const changePassword = createAsyncThunk(
  "profile/changePassword",
  async (data, thunkAPI) => {
    try {
      const updatePassword = await profileService.changePassword(data);
      console.log("updatePassword", updatePassword);
      return updatePassword.response;
    } catch (error) {
      console.error(error);
      let errorMessage = "An error occurred during update data";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile: (state) => {
      state.profile = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // getProfile
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.profile = action.payload.user;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message =
          action.error.message || "An error occurred during get data";
        state.profile = null;
      })

      // changePassword
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("action.error", action.error);
        state.message =
          action.error.message || "An error occurred during update data";
      });
  },
});

export const { resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
