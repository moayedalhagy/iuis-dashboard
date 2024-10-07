import { create } from "zustand";
// import { UserType } from "../types/UserType";

const API_TOKEN_KEY = "api-token";

interface AuthState {
  user: object | null;

  isAuthenticated: boolean;
  setUser: (user: any) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem(API_TOKEN_KEY),
  isAuthenticated: !!localStorage.getItem(API_TOKEN_KEY),
  setUser: (user: any) => {
    set({ user, isAuthenticated: true });

    localStorage.setItem(API_TOKEN_KEY, user.token);
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });

    localStorage.removeItem(API_TOKEN_KEY);
  },
}));

export default useAuthStore;
