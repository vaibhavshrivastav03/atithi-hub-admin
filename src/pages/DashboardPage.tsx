import {
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";

import StatCard from "../components/common/StatCard";

import { useDashboard } from "../hooks/useDashboard";
import PageHeader from "../components/common/PageHeader";

export default function DashboardPage() {
  const { data, isLoading } =
    useDashboard();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography
        variant="h4"
        mb={3}
      >
        <PageHeader title="Dashboard" />
      </Typography>

      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} md={4}>
          <StatCard
            title="Total Owners"
            value={
              data?.totalOwners || 0
            }
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Active Owners"
            value={
              data?.activeOwners || 0
            }
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Properties"
            value={
              data?.totalProperties || 0
            }
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Bookings"
            value={
              data?.totalBookings || 0
            }
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Pending Checkins"
            value={
              data?.pendingCheckins || 0
            }
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard
            title="Revenue"
            value={`₹ ${
              data?.totalRevenue || 0
            }`}
          />
        </Grid>
      </Grid>
    </>
  );
}