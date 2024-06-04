import { useState } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {
  AutocompletDropdownOptions,
  SelectFieldOptions,
} from "./constants/fieldValues";
import OptTextField from "../../shared/components/OptTextField";
import OptSelect from "../../shared/components/OptSelect";
import OptAutoComplete from "../../shared/components/OptAutocomplete";
import OptButton from "../../shared/components/OptButton";

const TemplateWrapper = styled.div`
  display: flex;
`;

const CustomCard = styled(Card)`
  width: 400px;
  height: 200px;
  margin: 10px;
  .MuiCardHeader-title {
    text-align: left;
    color: #000;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.15;
  }
`;

const CustomTableCard = styled(Card)({
  width: "700px",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value: any, row: { firstName: any; lastName: any }) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Templates = () => {
  const [radioGroupValue, setRadioGroupValue] = useState("female");

  const handleRadioGroupChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRadioGroupValue((event.target as HTMLInputElement).value);
  };

  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <TemplateWrapper>
        <CustomCard>
          <CardHeader title="Text Field" />
          <CardContent>
            <OptTextField
              id="input-text-field"
              label="Label"
              variant="outlined"
              disabled={false}
              helperText="This is helper text"
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Select" />
          <CardContent>
            <OptSelect
              id="select-dropdown"
              label="Select"
              options={SelectFieldOptions}
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Autocomplete" />
          <CardContent>
            <OptAutoComplete
              id="autocomplete-dropdown"
              label="Options"
              options={AutocompletDropdownOptions}
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Text Button" />
          <CardContent>
            <OptButton buttonText="Text" variant="text" />
          </CardContent>
        </CustomCard>
      </TemplateWrapper>
      <TemplateWrapper>
        <CustomCard>
          <CardHeader title="Filled Button" />
          <CardContent>
            <OptButton buttonText="Contained" variant="contained" />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Outlined Button" />
          <CardContent>
            <OptButton buttonText="Outlined" variant="outlined" />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Checkbox" />
          <CardContent>
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Radio Button" />
          <CardContent>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={radioGroupValue}
                onChange={handleRadioGroupChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </CustomCard>
      </TemplateWrapper>
      <TemplateWrapper>
        <CustomTableCard>
          <CardHeader title="Table" />
          <CardContent>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </CardContent>
        </CustomTableCard>
      </TemplateWrapper>
    </>
  );
};

export default Templates;
