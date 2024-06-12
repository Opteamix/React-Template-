import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

interface OptxSwitchProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptxSwitch = ({ label, checked, onChange }: OptxSwitchProps) => {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} name={label} />}
      label={label}
    />
  );
};

export default OptxSwitch;
