import { GridColDef } from "@mui/x-data-grid";
import { IOption } from "../../../shared/Interfaces";
import { AccordianSubMenuType } from "../../../shared/components/OptxAccordianSubMenu";

export const SelectFieldOptions: IOption[] = [
    { value: 1, label: 'Option1' },
    { value: 2, label: 'Option2' },
    { value: 3, label: 'Option3' }
]

export const AutocompletDropdownOptions: IOption[] = [
    { label: "Option1", value: "Option1" },
    { label: "Option2", value: "Option2" },
    { label: "Option3", value: "Option3" },
    { label: "Option4", value: "Option4" },
    { label: "Option5", value: "Option5" },
];

export const RadioGroupLabelValues: string[] = [ "Yes", "No"];

export const dataGridColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
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
  
export const dataGridRows = [
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

export const accordianValues = [
  {
    name: 'Accordian 1',
    details: 'This is the details section of Accordian 1'
  },
  {
    name: 'Accordian 2',
    details: 'This is the details section of Accordian 2'
  }
]

export const accordianSubMenuValues: AccordianSubMenuType[] = [
  {
      name: 'Accordian 1',
      items: [
          {
              itemName: 'Item 1',
          },
          {
              itemName: 'Item 2',
              subMenuItems: ['Sub Item 1', 'Sub Item 2', 'Sub Item 3']
          }
      ]
  },
  {
      name: 'Accordian 2',
      items: [
          {
              itemName: 'Item 3',
              subMenuItems: ['Sub Item 4', 'Sub Item 5', 'Sub Item 6']
          },
          {
              itemName: 'Item 4',
          }
      ]
  }
]
  