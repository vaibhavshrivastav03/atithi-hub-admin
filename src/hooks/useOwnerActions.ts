import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../api/queryClient";

import {
  suspendOwner,
  activateOwner,
  deleteOwner,
} from "../services/owner.service";

export const useSuspendOwner = () =>
  useMutation({
    mutationFn: suspendOwner,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["owners"],
      });
    },
  });

export const useActivateOwner = () =>
  useMutation({
    mutationFn: activateOwner,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["owners"],
      });
    },
  });

export const useDeleteOwner = () =>
  useMutation({
    mutationFn: deleteOwner,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["owners"],
      });
    },
  });