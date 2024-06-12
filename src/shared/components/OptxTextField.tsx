import TextField, { TextFieldVariants } from "@mui/material/TextField";

interface OptxTextFieldProps {
  label: string;
  id?: string;
  defaultValue?: any;
  variant?: TextFieldVariants;
  disabled?: boolean;
  isError?: boolean;
  helperText?: string;
  multiline?: boolean;
}

const OptxTextField = ({
  label,
  id = "",
  defaultValue = "",
  variant = "outlined",
  disabled = false,
  isError = false,
  helperText = "",
  multiline = false,
}: OptxTextFieldProps) => {
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

export default OptxTextField;
