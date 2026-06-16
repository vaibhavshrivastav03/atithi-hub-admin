import { api } from "../api/axios";

export const getCoupons = async () => {
  const response = await api.get(
    "/api/admin/coupons"
  );

  return response.data.data;
};

export const createCoupon = async (
  payload: any
) => {
  const response = await api.post(
    "/api/admin/coupons",
    payload
  );

  return response.data;
};

export const updateCoupon = async (
  id: number,
  payload: any
) => {
  const response = await api.put(
    `/api/admin/coupons/${id}`,
    payload
  );

  return response.data;
};

export const deleteCoupon = async (
  id: number
) => {
  const response = await api.delete(
    `/api/admin/coupons/${id}`
  );

  return response.data;
};

export const activateCoupon =
  async (id: number) => {
    const response = await api.post(
      `/api/admin/coupons/${id}/activate`
    );

    return response.data;
  };

export const deactivateCoupon =
  async (id: number) => {
    const response = await api.post(
      `/api/admin/coupons/${id}/deactivate`
    );

    return response.data;
  };

export const getCouponAnalytics =
  async (id: number) => {
    const response = await api.get(
      `/api/admin/coupons/${id}/analytics`
    );

    return response.data.data;
  };