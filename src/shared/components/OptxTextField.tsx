import { useState } from "react";
import TextField, { TextFieldVariants } from "@mui/material/TextField";

interface OptxTextFieldProps {
  label: string;
  id?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  variant?: TextFieldVariants;
  disabled?: boolean;
  isError?: boolean;
  helperText?: string;
  multiline?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptxTextField = ({
  label,
  id = "",
  placeholder = "",
  defaultValue = "",
  value = "",
  variant = "outlined",
  disabled = false,
  isError = false,
  helperText = "",
  multiline = false,
  onChange,
}: OptxTextFieldProps) => {
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (event: any) => {
    setCurrentValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value ? value : currentValue}
      variant={variant}
      disabled={disabled}
      error={isError}
      helperText={helperText}
      multiline={multiline}
      onChange={handleChange}
    />
  );
};

export default OptxTextField;
