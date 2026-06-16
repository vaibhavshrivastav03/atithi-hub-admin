import { useMutation } from "@tanstack/react-query";

import { loginAdmin } from "../services/auth.service";

export const useLogin = () => {
  return useMutation({
    mutationFn: ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) =>
      loginAdmin(email, password),
  });
};