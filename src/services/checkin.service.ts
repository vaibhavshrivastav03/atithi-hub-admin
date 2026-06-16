import { api } from "../api/axios";

export const getCheckins = async () => {
  const response = await api.get(
    "/api/v1/admin/checkins"
  );

  return response.data.checkins;
};

export const getCheckinById =
  async (bookingId: number) => {
    const response = await api.get(
      `/api/v1/admin/checkins/${bookingId}`
    );

    return response.data.checkin;
  };