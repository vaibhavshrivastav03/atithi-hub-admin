import { useState } from "react";

import {
  Box,
  Button,
  Chip,
  Typography,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { useCoupons } from "../hooks/useCoupons";

import {
  useCreateCoupon,
  useUpdateCoupon,
  useDeleteCoupon,
  useActivateCoupon,
  useDeactivateCoupon,
} from "../hooks/useCouponActions";

import CouponDialog from "../components/coupons/CouponDialog";

export default function CouponsPage() {
  const [open, setOpen] =
    useState(false);

  const [selectedCoupon,
    setSelectedCoupon] =
    useState<any>(null);

  const [search, setSearch] =
    useState("");

  const {
    data,
    isLoading,
    refetch,
  } = useCoupons();

  const createMutation =
    useCreateCoupon();

  const updateMutation =
    useUpdateCoupon();

  const deleteMutation =
    useDeleteCoupon();

  const activateMutation =
    useActivateCoupon();

  const deactivateMutation =
    useDeactivateCoupon();

  const rows =
    data?.filter(
      (coupon: any) =>
        coupon.code
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    ) || [];

  const columns = [
    {
      field: "code",
      headerName: "Code",
      flex: 1,
    },

    {
      field:
        "discount_type",
      headerName: "Type",
      width: 130,
    },

    {
      field:
        "discount_value",
      headerName:
        "Discount",
      width: 120,
    },

    {
      field:
        "validity_type",
      headerName:
        "Validity",
      width: 150,
    },

    {
      field: "max_usage",
      headerName:
        "Max Usage",
      width: 120,
    },

    {
      field: "used_count",
      headerName: "Used",
      width: 100,
    },

    {
      field: "status",
      headerName:
        "Status",
      width: 120,

      renderCell:
        (params: any) => (
          <Chip
            size="small"
            label={
              params.value
            }
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
      width: 420,

      renderCell:
        (params: any) => (
          <Stack
            direction="row"
            spacing={1}
          >
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                setOpen(false);

                setSelectedCoupon({
                  ...params.row,
                });

                setTimeout(() => {
                  setOpen(true);
                }, 50);
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

            <Button
              size="small"
              color="error"
              variant="contained"
              onClick={() => {
                if (
                  window.confirm(
                    "Delete Coupon?"
                  )
                ) {
                  deleteMutation.mutate(
                    params.row.id,
                    {
                      onSuccess:
                        async () => {
                          await refetch();
                        },
                    }
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
        <Box
          display="flex"
          justifyContent="space-between"
          mb={3}
        >
          <Typography variant="h4">
            Coupons
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              setOpen(false);

              setSelectedCoupon(
                null
              );

              setTimeout(() => {
                setOpen(true);
              }, 50);
            }}
          >
            Create Coupon
          </Button>
        </Box>

        <TextField
          fullWidth
          label="Search Coupon"
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
            background:
              "#fff",
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

      <CouponDialog
        open={open}
        coupon={
          selectedCoupon
        }
        onClose={() =>
          setOpen(false)
        }
        onSave={async (
          payload
        ) => {
          if (
            selectedCoupon?.id
          ) {
            updateMutation.mutate(
              {
                id:
                  selectedCoupon.id,
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
              payload,
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