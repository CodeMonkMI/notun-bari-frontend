import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { axios } from "../../axios";

export type SingleUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  is_active: boolean;
  is_staff: boolean;
  last_login: string | null;
  date_joined: string;
};

export const usersPath = "/auth/users";

const users = async (): Promise<SingleUser[] | undefined> => {
  const data: AxiosResponse = await axios.get(usersPath);
  return data.data;
};

export const useUsers = () =>
  useQuery({
    queryKey: [usersPath],
    queryFn: users,
  });

const user = async (id: SingleUser["id"]): Promise<SingleUser | undefined> => {
  const data: AxiosResponse = await axios.get(`${usersPath}/${id}`);
  return data.data;
};

export const useUser = (id: SingleUser["id"]) =>
  useQuery({
    queryKey: [usersPath, id],
    queryFn: () => user(id),
  });
