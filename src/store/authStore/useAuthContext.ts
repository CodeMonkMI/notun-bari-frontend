import { createContext, useContext } from "react";
import type { Actions, AuthStore } from "./authStore";

export const defaultState: AuthStore & Actions = {
  user: null,
  isAuthenticated: false,
  isHydrated: false,
  clear: () => {},
  setUser: () => {},
  setHydrated: () => {},
};

export const AuthContext = createContext<AuthStore & Actions>(defaultState);
export const useAuthContext: () => AuthStore & Actions = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
};
