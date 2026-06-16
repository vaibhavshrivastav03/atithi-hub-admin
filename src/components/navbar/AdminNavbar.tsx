import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

export default function AdminNavbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: "1px solid #eee",
        background: "#fff",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight={600}
        >
          Atithi Hub Admin
        </Typography>

        <Box flex={1} />

        <Avatar>
          A
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}