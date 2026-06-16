import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

import { useParams } from "@tanstack/react-router";

import { useProperty } from "../hooks/useProperties";

export default function PropertyDetailsPage() {
  const { id } =
    useParams({
      strict: false,
    });

  const {
    data,
    isLoading,
  } = useProperty(
    Number(id)
  );

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
        Property Details
      </Typography>

      <Card>
        <CardContent>
          <Typography>
            Property:
            {" "}
            {
              data.property_name
            }
          </Typography>

          <Typography>
            Owner:
            {" "}
            {
              data.owners
                ?.full_name
            }
          </Typography>

          <Typography>
            Email:
            {" "}
            {
              data.owners
                ?.email
            }
          </Typography>

          <Typography>
            Phone:
            {" "}
            {
              data.owners
                ?.phone
            }
          </Typography>

          <Typography>
            City:
            {" "}
            {data.city}
          </Typography>

          <Typography>
            State:
            {" "}
            {data.state}
          </Typography>

          <Typography>
            Address:
            {" "}
            {
              data.property_address
            }
          </Typography>

          <Typography>
            Type:
            {" "}
            {
              data.property_type
            }
          </Typography>

          <Typography>
            Status:
            {" "}
            {data.status}
          </Typography>

          <Typography
            sx={{ mt: 2 }}
          >
            House Rules:
          </Typography>

          <Typography>
            {
              data.house_rules
            }
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}