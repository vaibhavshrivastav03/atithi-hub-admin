import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#C96A2B",
    },

    background: {
      default: "#F7F1EA",
      paper: "#FFFFFF",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily:
      "'Inter', sans-serif",
  },
});