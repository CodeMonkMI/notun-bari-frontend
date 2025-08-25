import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "../../axios";
import { authMePath, type MeResponse as Response } from "./me";

export const authUsersUpdatePath = "/auth/users/me";

type Data = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
};

export const update = async (data: Data): Promise<{ data: Response }> => {
  return axios.patch(`${authUsersUpdatePath}/`, data);
};

export const useAuthUserUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation<{ data: Response }, Error, Data>({
    mutationFn: update,
    onSuccess: (response) => {
      if (response?.data) {
        queryClient.setQueryData([authMePath], response.data);
      }
    },
  });
};
