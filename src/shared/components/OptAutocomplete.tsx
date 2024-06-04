import Autocomplete from "@mui/material/Autocomplete";
import { IOption } from "../Interfaces";
import TextField from "@mui/material/TextField";

interface OptAutoCompleteProps<T = unknown> {
  id: string;
  label: string;
  options: IOption<T>[];
}

const OptAutoComplete = ({ id, label, options }: OptAutoCompleteProps) => {
  return (
    <Autocomplete
      disablePortal
      id={`${id}-autocomplete`}
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default OptAutoComplete;
