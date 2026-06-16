import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../api/queryClient";

import {
  createCoupon,
  updateCoupon,
  deleteCoupon,
  activateCoupon,
  deactivateCoupon,
} from "../services/coupon.service";

const refreshCoupons =
  async () => {
    await queryClient.invalidateQueries(
      {
        queryKey: [
          "coupons",
        ],
      }
    );

    await queryClient.refetchQueries(
      {
        queryKey: [
          "coupons",
        ],
      }
    );
  };

export const useCreateCoupon =
  () =>
    useMutation({
      mutationFn:
        createCoupon,

      onSuccess:
        refreshCoupons,
    });

export const useUpdateCoupon =
  () =>
    useMutation({
      mutationFn: ({
        id,
        payload,
      }: any) =>
        updateCoupon(
          id,
          payload
        ),

      onSuccess:
        refreshCoupons,
    });

export const useDeleteCoupon =
  () =>
    useMutation({
      mutationFn:
        deleteCoupon,

      onSuccess:
        refreshCoupons,
    });

export const useActivateCoupon =
  () =>
    useMutation({
      mutationFn:
        activateCoupon,

      onSuccess:
        refreshCoupons,
    });

export const useDeactivateCoupon =
  () =>
    useMutation({
      mutationFn:
        deactivateCoupon,

      onSuccess:
        refreshCoupons,
    });