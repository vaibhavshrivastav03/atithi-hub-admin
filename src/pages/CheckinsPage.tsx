import { useState } from "react";

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { useNavigate } from "@tanstack/react-router";

import { useCheckins } from "../hooks/useCheckins";

export default function CheckinsPage() {
  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const {
    data,
    isLoading,
  } = useCheckins();

  const filteredRows =
    data?.filter(
      (item: any) =>
        item.guest_name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    ) || [];

  const columns = [
    {
      field: "id",
      headerName: "Booking ID",
      width: 120,
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
        "verification",
      headerName:
        "Verification",
      width: 180,

      renderCell:
        (params: any) => {
          const status =
            params.row
              .checkin_submissions?.[0]
              ?.status;

          return (
            <Chip
              size="small"
              label={
                status ||
                "not submitted"
              }
              color={
                status ===
                "approved"
                  ? "success"
                  : status ===
                      "rejected"
                    ? "error"
                    : "warning"
              }
            />
          );
        },
    },

    {
      field: "actions",
      headerName:
        "Actions",
      width: 140,

      renderCell:
        (params: any) => (
          <Button
            variant="outlined"
            size="small"
            onClick={() =>
              navigate({
                to: "/admin/checkins/$id",
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
        Check-ins
      </Typography>

      <TextField
        fullWidth
        label="Search Guest"
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