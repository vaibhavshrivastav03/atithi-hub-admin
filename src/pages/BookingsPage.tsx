import { useState } from "react";

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { useNavigate } from "@tanstack/react-router";

import { useBookings } from "../hooks/useBookings";

import { useDeleteBooking } from "../hooks/useBookingActions";

export default function BookingsPage() {
  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const {
    data,
    isLoading,
  } = useBookings();

  const deleteMutation =
    useDeleteBooking();

  const filteredRows =
    data?.filter(
      (booking: any) =>
        booking.guest_name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        booking.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    ) || [];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },

    {
      field: "guest_name",
      headerName: "Guest",
      flex: 1,
    },

    {
      field: "property",
      headerName:
        "Property",
      flex: 1,

      renderCell:
        (params: any) =>
          params.row
            .properties
            ?.property_name,
    },

    {
      field:
        "checkin_date",
      headerName:
        "Check In",
      width: 140,
    },

    {
      field:
        "checkout_date",
      headerName:
        "Check Out",
      width: 140,
    },

    {
      field:
        "booking_status",
      headerName:
        "Status",
      width: 130,

      renderCell:
        (params: any) => (
          <Chip
            size="small"
            label={
              params.value
            }
            color={
              params.value ===
              "approved"
                ? "success"
                : params.value ===
                    "pending"
                  ? "warning"
                  : "error"
            }
          />
        ),
    },

    {
      field: "actions",
      headerName:
        "Actions",
      width: 220,

      renderCell:
        (params: any) => (
          <Stack
            direction="row"
            spacing={1}
          >
            <Button
              size="small"
              variant="outlined"
              onClick={() =>
                navigate({
                  to: "/admin/bookings/$id",
                  params: {
                    id: String(
                      params
                        .row.id
                    ),
                  },
                })
              }
            >
              View
            </Button>

            <Button
              size="small"
              color="error"
              variant="contained"
              onClick={() => {
                if (
                  window.confirm(
                    "Delete Booking?"
                  )
                ) {
                  deleteMutation.mutate(
                    params
                      .row.id
                  );
                }
              }}
            >
              Delete
            </Button>
          </Stack>
        ),
    },
  ];

  if (isLoading)
    return (
      <CircularProgress />
    );

  return (
    <Box>
      <Typography
        variant="h4"
        mb={3}
      >
        Bookings
      </Typography>

      <TextField
        fullWidth
        label="Search Booking"
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <Box
        sx={{
          height: 650,
          background: "#fff",
        }}
      >
        <DataGrid
          rows={
            filteredRows
          }
          columns={
            columns as any
          }
        />
      </Box>
    </Box>
  );
}