import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";

import { useParams } from "@tanstack/react-router";

import { useCheckin } from "../hooks/useCheckins";

export default function CheckinDetailsPage() {
  const { id } =
    useParams({
      strict: false,
    });

  const {
    data,
    isLoading,
  } = useCheckin(
    Number(id)
  );

  if (isLoading)
    return (
      <CircularProgress />
    );

  const submission =
    data
      ?.checkin_submissions?.[0];

  return (
    <Box>
      <Typography
        variant="h4"
        mb={3}
      >
        Check-in Details
      </Typography>

      <Card sx={{ mb: 3 }}>
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
              data.properties
                ?.property_name
            }
          </Typography>

          <Typography>
            Status:
            {" "}
            {
              submission?.status
            }
          </Typography>

          <Typography>
            Rejection:
            {" "}
            {
              submission?.rejection_reason ||
              "-"
            }
          </Typography>
        </CardContent>
      </Card>

      <Grid
        container
        spacing={2}
      >
        {submission?.guest_documents?.map(
          (doc: any) => (
            <Grid
              item
              xs={12}
              md={6}
              key={doc.id}
            >
              <Card>
                <CardContent>
                  <Typography>
                    {
                      doc.guest_full_name
                    }
                  </Typography>

                  <Typography>
                    {
                      doc.id_type
                    }
                  </Typography>

                  <Typography>
                    {
                      doc.address
                    }
                  </Typography>

                  <Box
                    mt={2}
                  >
                    <img
                      src={
                        doc.id_image
                      }
                      width="100%"
                    />
                  </Box>

                  <Box
                    mt={2}
                  >
                    <img
                      src={
                        doc.selfie_image
                      }
                      width="100%"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}