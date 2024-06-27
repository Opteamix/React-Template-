import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface OptxCheckboxProps {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const OptxCheckbox = ({ checked, onChange, label = "" }: OptxCheckboxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} name={label} />}
      label={label}
    />
  );
};

export default OptxCheckbox;
