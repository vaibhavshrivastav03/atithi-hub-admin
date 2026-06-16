import { useQuery } from "@tanstack/react-query";

import {
  getCheckins,
  getCheckinById,
} from "../services/checkin.service";

export const useCheckins = () =>
  useQuery({
    queryKey: ["checkins"],
    queryFn: getCheckins,
  });

export const useCheckin = (
  id: number
) =>
  useQuery({
    queryKey: [
      "checkin",
      id,
    ],
    queryFn: () =>
      getCheckinById(id),

    enabled: !!id,
  });