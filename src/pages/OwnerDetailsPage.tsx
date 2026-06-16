import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

import { useParams } from "@tanstack/react-router";

import { useOwner } from "../hooks/useOwners";

export default function OwnerDetailsPage() {
  const params = useParams({
    strict: false,
  });

  const ownerId = Number(
    params.id
  );

  const {
    data,
    isLoading,
  } = useOwner(ownerId);

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  const owner =
    data.owner || data;

  return (
    <Box>
      <Typography
        variant="h4"
        mb={3}
      >
        Owner Details
      </Typography>

      <Card>
        <CardContent>
          <Typography>
            Name:
            {" "}
            {owner.full_name}
          </Typography>

          <Typography>
            Email:
            {" "}
            {owner.email}
          </Typography>

          <Typography>
            Phone:
            {" "}
            {owner.phone}
          </Typography>

          <Typography>
            Status:
            {" "}
            {owner.status}
          </Typography>

          <Typography>
            Free Forever:
            {" "}
            {owner.is_free_forever
              ? "Yes"
              : "No"}
          </Typography>

          <Typography>
            Custom Price:
            {" "}
            {owner.custom_price ??
              "-"}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}