import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

import { useLogin } from "../hooks/useLogin";

export default function LoginPage() {
  const loginMutation = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleSubmit = () => {
    loginMutation.mutate(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          window.location.href =
            "/admin/dashboard";
        },
      }
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F7F1EA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          color="#C96A2B"
        >
          Atithi Hub
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mt: 1, mb: 4 }}
        >
          Admin Panel Login
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.5,
            background: "#C96A2B",
          }}
          onClick={handleSubmit}
          disabled={
            loginMutation.isPending
          }
        >
          {loginMutation.isPending ? (
            <CircularProgress
              size={22}
              color="inherit"
            />
          ) : (
            "Login"
          )}
        </Button>

        {loginMutation.isError && (
          <Typography
            color="error"
            mt={2}
            align="center"
          >
            Invalid credentials
          </Typography>
        )}
      </Paper>
    </Box>
  );
}