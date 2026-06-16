import { api } from "../api/axios";

export const getBookings = async () => {
  const response = await api.get(
    "/api/v1/admin/bookings"
  );

  return response.data.bookings;
};

export const getBookingById = async (
  id: number
) => {
  const response = await api.get(
    `/api/v1/admin/bookings/${id}`
  );

  return response.data.booking;
};

export const deleteBooking =
  async (id: number) => {
    const response = await api.delete(
      `/api/v1/admin/bookings/${id}`
    );

    return response.data;
  };