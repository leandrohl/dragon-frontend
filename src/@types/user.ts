export interface User {
  email: string;
  password: string;
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}
