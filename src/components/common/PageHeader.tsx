import {
  Box,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
}

export default function PageHeader({
  title,
}: Props) {
  return (
    <Box mb={3}>
      <Typography
        variant="h4"
        fontWeight={700}
      >
        {title}
      </Typography>
    </Box>
  );
}