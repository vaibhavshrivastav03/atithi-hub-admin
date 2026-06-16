import { useQuery } from "@tanstack/react-query";

import {
  getProperties,
  getPropertyById,
} from "../services/property.service";

export const useProperties = () =>
  useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });

export const useProperty = (
  id: number
) =>
  useQuery({
    queryKey: [
      "property",
      id,
    ],
    queryFn: () =>
      getPropertyById(id),
    enabled: !!id,
  });