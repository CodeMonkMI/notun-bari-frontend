/* eslint-disable @typescript-eslint/no-explicit-any */
import { axios } from "@/lib/axios";
import { authToken } from "@/lib/token/AuthToken";
import { refreshToken } from "@/lib/token/RefreshToken";
import React, {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
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

  const refreshTheAccessToken = async (
    data: string
  ): Promise<{ access: string } | undefined> => {
    const res = await axios.post("/auth/jwt/refresh", { refresh: data });
    return res.data;
  };

  const handleTokenExpiration = useCallback(async () => {
    try {
      if (!authToken.has) {
        setIsHydrated(true);
        return;
      }
      if (authToken.isTokenValid()) {
        setUserHandler(authToken.decode());
        return;
      }

      if (!refreshToken.isValid()) {
        refreshToken.remove();
        authToken.remove();
        setIsHydrated(true);
        setIsAuthenticated(false);
        return;
      }

      const data = await refreshTheAccessToken(refreshToken.get());

      if (data) authToken.set(data?.access);
      const newUser = authToken.decode(data?.access);

      setUserHandler(newUser);
    } catch (error) {
      console.log("e");
      console.log(error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    handleTokenExpiration();
  }, [handleTokenExpiration]);

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
