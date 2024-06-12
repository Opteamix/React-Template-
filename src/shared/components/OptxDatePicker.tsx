import { useEffect, useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers";

interface OptxDatePickerProps {
  label?: string;
  value?: any;
  handleChange?: any;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
}

const OptxDatePicker = ({
  label,
  value,
  handleChange,
  disabled = false,
  readOnly = false,
  clearable = true,
}: OptxDatePickerProps) => {
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <DesktopDatePicker
      label={label}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      readOnly={readOnly}
      slotProps={{
        field: { clearable: clearable, onClear: () => setCleared(true) },
      }}
    />
  );
};

export default OptxDatePicker;
