import { useQuery } from "@tanstack/react-query";

import {
  getSubscriptions,
  getSubscriptionAnalytics,
} from "../services/subscription.service";

export const useSubscriptions =
  () =>
    useQuery({
      queryKey: [
        "subscriptions",
      ],
      queryFn:
        getSubscriptions,
    });

export const useSubscriptionAnalytics =
  () =>
    useQuery({
      queryKey: [
        "subscription-analytics",
      ],
      queryFn:
        getSubscriptionAnalytics,
    });