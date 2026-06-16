import { useState } from "react";

import {
  Box,
  Button,
  Chip,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { useNavigate } from "@tanstack/react-router";

import { useProperties } from "../hooks/useProperties";

import {
  useActivateProperty,
  useDeactivateProperty,
  useDeleteProperty,
  useUpdateProperty,
} from "../hooks/usePropertyActions";

import EditPropertyDialog from "../components/properties/EditPropertyDialog";

export default function PropertiesPage() {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [editOpen, setEditOpen] =
    useState(false);

  const [selectedProperty,
    setSelectedProperty] =
    useState<any>(null);

  const {
    data,
    isLoading,
  } = useProperties();

  const activateMutation =
    useActivateProperty();

  const deactivateMutation =
    useDeactivateProperty();

  const deleteMutation =
    useDeleteProperty();

  const updateMutation =
    useUpdateProperty();

  const filteredRows =
    data?.filter(
      (property: any) =>
        property.property_name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        property.city
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        property.owners?.full_name
          ?.toLowerCase()
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
      field: "property_name",
      headerName: "Property",
      flex: 1,
    },

    {
      field: "city",
      headerName: "City",
      width: 150,
    },

    {
      field: "property_type",
      headerName: "Type",
      width: 140,
    },

    {
      field: "owner",
      headerName: "Owner",
      width: 220,

      renderCell: (params: any) =>
        params.row.owners?.full_name,
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,

      renderCell: (params: any) => (
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
      headerName: "Actions",
      width: 500,

      renderCell: (params: any) => (
        <Stack
          direction="row"
          spacing={1}
        >
          <Button
            size="small"
            variant="outlined"
            onClick={() =>
              navigate({
                to: "/admin/properties/$id",
                params: {
                  id: String(
                    params.row.id
                  ),
                },
              })
            }
          >
            View
          </Button>

          <Button
            size="small"
            variant="contained"
            onClick={() => {
              
              setSelectedProperty(
                params.row
              );

              setEditOpen(true);
            }}
          >
            Edit
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

          <Button
            size="small"
            color="warning"
            variant="contained"
            onClick={() =>
              deactivateMutation.mutate(
                params.row.id
              )
            }
          >
            Disable
          </Button>

          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={() => {
              const ok =
                window.confirm(
                  "Delete Property?"
                );

              if (ok) {
                deleteMutation.mutate(
                  params.row.id
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

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          mb={3}
        >
          Properties
        </Typography>

        <TextField
          fullWidth
          label="Search Property"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          sx={{ mb: 3 }}
        />

        <Box
          sx={{
            height: 650,
            background: "#fff",
          }}
        >
          <DataGrid
            rows={filteredRows}
            columns={columns as any}
            pageSizeOptions={[
              10,
              20,
              50,
            ]}
          />
        </Box>
      </Box>

      <EditPropertyDialog
        open={editOpen}
        property={
          selectedProperty
        }
        onClose={() =>
          setEditOpen(false)
        }
        onSave={(payload) => {
          updateMutation.mutate({
            id: selectedProperty.id,
            payload,
          });

          setEditOpen(false);
        }}
      />
    </>
  );
}