import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl, TextFieldVariants } from "@mui/material";
import { IOption } from "../Interfaces";

interface OptSelectFieldProps<T = unknown> {
  id: string;
  label: string;
  options: IOption<T>[];
  variant?: TextFieldVariants;
  error?: boolean;
  disabled?: boolean;
}

const OptSelect = ({
  id,
  label,
  options,
  variant = "outlined",
  ...props
}: OptSelectFieldProps) => {
  return (
    <FormControl>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        labelId={`${id}-select-label`}
        id={`${id}-select`}
        label={label}
        {...props}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value as any}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OptSelect;
