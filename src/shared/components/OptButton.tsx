import Button from "@mui/material/Button";

type TButtonVariant = "contained" | "outlined" | "text";

interface OptButtonProps {
  buttonText: string;
  variant?: TButtonVariant;
  disabled?: boolean;
}
const OptButton = ({
  buttonText,
  variant = "contained",
  disabled = false,
}: OptButtonProps) => {
  return (
    <Button variant={variant} disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default OptButton;
