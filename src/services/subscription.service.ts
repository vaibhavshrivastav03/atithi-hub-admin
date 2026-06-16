import { api } from "../api/axios";

export const getSubscriptions =
  async () => {
    const response =
      await api.get(
        "/api/admin/subscriptions"
      );

    return response.data
      .subscriptions;
  };

export const getSubscription =
  async (id: number) => {
    const response =
      await api.get(
        `/api/admin/subscriptions/${id}`
      );

    return response.data;
  };

export const cancelSubscription =
  async (id: number) => {
    const response =
      await api.post(
        `/api/admin/subscriptions/${id}/cancel`
      );

    return response.data;
  };

export const getSubscriptionAnalytics =
  async () => {
    const response =
      await api.get(
        "/api/admin/subscriptions/analytics/overview"
      );

    return response.data
      .analytics;
  };