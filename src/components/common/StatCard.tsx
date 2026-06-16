import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  value: string | number;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight={700}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}