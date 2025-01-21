import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '@/types/user';

const initialState: UserState = {
  user: null,
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User }>) => {
      const { user } = action.payload;

      state.user = user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer


