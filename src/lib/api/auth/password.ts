import { useMutation } from "@tanstack/react-query";
import { axios } from "../../axios";

export const setPasswordPath = "/auth/users/set_password";

type Data = {
  new_password: string;
  current_password: string;
};

// set password for authenticated user
export const set_password = async (data: Data): Promise<unknown> => {
  return axios.post(`${setPasswordPath}/`, data);
};

export const useSetPassword = () => {
  return useMutation<unknown, Error, Data>({
    mutationFn: set_password,
  });
};

// send reset password request
export const setResetPasswordPath = "/auth/users/reset_password";

export const reset_password = async (email: string): Promise<unknown> => {
  return axios.post(`${setResetPasswordPath}/`, { email });
};

export const useResetPassword = () => {
  return useMutation<unknown, Error, string>({
    mutationFn: reset_password,
  });
};

// update reset password request
export const setResetPasswordConfirmPath = "/auth/users/reset_password_confirm";
type ResetPasswordBody = {
  uid: string;
  token: string;
  new_password: string;
};
export const reset_password_confirm = async (
  data: ResetPasswordBody
): Promise<unknown> => {
  return axios.post(`${setResetPasswordConfirmPath}/`, data);
};

export const useResetPasswordConfirm = () => {
  return useMutation<unknown, Error, ResetPasswordBody>({
    mutationFn: reset_password_confirm,
  });
};
