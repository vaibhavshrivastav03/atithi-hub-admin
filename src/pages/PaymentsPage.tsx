import { useState } from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Chip,
  CircularProgress,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import {
  usePayments,
  usePaymentAnalytics,
  usePlanRevenue,
} from "../hooks/usePayments";

export default function PaymentsPage() {
  const [statusFilter,
    setStatusFilter] =
    useState("");

  const [gatewayFilter,
    setGatewayFilter] =
    useState("");

  const {
    data,
    isLoading,
  } = usePayments();

  const {
    data: analytics,
  } =
    usePaymentAnalytics();

  const {
    data: planRevenue,
  } =
    usePlanRevenue();

  const rows =
    data?.filter(
      (payment: any) => {
        const statusMatch =
          !statusFilter ||
          payment.payment_status ===
            statusFilter;

        const gatewayMatch =
          !gatewayFilter ||
          payment.payment_gateway ===
            gatewayFilter;

        return (
          statusMatch &&
          gatewayMatch
        );
      }
    ) || [];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
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
        "payment_gateway",
      headerName:
        "Gateway",
      width: 150,
    },

    {
      field:
        "transaction_id",
      headerName:
        "Transaction",
      flex: 1,
    },

    {
      field:
        "payment_status",
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
              "success"
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
        Payments
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
                Total Revenue
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
                Today
              </Typography>

              <Typography variant="h5">
                ₹
                {
                  analytics?.today_revenue
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
                This Month
              </Typography>

              <Typography variant="h5">
                ₹
                {
                  analytics?.this_month_revenue
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
                Successful
              </Typography>

              <Typography variant="h5">
                {
                  analytics?.successful_payments
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        mb={3}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <TextField
            select
            fullWidth
            label="Status"
            value={
              statusFilter
            }
            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }
          >
            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="success">
              Success
            </MenuItem>

            <MenuItem value="failed">
              Failed
            </MenuItem>
          </TextField>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <TextField
            select
            fullWidth
            label="Gateway"
            value={
              gatewayFilter
            }
            onChange={(e) =>
              setGatewayFilter(
                e.target.value
              )
            }
          >
            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="razorpay">
              Razorpay
            </MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Card
        sx={{ mb: 3 }}
      >
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
          >
            Plan Revenue
          </Typography>

          {planRevenue &&
            Object.entries(
              planRevenue
            ).map(
              (
                [plan, amount]
              ) => (
                <Typography
                  key={plan}
                >
                  {plan}
                  {" : "}
                  ₹
                  {String(
                    amount
                  )}
                </Typography>
              )
            )}
        </CardContent>
      </Card>

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