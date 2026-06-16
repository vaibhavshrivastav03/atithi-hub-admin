import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../api/queryClient";

import {
  createPlan,
  updatePlan,
  deletePlan,
  activatePlan,
  deactivatePlan,
} from "../services/plan.service";

export const useCreatePlan = () =>
  useMutation({
    mutationFn: createPlan,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
  });

export const useUpdatePlan = () =>
  useMutation({
    mutationFn: ({
      id,
      payload,
    }: any) =>
      updatePlan(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
  });

export const useDeletePlan = () =>
  useMutation({
    mutationFn: deletePlan,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
  });

export const useActivatePlan = () =>
  useMutation({
    mutationFn: activatePlan,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
  });

export const useDeactivatePlan = () =>
  useMutation({
    mutationFn: deactivatePlan,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
  });