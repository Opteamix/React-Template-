import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { IOption } from "../Interfaces";

interface OptxAutoCompleteProps<T = unknown> {
  id?: string;
  label: string;
  options: IOption<T>[];
  placeholder?: string
}

const OptxAutoComplete = ({ label, options, id = "", placeholder = "" }: OptxAutoCompleteProps) => {
  return (
    <Autocomplete
      disablePortal
      id={`${id}-autocomplete`}
      options={options}
      renderInput={(params) => <TextField {...params} label={label} placeholder={placeholder}/>}
    />
  );
};

export default OptxAutoComplete;
