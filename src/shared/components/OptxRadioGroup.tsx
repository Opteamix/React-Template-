import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

interface OptxRadioGroupProps {
  groupLabel: string;
  radioGroupValue: string;
  labelValues: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptxRadioGroup = ({
  groupLabel,
  radioGroupValue,
  labelValues,
  onChange,
}: OptxRadioGroupProps) => {
  return (
    <FormControl>
      <FormLabel id={`${groupLabel}-radio-buttons-group`}>
        {groupLabel}
      </FormLabel>
      <RadioGroup
        aria-labelledby={`${groupLabel}-radio-buttons-group`}
        name={`${groupLabel}-radio-buttons-group`}
        value={radioGroupValue}
        onChange={onChange}
      >
        {labelValues.map((labelValue: string) => (
          <FormControlLabel
            key={labelValue}
            value={labelValue.toLowerCase()}
            control={<Radio />}
            label={labelValue}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default OptxRadioGroup;
