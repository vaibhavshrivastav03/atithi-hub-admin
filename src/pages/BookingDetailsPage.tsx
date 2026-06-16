import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

import { useParams } from "@tanstack/react-router";

import { useBooking } from "../hooks/useBookings";

export default function BookingDetailsPage() {
  const { id } =
    useParams({
      strict: false,
    });

  const {
    data,
    isLoading,
  } = useBooking(
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
        Booking Details
      </Typography>

      <Card>
        <CardContent>
          <Typography>
            Guest:
            {" "}
            {data.guest_name}
          </Typography>

          <Typography>
            Property:
            {" "}
            {
              data
                .properties
                ?.property_name
            }
          </Typography>

          <Typography>
            Email:
            {" "}
            {data.email}
          </Typography>

          <Typography>
            Mobile:
            {" "}
            {data.mobile}
          </Typography>

          <Typography>
            Source:
            {" "}
            {
              data.booking_source
            }
          </Typography>

          <Typography>
            Status:
            {" "}
            {
              data.booking_status
            }
          </Typography>

          <Typography>
            Check In:
            {" "}
            {
              data.checkin_date
            }
          </Typography>

          <Typography>
            Check Out:
            {" "}
            {
              data.checkout_date
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
            Owner Email:
            {" "}
            {
              data.owners
                ?.email
            }
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}