import { useQuery } from "@tanstack/react-query";

import {
  getBookings,
  getBookingById,
} from "../services/booking.service";

export const useBookings = () =>
  useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

export const useBooking = (
  id: number
) =>
  useQuery({
    queryKey: [
      "booking",
      id,
    ],
    queryFn: () =>
      getBookingById(id),

    enabled: !!id,
  });