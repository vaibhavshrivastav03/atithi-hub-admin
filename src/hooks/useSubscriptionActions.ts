import { useMutation } from "@tanstack/react-query";

import { queryClient } from "../api/queryClient";

import { cancelSubscription } from "../services/subscription.service";

export const useCancelSubscription =
  () =>
    useMutation({
      mutationFn:
        cancelSubscription,

      onSuccess:
        async () => {
          await queryClient.invalidateQueries(
            {
              queryKey: [
                "subscriptions",
              ],
            }
          );

          await queryClient.refetchQueries(
            {
              queryKey: [
                "subscriptions",
              ],
            }
          );
        },
    });