import React from "react";
import ReactDOM from "react-dom/client";

import {
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  RouterProvider,
} from "@tanstack/react-router";

import { queryClient } from "./api/queryClient";

import { router } from "./routes/router";

import {
 ThemeProvider,
 CssBaseline
} from "@mui/material";

import { theme } from "./theme/theme";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
</QueryClientProvider>
  </React.StrictMode>
);