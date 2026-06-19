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

import { usePlans } from "../hooks/usePlans";

import {
  useCreatePlan,
  useUpdatePlan,
  useActivatePlan,
  useDeactivatePlan,
} from "../hooks/usePlanActions";

import PlanDialog from "../components/plans/PlanDialog";

export default function PlansPage() {
  const [search, setSearch] =
    useState("");

  const [open, setOpen] =
    useState(false);

  const [selectedPlan,
    setSelectedPlan] =
    useState<any>(null);

  const {
    data,
    isLoading,
    refetch,
  } = usePlans();

  const createMutation =
    useCreatePlan();

  const updateMutation =
    useUpdatePlan();

  const activateMutation =
    useActivatePlan();

  const deactivateMutation =
    useDeactivatePlan();

  const rows =
    data?.filter(
      (plan: any) =>
        plan.name
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
      field: "name",
      headerName: "Plan",
      flex: 1,
    },

    {
      field: "price",
      headerName: "Price",
      width: 120,

      renderCell: (params: any) =>
        `₹${params.value}`,
    },

    {
      field:
        "property_limit",
      headerName:
        "Property Limit",
      width: 150,
    },

    {
      field: "razorpay_plan_id",
      headerName: "Razorpay Plan ID",
      width: 250,
    },

    {
      field: "status",
      headerName:
        "Status",
      width: 120,

      renderCell: (params: any) => (
        <Chip
          size="small"
          label={params.value}
          color={
            params.value ===
            "active"
              ? "success"
              : "error"
          }
        />
      ),
    },

    {
      field: "actions",
      headerName:
        "Actions",
      width: 450,

      renderCell: (params: any) => (
        <Stack
          direction="row"
          spacing={1}
        >
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              setSelectedPlan(
                params.row
              );

              setOpen(true);
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
                params.row.id,
                {
                  onSuccess:
                    async () => {
                      await refetch();
                    },
                }
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
                params.row.id,
                {
                  onSuccess:
                    async () => {
                      await refetch();
                    },
                }
              )
            }
          >
            Disable
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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography
            variant="h4"
            className="font-display"
          >
            Plans
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              setSelectedPlan(
                null
              );

              setOpen(true);
            }}
          >
            Create Plan
          </Button>
        </Box>

        <TextField
          fullWidth
          label="Search Plan"
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
            rows={rows}
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

      <PlanDialog
        open={open}
        plan={selectedPlan}
        onClose={() =>
          setOpen(false)
        }
        onSave={(payload) => {
          if (
            selectedPlan
          ) {
            updateMutation.mutate(
              {
                id:
                  selectedPlan.id,
                payload,
              },
              {
                onSuccess:
                  async () => {
                    await refetch();
                    setOpen(
                      false
                    );
                  },
              }
            );
          } else {
            createMutation.mutate(
              {
                ...payload,
                is_active: true,
              },
              {
                onSuccess:
                  async () => {
                    await refetch();
                    setOpen(
                      false
                    );
                  },
              }
            );
          }
        }}
      />
    </>
  );
}