import { refreshToken } from "@/lib/token/RefreshToken";
import { useMutation } from "@tanstack/react-query";
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

export const useLogin = () =>
  useMutation<{ data: LoginResponse } | undefined, Error, Login>({
    mutationFn: login,
    onSuccess: (res: { data: LoginResponse } | undefined) => {
      if (res?.data) {
        authToken.set(res.data.access);
        refreshToken.set(res.data.refresh);
      }
    },
  });
