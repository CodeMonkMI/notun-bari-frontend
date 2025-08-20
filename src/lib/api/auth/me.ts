import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";

export const loginApiPath = "/auth/jwt/create/";

type MeResponse = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  balance: number;
};

export const authMePath = "/auth/users/me";

const me = async (): Promise<MeResponse | undefined> => {
  const data: AxiosResponse = await axios.get(authMePath);
  return data.data;
};

export const useMe = () =>
  useQuery({
    queryKey: [authMePath],
    queryFn: me,
  });
