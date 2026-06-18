import { useMemo, useState } from "react";

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

import { useOwners } from "../hooks/useOwners";

import {
  useSuspendOwner,
  useActivateOwner,
 } from "../hooks/useOwnerActions";

export default function OwnersPage() {
  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const {
    data,
    isLoading,
  } = useOwners();

  const suspendMutation =
    useSuspendOwner();

  const activateMutation =
    useActivateOwner();

  
  const filteredRows =
    data?.filter(
      (owner: any) =>
        owner.full_name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        owner.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    ) || [];

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 80,
      },

      {
        field: "full_name",
        headerName: "Name",
        flex: 1,
      },

      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },

      {
        field: "phone",
        headerName: "Phone",
        width: 150,
      },

      {
        field: "status",
        headerName: "Status",
        width: 130,

        renderCell: (
          params: any
        ) => (
          <Chip
            label={params.value}
            color={
              params.value ===
              "active"
                ? "success"
                : "error"
            }
            size="small"
          />
        ),
      },

      {
        field: "actions",
        headerName:
          "Actions",
        width: 350,

        renderCell: (
          params: any
        ) => (
          <Stack
            direction="row"
            spacing={1}
          >
            <Button
              size="small"
              variant="outlined"
              onClick={() =>
                navigate({
                  to: `/admin/owners/${params.row.id}`,
                })
              }
            >
              View
            </Button>

            <Button
              size="small"
              color="warning"
              variant="contained"
              onClick={() =>
                suspendMutation.mutate(
                  params.row.id
                )
              }
            >
              Suspend
            </Button>

            <Button
              size="small"
              color="success"
              variant="contained"
              onClick={() =>
                activateMutation.mutate(
                  params.row.id
                )
              }
            >
              Activate
            </Button>

          </Stack>
        ),
      },
    ],
    []
  );

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  return (
    <Box>
      <Typography
        variant="h4"
        mb={3}
      >
        Owners
      </Typography>

      <TextField
        fullWidth
        label="Search Owner"
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
          background:
            "#fff",
        }}
      >
        <DataGrid
          rows={
            filteredRows
          }
          columns={
            columns as any
          }
          pageSizeOptions={[
            10,
            20,
            50,
          ]}
        />
      </Box>
    </Box>
  );
}