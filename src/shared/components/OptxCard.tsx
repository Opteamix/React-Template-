import { Card, CardContent } from "@mui/material";

interface OptxCardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const OptxCard = ({
  children,
  width = "auto",
  height = "auto",
}: OptxCardProps) => {
  return (
    <Card sx={{ width: width, height: height }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default OptxCard;
