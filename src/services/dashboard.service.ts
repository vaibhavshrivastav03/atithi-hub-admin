import { api } from "../api/axios";

export const getDashboard = async () => {
  const response = await api.get(
    "/api/v1/admin/dashboard"
  );

   return response.data.stats;
};