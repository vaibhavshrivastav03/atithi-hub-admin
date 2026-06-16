import { api } from "../api/axios";

export const getPlans = async () => {
  const response = await api.get(
    "/api/admin/plans"
  );

  return response.data.data;
};

export const createPlan = async (
  payload: any
) => {
  const response = await api.post(
    "/api/admin/plans",
    payload
  );

  return response.data;
};

export const updatePlan = async (
  id: number,
  payload: any
) => {
  const response = await api.put(
    `/api/admin/plans/${id}`,
    payload
  );

  return response.data;
};

export const deletePlan = async (
  id: number
) => {
  const response = await api.delete(
    `/api/admin/plans/${id}`
  );

  return response.data;
};

export const activatePlan = async (
  id: number
) => {
  const response = await api.post(
    `/api/admin/plans/${id}/activate`
  );

  return response.data;
};

export const deactivatePlan = async (
  id: number
) => {
  const response = await api.post(
    `/api/admin/plans/${id}/deactivate`
  );

  return response.data;
};