import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '@/types/user';

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
  isAuthenticated: !!localStorage.getItem("user")
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User }>) => {
      const { user } = action.payload;

      localStorage.setItem("user", JSON.stringify(user));

      state.user = user;
      state.isAuthenticated = true;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer


