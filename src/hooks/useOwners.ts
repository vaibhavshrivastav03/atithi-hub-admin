import { useQuery } from "@tanstack/react-query";

import {
  getOwners,
  getOwnerById,
} from "../services/owner.service";

export const useOwners = () => {
  return useQuery({
    queryKey: ["owners"],
    queryFn: getOwners,
  });
};

export const useOwner = (
  id: number
) => {
  return useQuery({
    queryKey: ["owner", id],
    queryFn: () =>
      getOwnerById(id),
    enabled: !!id,
  });
};