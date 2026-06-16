import { useQuery } from "@tanstack/react-query";

import {
  getCoupons,
  getCouponAnalytics,
} from "../services/coupon.service";

export const useCoupons = () =>
  useQuery({
    queryKey: ["coupons"],
    queryFn: getCoupons,

    staleTime: 0,
    gcTime: 0,

    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

export const useCouponAnalytics = (
  id: number
) =>
  useQuery({
    queryKey: [
      "coupon-analytics",
      id,
    ],
    queryFn: () =>
      getCouponAnalytics(id),

    enabled: !!id,
  });