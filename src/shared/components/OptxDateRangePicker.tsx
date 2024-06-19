import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import styled from "styled-components";
import moment from "moment";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import TextField from "@mui/material/TextField";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomDateRangePicker = styled(DateRangePicker)`
  position: absolute;
  display: block !important;
  z-index: 1000;
  .rdrDefinedRangesWrapper {
    display: none;
  }
  .rdrDayNumber {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
  }
`;

const CustomTextField = styled(TextField)`
  margin: 5px;
`;

export interface DateRangeValues {
  startDate: Date;
  endDate: Date;
  key: string;
}

interface IOptxDateRangePickerProps {
  dateRangeValues: DateRangeValues[];
  setDateRangeValues: (dateRangeValue: DateRangeValues[]) => void;
}

const OptxDateRangePicker = ({
  dateRangeValues,
  setDateRangeValues,
}: IOptxDateRangePickerProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setStartDate(moment(dateRangeValues[0].startDate).format("DD/MM/YYYY"));
    setEndDate(moment(dateRangeValues[0].endDate).format("DD/MM/YYYY"));
  }, [dateRangeValues]);

  const handleInputClick = () => {
    setShowCalendar(true);
  };

  const handleRangeSelection = (item: any) => {
    setDateRangeValues([item.selection]);
    if (item.selection.startDate && item.selection.endDate) {
      if (
        item.selection.startDate.valueOf() !== item.selection.endDate.valueOf()
      ) {
        setShowCalendar(false);
      } else {
        setShowCalendar(true);
      }
    }
  };

  return (
    <div>
      <CustomTextField
        label={"Start Date"}
        variant={"outlined"}
        value={startDate}
        onClick={handleInputClick}
        InputProps={{
          readOnly: true,
        }}
      />
      <RemoveIcon sx={{ fontSize: 12, height: "54px" }} />
      <CustomTextField
        label={"End Date"}
        variant={"outlined"}
        value={endDate}
        onClick={handleInputClick}
        InputProps={{
          readOnly: true,
        }}
      />
      {showCalendar && (
        <CustomDateRangePicker
          ranges={dateRangeValues}
          onChange={(item: any) => handleRangeSelection(item)}
          moveRangeOnFirstSelection={false}
          months={2}
          staticRanges={[]}
          inputRanges={[]}
          direction="horizontal"
        />
      )}
    </div>
  );
};

export default OptxDateRangePicker;
