import { api } from "../api/axios";

export const getProperties = async () => {
  const response = await api.get(
    "/api/v1/admin/properties"
  );

  return response.data.properties;
};

export const getPropertyById = async (
  id: number
) => {
  const response = await api.get(
    `/api/v1/admin/properties/${id}`
  );

  return response.data.property;
};

export const activateProperty =
  async (id: number) => {
    const response = await api.post(
      `/api/v1/admin/properties/${id}/activate`
    );

    return response.data;
  };

export const deactivateProperty =
  async (id: number) => {
    const response = await api.post(
      `/api/v1/admin/properties/${id}/deactivate`
    );

    return response.data;
  };

export const deleteProperty =
  async (id: number) => {
    const response = await api.delete(
      `/api/v1/admin/properties/${id}`
    );

    return response.data;
  };

export const updateProperty = async (
  id: number,
  payload: {
    name: string;
    city: string;
    address: string;
    status: string;
  }
) => {
  const response = await api.put(
    `/api/v1/admin/properties/${id}`,
    payload
  );

  return response.data;
};