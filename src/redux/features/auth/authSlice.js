import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { notification } from "antd";

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await authService.register(user);
      return response;
    } catch (error) {
      let errorMessage = "An error occurred during register";

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const { email, password } = error.response.data.message;

        if (email && email.length > 0 && password && password.length > 0) {
          errorMessage = `${email[0]} ${password[0]}`;
        } else if (email && email.length > 0) {
          errorMessage = email[0];
        } else if (password && password.length > 0) {
          errorMessage = password[0];
        } else {
          errorMessage = error.response.data.message;
        }
      }

      notification.error({
        message: "Error",
        description: errorMessage,
        placement: "topRight",
      });
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const loginResponse = await authService.login(user);

    return loginResponse.response;
  } catch (error) {
    console.log(error);
    let errorMessage = "An error occurred during login";

    if (error.response && error.response.data && error.response.data.message) {
      const { email, password } = error.response.data.message;

      if (email && email.length > 0 && password && password.length > 0) {
        errorMessage = `${email[0]} ${password[0]}`;
      } else if (email && email.length > 0) {
        errorMessage = email[0];
      } else if (password && password.length > 0) {
        errorMessage = password[0];
      } else {
        errorMessage = error.response.data.message;
      }
    }

    notification.error({
      message: "Error",
      description: errorMessage,
      placement: "topRight",
    });

    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoggedUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload.message;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      });
  },
});

export const { resetLoggedUser } = authSlice.actions;
export default authSlice.reducer;
