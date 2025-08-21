import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "../../axios";
import { usersPath } from "./users";

type UpdateUser = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
};

type UpdateUserResponse = {
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

export const update = async (
  id: string,
  data: UpdateUser
): Promise<{ data: UpdateUserResponse } | undefined> => {
  return axios.patch(`${usersPath}/${id}/`, data);
};

export const useUserUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation<
    { data: UpdateUserResponse } | undefined,
    Error,
    { id: string; data: UpdateUser }
  >({
    mutationFn: ({ id, data }) => update(id, data),
    onSuccess: (response, variables) => {
      if (response?.data) {
        queryClient.setQueryData([usersPath, variables.id], response.data);
      }
    },
  });
};
