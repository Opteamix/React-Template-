import Checkbox from "@mui/material/Checkbox";

interface OptxCheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptxCheckbox = ({ checked, onChange }: OptxCheckboxProps) => {
  return <Checkbox checked={checked} onChange={onChange} />;
};

export default OptxCheckbox;
