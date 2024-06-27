import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl, TextFieldVariants } from "@mui/material";
import { IOption } from "../Interfaces";

interface OptxSelectFieldProps<T = unknown> {
  id?: string;
  label: string;
  options: IOption<T>[];
  variant?: TextFieldVariants;
  defaultValue?: number | null;
  error?: boolean;
  disabled?: boolean;
}

const OptxSelect = ({
  label,
  options,
  variant = "outlined",
  defaultValue,
  id = "",
  ...props
}: OptxSelectFieldProps) => {
  return (
    <FormControl>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        labelId={`${id}-select-label`}
        id={`${id}-select`}
        label={label}
        defaultValue={defaultValue}
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

export default OptxSelect;
