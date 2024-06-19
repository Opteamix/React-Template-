import Grid from "@mui/material/Grid";
import {
  AccordianComponent,
  AccordianSubMenuComponent,
  AlertModalComponent,
  AutocompleteDropdownComponent,
  CardComponent,
  CheckboxComponent,
  DatePickerComponent,
  DateRangePickerComponent,
  FilledButtonComponent,
  LabelComponent,
  LineBreakComponent,
  LoaderBackdropComponent,
  NotistackErrorComponent,
  NotistackErrorMessage,
  NotistackInfoComponent,
  NotistackInfoMessage,
  NotistackSuccessComponent,
  NotistackSuccessMessage,
  OutlinedButtonComponent,
  RadioGroupComponent,
  SelectComponent,
  SimpleModalComponent,
  SwitchComponent,
  TableComponent,
  TextButtonComponent,
  TextFieldComponent,
  TooltipComponent,
} from "./constants/OptxComponents";
import RenderComponent from "../../shared/RenderComponent";

const OptxTemplates = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Text Field (OptxTextField)"
          component={TextFieldComponent}
        >
          <TextFieldComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Select (OptxSelect)"
          component={SelectComponent}
        >
          <SelectComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Autocomplete (OptxAutoComplete)"
          component={AutocompleteDropdownComponent}
        >
          <AutocompleteDropdownComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Text Button (OptxButton)"
          component={TextButtonComponent}
        >
          <TextButtonComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Filled Button (OptxButton)"
          component={FilledButtonComponent}
        >
          <FilledButtonComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Outlined Button (OptxButton)"
          component={OutlinedButtonComponent}
        >
          <OutlinedButtonComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Checkbox (OptxCheckbox)"
          component={CheckboxComponent}
        >
          <CheckboxComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Radio Button (OptxRadioGroup)"
          component={RadioGroupComponent}
        >
          <RadioGroupComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Switch (OptxSwitch)"
          component={SwitchComponent}
        >
          <SwitchComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Tooltip (OptxTooltip)"
          component={TooltipComponent}
        >
          <TooltipComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Simple Modal (OptxModal)"
          component={SimpleModalComponent}
        >
          <SimpleModalComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Alert Modal (OptxAlertModal)"
          component={AlertModalComponent}
        >
          <AlertModalComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Loader Backdrop (OptxLoader)"
          component={LoaderBackdropComponent}
        >
          <LoaderBackdropComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Date Picker (OptxDatePicker)"
          component={DatePickerComponent}
        >
          <DatePickerComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Notistack Success Message (OptxNotistack)"
          component={NotistackSuccessMessage}
        >
          <NotistackSuccessComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Notistack Info Message (OptxNotistack)"
          component={NotistackInfoMessage}
        >
          <NotistackInfoComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Notistack Error Message (OptxNotistack)"
          component={NotistackErrorMessage}
        >
          <NotistackErrorComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent title="Label (OptxLabel)" component={LabelComponent}>
          <LabelComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Line Break (OptxLineBreak)"
          component={LineBreakComponent}
        >
          <div>
            This is first line.
            <LineBreakComponent />
            This is second line.
          </div>
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <RenderComponent
          title="Table (OptxGrid)"
          component={TableComponent}
          width="800"
          height="500"
        >
          <TableComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <RenderComponent
          title="Card (OptxCard)"
          component={CardComponent}
          width="400"
          height="400"
        >
          <CardComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <RenderComponent
          title="Date Range Picker (OptxDateRangePicker)"
          component={DateRangePickerComponent}
          width="auto"
          height="300"
        >
          <DateRangePickerComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <RenderComponent
          title="Accordian (OptxAccordian)"
          component={AccordianComponent}
          width="auto"
          height="300"
        >
          <AccordianComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <RenderComponent
          title="Accordian Sub Menu (OptxAccordianSubMenu)"
          component={AccordianSubMenuComponent}
          width="auto"
          height="800"
        >
          <AccordianSubMenuComponent />
        </RenderComponent>
      </Grid>
    </Grid>
  );
};

export default OptxTemplates;
