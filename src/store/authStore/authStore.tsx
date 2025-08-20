/* eslint-disable @typescript-eslint/no-explicit-any */
import { authToken } from "@/lib/token/AuthToken";
import React, { type PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, defaultState } from "./useAuthContext";

export type AuthStore = {
  user: any | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
};

export type Actions = {
  setUser(user: any | null): void;
  clear(): void;
  setHydrated: (value: boolean) => void;
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<any | null>(defaultState.user);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    defaultState.isAuthenticated
  );
  const [isHydrated, setIsHydrated] = useState<boolean>(
    defaultState.isHydrated
  );

  useEffect(() => {
    if (authToken.has) {
      const user = authToken.decode();
      setUser(user);
      setIsAuthenticated(true);
    }
    setIsHydrated(true);
  }, []);

  const setUserHandler = (user: any) => {
    setUser(user);
    setIsAuthenticated(true);
    setIsHydrated(true);
  };
  const clear = () => {
    setUser(null);
    setIsAuthenticated(false);
  };
  const setHydrated = (value: boolean) => {
    setIsHydrated(value);
  };

  return (
    <AuthContext.Provider
      value={{
        clear,
        setUser: setUserHandler,
        user,
        isAuthenticated,
        setHydrated,
        isHydrated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
