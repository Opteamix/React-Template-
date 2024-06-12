import Button from "@mui/material/Button";

type TButtonVariant = "contained" | "outlined" | "text";

interface OptxButtonProps {
  buttonText: string;
  variant?: TButtonVariant;
  disabled?: boolean;
  handleClick?: () => void;
}
const OptxButton = ({
  buttonText,
  handleClick,
  variant = "contained",
  disabled = false,
}: OptxButtonProps) => {
  return (
    <Button onClick={handleClick} variant={variant} disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default OptxButton;
