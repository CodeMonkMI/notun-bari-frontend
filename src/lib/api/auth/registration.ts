import { useMutation } from "@tanstack/react-query";
import { axios } from "../../axios";

export const registrationApiPath = "/auth/users/";

type Registration = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
};

type RegistrationResponse = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
};

export const login = async (
  data: Registration
): Promise<{ data: RegistrationResponse } | undefined> => {
  return axios.post(registrationApiPath, data);
};

export const useRegister = () =>
  useMutation<{ data: RegistrationResponse } | undefined, Error, Registration>({
    mutationFn: login,
    onSuccess: (res) => {
      console.log(res?.data);
    },
  });
