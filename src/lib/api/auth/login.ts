import { refreshToken } from "@/lib/token/RefreshToken";
import { useAuthContext } from "@/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "../../axios";
import { authToken } from "../../token/AuthToken";

export const loginApiPath = "/auth/jwt/create/";

type Login = {
  username: string;
  password: string;
};

type LoginResponse = {
  access: string;
  refresh: string;
};

const login = async (
  data: Login
): Promise<{ data: LoginResponse } | undefined> => {
  return axios.post(loginApiPath, data);
};

export const useLogin = () => {
  const { setUser } = useAuthContext();
  return useMutation<{ data: LoginResponse } | undefined, Error, Login>({
    mutationFn: login,
    onSuccess: async (res: { data: LoginResponse } | undefined) => {
      if (res?.data) {
        authToken.set(res.data.access);
        refreshToken.set(res.data.refresh);
        setUser(authToken.decode());
      }
    },
  });
};

export const logout = async (): Promise<void> => {
  authToken.remove();
  refreshToken.remove();
};

export const useLogout = () => {
  const qc = useQueryClient();
  const { clear } = useAuthContext();
  return useMutation<void, Error, void>({
    mutationFn: logout,
    onSuccess: () => {
      qc.clear();
      clear();
    },
  });
};
