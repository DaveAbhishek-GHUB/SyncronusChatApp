import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (SignupData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('first_name', SignupData.first_name);
      formData.append('last_name', SignupData.last_name);
      formData.append('email', SignupData.email);
      formData.append('contact_number', SignupData.contact_number);
      formData.append('profile_image', SignupData.profile_image[0]); 
      formData.append('password', SignupData.password);

      const response = await fetch('http://localhost:3000/api/v1/user/signup', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false, 
    user: null,     
    error: null,    
  },
  reducers: {
    // not yet
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true; 
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer to be used in the store
export default userSlice.reducer;
