import TextField, { TextFieldVariants } from "@mui/material/TextField";

interface OptTextFieldProps {
  label: string;
  id?: string;
  defaultValue?: any;
  variant?: TextFieldVariants;
  disabled?: boolean;
  isError?: boolean;
  helperText?: string;
  multiline?: boolean;
}

const OptTextField = ({
  label,
  id="",
  defaultValue = "",
  variant = "outlined",
  disabled = false,
  isError = false,
  helperText = "",
  multiline = false,
}: OptTextFieldProps) => {
  return (
      <TextField
        id={id}
        label={label}
        defaultValue={defaultValue}
        variant={variant}
        disabled={disabled}
        error={isError}
        helperText={helperText}
        multiline={multiline}
      />
  );
};

export default OptTextField;
