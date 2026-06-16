import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../api/queryClient";

import { deleteBooking } from "../services/booking.service";

export const useDeleteBooking =
  () =>
    useMutation({
      mutationFn:
        deleteBooking,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "bookings",
            ],
          }
        );
      },
    });