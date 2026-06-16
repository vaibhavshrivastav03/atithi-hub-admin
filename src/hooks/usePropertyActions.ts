import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../api/queryClient";

import {
  activateProperty,
  deactivateProperty,
  deleteProperty,
  updateProperty,
} from "../services/property.service";



export const useActivateProperty =
  () =>
    useMutation({
      mutationFn:
        activateProperty,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "properties",
            ],
          }
        );
      },
    });

export const useDeactivateProperty =
  () =>
    useMutation({
      mutationFn:
        deactivateProperty,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "properties",
            ],
          }
        );
      },
    });

export const useDeleteProperty =
  () =>
    useMutation({
      mutationFn:
        deleteProperty,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "properties",
            ],
          }
        );
      },
    });

export const useUpdateProperty = () =>
  useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: any;
    }) =>
      updateProperty(
        id,
        payload
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["properties"],
      });
    },
  });