import { useState } from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Chip,
  Button,
  CircularProgress,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import {
  useSubscriptions,
  useSubscriptionAnalytics,
} from "../hooks/useSubscriptions";


export default function SubscriptionsPage() {
  const [search, setSearch] =
    useState("");

  const {
    data,
    isLoading,
  } = useSubscriptions();

  const {
    data: analytics,
  } =
    useSubscriptionAnalytics();


  const rows =
    data?.filter(
      (item: any) =>
        item.owners?.full_name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    ) || [];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },

    {
      field: "owner",
      headerName:
        "Owner",
      flex: 1,

      renderCell:
        (params: any) =>
          params.row.owners
            ?.full_name,
    },

    {
      field: "plan",
      headerName:
        "Plan",
      width: 160,

      renderCell:
        (params: any) =>
          params.row.plans
            ?.name,
    },

    {
      field: "amount",
      headerName:
        "Amount",
      width: 120,

      renderCell:
        (params: any) =>
          `₹${params.value}`,
    },

    {
      field:
        "property_limit",
      headerName:
        "Properties",
      width: 120,
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
        Subscriptions
      </Typography>

      <Grid
        container
        spacing={2}
        mb={3}
      >
        <Grid
          item
          xs={12}
          md={3}
        >
          <Card>
            <CardContent>
              <Typography>
                Revenue
              </Typography>

              <Typography variant="h5">
                ₹
                {
                  analytics?.total_revenue
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
        >
          <Card>
            <CardContent>
              <Typography>
                Active
              </Typography>

              <Typography variant="h5">
                {
                  analytics?.active_subscriptions
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
        >
          <Card>
            <CardContent>
              <Typography>
                Cancelled
              </Typography>

              <Typography variant="h5">
                {
                  analytics?.cancelled_subscriptions
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
        >
          <Card>
            <CardContent>
              <Typography>
                Free Forever
              </Typography>

              <Typography variant="h5">
                {
                  analytics?.free_forever_users
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

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
          background: "#fff",
        }}
      >
        <DataGrid
          rows={rows}
          columns={
            columns as any
          }
        />
      </Box>
    </Box>
  );
}