import { api } from "../api/axios";

export const getOwners = async () => {
  const response = await api.get(
    "/api/v1/admin/owners"
  );

  return response.data.owners;
};

export const getOwnerById = async (
  id: number
) => {
  const response = await api.get(
    `/api/v1/admin/owners/${id}`
  );

  return response.data;
};

export const suspendOwner = async (
  id: number
) => {
  const response = await api.post(
    `/api/v1/admin/owners/${id}/suspend`
  );

  return response.data;
};

export const activateOwner = async (
  id: number
) => {
  const response = await api.post(
    `/api/v1/admin/owners/${id}/activate`
  );

  return response.data;
};
