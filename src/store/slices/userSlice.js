import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const apiKey = import.meta.env.VITE_APP_API_BASE_URL;

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

      console.log(apiKey);

      const response = await fetch(`${apiKey}/user/signup`, {
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

export const loginUser = createAsyncThunk(`${apiKey}user/loginUser`,
  async (LoginData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('email', LoginData.email);
      formData.append('password', LoginData.password);

      const response = await fetch("/user/login", {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

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
});

export default userSlice.reducer;
