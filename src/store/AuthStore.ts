import { create } from "zustand";
import { UserType } from "../types/UserType";

const API_TOKEN_KEY = "api-token";

interface AuthState {
  user: string | null;
  password: string | null;
  isAuth: boolean;
  login: (params: { user: string; password: string }) => void;
  logout: () => void;
}

const getStoredToken = (): string | null => {
  try {
    return localStorage.getItem(API_TOKEN_KEY);
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return null;
  }
};

const setStoredToken = (token: string): void => {
  try {
    localStorage.setItem(API_TOKEN_KEY, token);
  } catch (error) {
    console.error("Error setting token in localStorage:", error);
  }
};

const removeStoredToken = (): void => {
  try {
    localStorage.removeItem(API_TOKEN_KEY);
  } catch (error) {
    console.error("Error removing token from localStorage:", error);
  }
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  password: getStoredToken(),
  isAuth: !!getStoredToken(),

  login: ({ user, password }: { user: string; password: string }) => {
    set({ user, password, isAuth: true });
    // setStoredToken(token);
  },

  logout: () => {
    set({ user: null, password: null, isAuth: false });
    removeStoredToken();
  },
}));

export default useAuthStore;
