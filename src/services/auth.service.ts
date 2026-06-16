import { api } from "../api/axios";

export const loginAdmin = async (
  email: string,
  password: string
) => {
  const response = await api.post(
    "api/v1/admin-auth/login",
    {
      email,
      password,
    }
  );

  const data = response.data;

  localStorage.setItem(
    "admin_token",
    data.token
  );

  return data;
};