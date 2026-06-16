import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import AppLogo from "../common/AppLogo";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import BadgeIcon from "@mui/icons-material/Badge";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaymentsIcon from "@mui/icons-material/Payments";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  useNavigate,
} from "@tanstack/react-router";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const pathname = window.location.pathname;

  const menuItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: <DashboardIcon />,
    },
    {
      label: "Owners",
      path: "/admin/owners",
      icon: <PeopleIcon />,
    },
    {
      label: "Properties",
      path: "/admin/properties",
      icon: <ApartmentIcon />,
    },
    {
      label: "Bookings",
      path: "/admin/bookings",
      icon: <BookOnlineIcon />,
    },
    {
      label: "Check-ins",
      path: "/admin/checkins",
      icon: <BadgeIcon />,
    },
  ];

  const billingItems = [
    {
      label: "Plans",
      path: "/admin/plans",
      icon: <WorkspacePremiumIcon />,
    },
    {
      label: "Coupons",
      path: "/admin/coupons",
      icon: <LocalOfferIcon />,
    },
    {
      label: "Subscriptions",
      path: "/admin/subscriptions",
      icon: <ReceiptLongIcon />,
    },
    {
      label: "Payments",
      path: "/admin/payments",
      icon: <PaymentsIcon />,
    },
  ];

  return (
    <Box
      sx={{
        width: 270,
        height: "100vh",
        background: "#111827",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #1f2937",
      }}
    >
      <Box p={3}>
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 700,
            color: "#C96A2B",
          }}
        >
          Atithi Hub
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            color: "#9ca3af",
            mt: 0.5,
          }}
        >
          Admin Console
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#374151" }} />

      <List sx={{ px: 1, mt: 1 }}>
        {menuItems.map((item) => {
          const active =
            pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              onClick={() =>
                navigate({
                  to: item.path,
                })
              }
              sx={{
                mb: 1,
                borderRadius: 2,

                background: active
                  ? "#C96A2B"
                  : "transparent",

                "&:hover": {
                  background: active
                    ? "#C96A2B"
                    : "#1f2937",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Divider
        sx={{
          my: 2,
          borderColor: "#374151",
        }}
      />

      <List sx={{ px: 1 }}>
        {billingItems.map((item) => {
          const active =
            pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              onClick={() =>
                navigate({
                  to: item.path,
                })
              }
              sx={{
                mb: 1,
                borderRadius: 2,

                background: active
                  ? "#C96A2B"
                  : "transparent",

                "&:hover": {
                  background: active
                    ? "#C96A2B"
                    : "#1f2937",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Box flex={1} />

      <Divider sx={{ borderColor: "#374151" }} />

      <List sx={{ px: 1, py: 2 }}>
        <ListItemButton
          sx={{
            borderRadius: 2,
          }}
          onClick={() => {
            localStorage.removeItem(
              "admin_token"
            );

            window.location.href = "/";
          }}
        >
          <ListItemIcon
            sx={{
              color: "#fff",
            }}
          >
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
}