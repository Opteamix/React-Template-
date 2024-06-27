import { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";
import CopyToClipboard from "react-copy-to-clipboard";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import {
  AccordianComponent,
  AccordianSubMenuComponent,
  AlertModalComponent,
  AutocompleteDropdownComponent,
  ComplexCardComponent,
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
  SocialMediaComponent,
  SwitchComponent,
  TableComponent,
  TextButtonComponent,
  TextFieldComponent,
  TooltipComponent,
  CardComponent,
} from "./constants/OptxComponents";
import RenderComponent, { CustomCard } from "../../shared/RenderComponent";
import OptxDynamicGrid from "../../shared/components/OptxDynamicGrid";
import OptxTextField from "../../shared/components/OptxTextField";

const OptxTemplates = () => {
  const [gridRows, setGridRows] = useState("");
  const [gridColumns, setGridColumns] = useState("");

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
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RenderComponent
          title="Social Media (OptxSocialMedia)"
          component={SocialMediaComponent}
        >
          <SocialMediaComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <RenderComponent
          title="Card (OptxCard)"
          component={CardComponent}
          width="350"
          height="350"
        >
          <CardComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <RenderComponent
          title="Complex Card (OptxComplexCard)"
          component={ComplexCardComponent}
          width="350"
          height="350"
        >
          <ComplexCardComponent />
        </RenderComponent>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <CustomCard width="350" height="350">
          <CardHeader
            title="Dynamic Grid(OptxDynamicGrid)"
            action={
              <CopyToClipboard text={OptxDynamicGrid(gridRows, gridColumns)}>
                <Tooltip title="Copy">
                  <IconButton
                    aria-label="copy"
                    disabled={!gridRows || !gridColumns}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </CopyToClipboard>
            }
          />
          <CardContent>
            <Stack spacing={2} direction="row">
              <OptxTextField
                id="grid-rows"
                label="Rows"
                placeholder="No. of Rows"
                variant="outlined"
                disabled={false}
                value={gridRows}
                onChange={(event) => setGridRows(event.target.value)}
              />
              <OptxTextField
                id="grid-columns"
                label="Columns"
                placeholder="No. of Columns"
                variant="outlined"
                disabled={false}
                value={gridColumns}
                onChange={(event) => setGridColumns(event.target.value)}
              />
            </Stack>
          </CardContent>
        </CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <RenderComponent
          title="Table (OptxTable)"
          component={TableComponent}
          width="800"
          height="500"
        >
          <TableComponent />
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
