import { useQuery } from "@tanstack/react-query";

import { getPlans } from "../services/plan.service";

export const usePlans = () =>
  useQuery({
    queryKey: ["plans"],
    queryFn: getPlans,
  });