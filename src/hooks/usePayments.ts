import { useQuery } from "@tanstack/react-query";

import {
  getPayments,
  getPaymentAnalytics,
  getPlanRevenue,
} from "../services/payment.service";

export const usePayments =
  () =>
    useQuery({
      queryKey: ["payments"],
      queryFn: getPayments,
    });

export const usePaymentAnalytics =
  () =>
    useQuery({
      queryKey: [
        "payment-analytics",
      ],
      queryFn:
        getPaymentAnalytics,
    });

export const usePlanRevenue =
  () =>
    useQuery({
      queryKey: [
        "plan-revenue",
      ],
      queryFn:
        getPlanRevenue,
    });