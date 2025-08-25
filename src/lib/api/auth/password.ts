import { useMutation } from "@tanstack/react-query";
import { axios } from "../../axios";

export const setPasswordPath = "/auth/users/set_password";

type Data = {
  new_password: string;
  current_password: string;
};

export const update = async (data: Data): Promise<unknown> => {
  return axios.post(`${setPasswordPath}/`, data);
};

export const useSetPassword = () => {
  return useMutation<unknown, Error, Data>({
    mutationFn: update,
  });
};
