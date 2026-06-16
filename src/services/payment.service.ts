import { api } from "../api/axios";

export const getPayments = async () => {
  const response = await api.get(
    "/api/admin/payments"
  );

  return response.data.payments;
};

export const getPayment = async (
  id: number
) => {
  const response = await api.get(
    `/api/admin/payments/${id}`
  );

  return response.data.payment;
};

export const getPaymentAnalytics =
  async () => {
    const response = await api.get(
      "/api/admin/payments/analytics"
    );

    return response.data.analytics;
  };

export const getPlanRevenue =
  async () => {
    const response = await api.get(
      "/api/admin/payments/plan-revenue"
    );

    return response.data.plan_revenue;
  };

export const getOwnerPayments =
  async (ownerId: number) => {
    const response = await api.get(
      `/api/admin/payments/owner/${ownerId}`
    );

    return response.data.payments;
  };