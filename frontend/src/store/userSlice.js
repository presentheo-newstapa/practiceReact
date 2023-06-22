import { createSlice } from "@reduxjs/toolkit"
import { registeruser } from "./thunkFunctions";

const initialState = {
  userData: {
    id: '',
    email: '',
    name: '',
    role: 0,
    image: ''
  },
  isAuth: false,
  isLoading: false,
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registeruser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registeruser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registeruser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

  }
})

export default userSlice.reducer;