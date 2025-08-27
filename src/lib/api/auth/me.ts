import { authToken } from "@/lib/token/AuthToken";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";

export type MeResponse = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  date_joined: string;
  is_active: boolean;
  is_staff: boolean;
  last_login: string | null;
  balance: number;
};

export const authMePath = "/auth/users/me";

export const me = async (): Promise<MeResponse | undefined> => {
  const data: AxiosResponse = await axios.get(authMePath);
  return data.data;
};

export const useMe = () => {
  return useQuery({
    queryKey: [authMePath],
    queryFn: me,
    enabled: authToken.has,
  });
};

// update reset password request
export const activateAccountPath = "/auth/users/activation";
type ActivateAccountBody = {
  uid: string;
  token: string;
};
export const activateAccount = async (
  data: ActivateAccountBody
): Promise<unknown> => {
  return axios.post(`${activateAccountPath}/`, data);
};

export const useActivateAccount = () => {
  return useMutation<unknown, Error, ActivateAccountBody>({
    mutationFn: activateAccount,
  });
};
