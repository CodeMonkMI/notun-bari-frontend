import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "../../axios";
import { usersPath } from "./users";

type Response = unknown;

export const remove = async (
  id: string,
  current_password: string
): Promise<{ data: Response } | undefined> => {
  return axios.delete(`${usersPath}/${id}/`, { data: { current_password } });
};

export const useUserRemove = () => {
  const queryClient = useQueryClient();
  return useMutation<
    { data: Response } | undefined,
    Error,
    { id: string; current_password: string }
  >({
    mutationFn: ({ id, current_password }) => remove(id, current_password),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [usersPath, variables.id] });
    },
  });
};
