import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import OwnersPage from "../pages/OwnersPage";
import PropertiesPage from "../pages/PropertiesPage";
import BookingsPage from "../pages/BookingsPage";
import CheckinsPage from "../pages/CheckinsPage";
import PlansPage from "../pages/PlansPage";
import CouponsPage from "../pages/CouponsPage";
import SubscriptionsPage from "../pages/SubscriptionsPage";
import PaymentsPage from "../pages/PaymentsPage";
import OwnerDetailsPage from "../pages/OwnerDetailsPage";
import PropertyDetailsPage from "../pages/PropertyDetailsPage";
import BookingDetailsPage from "../pages/BookingDetailsPage";
import CheckinDetailsPage from "../pages/CheckinDetailsPage";

import AdminLayout from "../layouts/AdminLayout";

const rootRoute = createRootRoute({
  component: Outlet,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => {
    const token = localStorage.getItem(
      "admin_token"
    );

    if (token) {
      window.location.href =
        "/admin/dashboard";
      return null;
    }

    return <LoginPage />;
  },
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard",
  component: () => (
    <AdminLayout>
      <DashboardPage />
    </AdminLayout>
  ),
});

const ownersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/owners",
  component: () => (
    <AdminLayout>
      <OwnersPage />
    </AdminLayout>
  ),
});

const ownerDetailsRoute =
  createRoute({
    getParentRoute: () =>
      rootRoute,

     path: "/admin/owners/$id",

    component: () => (
      <AdminLayout>
        <OwnerDetailsPage />
      </AdminLayout>
    ),
  });

const propertiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/properties",
  component: () => (
    <AdminLayout>
      <PropertiesPage />
    </AdminLayout>
  ),
});

const propertyDetailsRoute =
  createRoute({
    getParentRoute: () =>
      rootRoute,

    path:
      "/admin/properties/$id",

    component: () => (
      <AdminLayout>
        <PropertyDetailsPage />
      </AdminLayout>
    ),
  });

const bookingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/bookings",
  component: () => (
    <AdminLayout>
      <BookingsPage />
    </AdminLayout>
  ),
});

const bookingDetailsRoute =
  createRoute({
    getParentRoute: () =>
      rootRoute,

    path:
      "/admin/bookings/$id",

    component: () => (
      <AdminLayout>
        <BookingDetailsPage />
      </AdminLayout>
    ),
  });

const checkinsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/checkins",
  component: () => (
    <AdminLayout>
      <CheckinsPage />
    </AdminLayout>
  ),
});

const checkinDetailsRoute =
  createRoute({
    getParentRoute: () =>
      rootRoute,

    path:
      "/admin/checkins/$id",

    component: () => (
      <AdminLayout>
        <CheckinDetailsPage />
      </AdminLayout>
    ),
  });

const plansRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/plans",
  component: () => (
    <AdminLayout>
      <PlansPage />
    </AdminLayout>
  ),
});

const couponsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/coupons",
  component: () => (
    <AdminLayout>
      <CouponsPage />
    </AdminLayout>
  ),
});

const subscriptionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/subscriptions",
  component: () => (
    <AdminLayout>
      <SubscriptionsPage />
    </AdminLayout>
  ),
});

const paymentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/payments",
  component: () => (
    <AdminLayout>
      <PaymentsPage />
    </AdminLayout>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,

  dashboardRoute,

  ownersRoute,
  ownerDetailsRoute,

  propertiesRoute,
  propertyDetailsRoute,
  bookingsRoute,
  bookingDetailsRoute,
  checkinsRoute,
  checkinDetailsRoute,

  plansRoute,
  couponsRoute,
  subscriptionsRoute,
  paymentsRoute,
]);
export const router = createRouter({
  routeTree,
});