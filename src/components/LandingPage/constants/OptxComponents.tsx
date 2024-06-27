import { useState } from "react";
import { Dayjs } from "dayjs";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import OptxAutoComplete from "../../../shared/components/OptxAutocomplete";
import OptxSelect from "../../../shared/components/OptxSelect";
import OptxTextField from "../../../shared/components/OptxTextField";
import OptxButton from "../../../shared/components/OptxButton";
import {
  AutocompletDropdownOptions,
  RadioGroupLabelValues,
  SelectFieldOptions,
  accordianSubMenuValues,
  accordianValues,
  dataGridColumns,
  dataGridRows,
} from "./fieldValues";
import OptxCheckbox from "../../../shared/components/OptxCheckbox";
import OptxRadioGroup from "../../../shared/components/OptxRadioGroup";
import OptxSwitch from "../../../shared/components/OptxSwitch";
import OptxTooltip from "../../../shared/components/OptxTooltip";
import OptxModal from "../../../shared/components/OptxModal";
import OptxAlertModal from "../../../shared/components/OptxAlertModal";
import OptxLoader from "../../../shared/components/OptxLoader";
import OptxDatePicker from "../../../shared/components/OptxDatePicker";
import { OptxNotistack } from "../../../shared/components/OptxNotistack/OptxNotistack";
import OptxTable from "../../../shared/components/OptxTable";
import OptxComplexCard, { ActionButton } from "../../../shared/components/OptxComplexCard";
import OptxDateRangePicker, {
  DateRangeValues,
} from "../../../shared/components/OptxDateRangePicker";
import OptxAccordian from "../../../shared/components/OptxAccordian";
import OptxAccordianSubMenu from "../../../shared/components/OptxAccordianSubMenu";
import OptxLabel from "../../../shared/components/OptxLabel";
import OptxLineBreak from "../../../shared/components/OptxLineBreak";
import OptxSocialMedia from "../../../shared/components/OptxSocialMedia";
import { SocialMediaValues } from "./OptxSocialMediaValues";
import OptxCard from "../../../shared/components/OptxCard";

export const TextFieldComponent = () => (
  <OptxTextField
    id="input-text-field"
    label="Label"
    placeholder="Placeholder"
    variant="outlined"
    disabled={false}
    helperText="This is helper text"
  />
);

export const SelectComponent = () => (
  <OptxSelect
    id="select-dropdown"
    label="Select"
    defaultValue={1}
    options={SelectFieldOptions}
  />
);

export const AutocompleteDropdownComponent = () => (
  <OptxAutoComplete
    id="autocomplete-dropdown"
    label="Options"
    options={AutocompletDropdownOptions}
    placeholder="Select Option"
  />
);

export const TextButtonComponent = () => (
  <OptxButton buttonText="Text" variant="text" handleClick={function noRefCheck() {}}/>
);

export const FilledButtonComponent = () => (
  <OptxButton buttonText="Contained" variant="contained" handleClick={function noRefCheck() {}}/>
);

export const OutlinedButtonComponent = () => (
  <OptxButton buttonText="Outlined" variant="outlined" handleClick={function noRefCheck() {}}/>
);

export const CheckboxComponent = () => {
  const [checked, setChecked] = useState(true);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return <OptxCheckbox label="Label" checked={checked} onChange={handleCheckboxChange} />;
};

export const RadioGroupComponent = () => {
  const [radioGroupValue, setRadioGroupValue] = useState("yes");
  const handleRadioGroupChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRadioGroupValue((event.target as HTMLInputElement).value);
  };
  return (
    <OptxRadioGroup
      groupLabel="Confirm"
      radioGroupValue={radioGroupValue}
      labelValues={RadioGroupLabelValues}
      onChange={handleRadioGroupChange}
    />
  );
};

export const SwitchComponent = () => {
  const [toggleSwitch, setToggleSwitch] = useState(true);
  const handleToggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggleSwitch(event.target.checked);
  };
  return (
    <OptxSwitch
      label="Label"
      checked={toggleSwitch}
      onChange={handleToggleSwitch}
    />
  );
};

export const TooltipComponent = () => (
  <OptxTooltip title="Tooltip text" placement="bottom" arrow={true}>
    <div>Hover on Text</div>
  </OptxTooltip>
);

export const SimpleModalComponent = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const openModal = () => {
    setDisplayModal(true);
  };

  const handleModalClose = () => {
    setDisplayModal(false);
  };

  return (
    <div>
      <OptxButton
        handleClick={openModal}
        buttonText="Open Simple Modal"
        variant="text"
      />
      <OptxModal
        open={displayModal}
        fullWidth
        dialogWidth="75%"
        dialogHeight="75%"
        dialogMinWidth="800px"
        dialogMaxWidth="1000px"
        maxWidth="xl"
        onClose={handleModalClose}
      >
        <div>This is a simple modal</div>
      </OptxModal>
    </div>
  );
};

export const AlertModalComponent = () => {
  const [displayAlertModal, setDisplayAlertModal] = useState(false);
  const openAlertModal = () => {
    setDisplayAlertModal(true);
  };

  return (
    <div>
      <OptxButton
        handleClick={openAlertModal}
        buttonText="Open Alert Modal"
        variant="text"
      />
      <OptxAlertModal
        title={"Alert Modal"}
        subtitle={"This is subtitle"}
        buttonText={"OK"}
        open={displayAlertModal}
        onConfirm={() => setDisplayAlertModal(false)}
        onClose={() => setDisplayAlertModal(false)}
        hideCancel={false}
      >
        <div>Are you sure you want to continue?</div>
      </OptxAlertModal>
    </div>
  );
};

export const LoaderBackdropComponent = () => {
  const [showLoader, setShowLoader] = useState(false);
  const handleShowLoader = () => {
    setShowLoader(true);
  };

  return (
    <div>
      <OptxButton
        handleClick={handleShowLoader}
        buttonText="Show Loader"
        variant="text"
      />
      <OptxLoader open={showLoader} handleClose={() => setShowLoader(false)} />
    </div>
  );
};

export const DatePickerComponent = () => {
  const [dateValue, setDateValue] = useState<Dayjs | null>(null);

  return (
    <OptxDatePicker
      label="Date picker"
      value={dateValue}
      handleChange={(newValue: Dayjs) => setDateValue(newValue)}
      format="MM/DD/YYYY"
      disabled={false}
      readOnly={false}
      clearable={true}
    />
  );
};

export const NotistackSuccessMessage =
  'OptxNotistack.successMessage("This is success message")';
export const NotistackInfoMessage =
  'OptxNotistack.infoMessage("This is info message")';
export const NotistackErrorMessage =
  'OptxNotistack.generalError("This is error message")';

export const NotistackSuccessComponent = () => {
  const showSuccessNotistack = () => {
    OptxNotistack.successMessage("This is success message");
  };

  return (
    <OptxButton
      handleClick={showSuccessNotistack}
      buttonText="Show Success Message"
      variant="text"
    />
  );
};

export const NotistackInfoComponent = () => {
  const showInfoNotistack = () => {
    OptxNotistack.infoMessage("This is info message");
  };

  return (
    <OptxButton
      handleClick={showInfoNotistack}
      buttonText="Show Info Message"
      variant="text"
    />
  );
};

export const NotistackErrorComponent = () => {
  const showErrorNotistack = () => {
    OptxNotistack.generalError("This is error message");
    //OR Notistack.generalError();
  };

  return (
    <OptxButton
      handleClick={showErrorNotistack}
      buttonText="Show Error Message"
      variant="text"
    />
  );
};

export const TableComponent = () => (
  <OptxTable
    rows={dataGridRows}
    columns={dataGridColumns}
    pageSizeOptions={[5, 10]}
  />
);

export const CardComponent = () => {
  return (
    <OptxCard width="300px" height="200px">
      <p>Add content here</p>
    </OptxCard>
  );
};

export const ComplexCardComponent = () => {
  const handleShareClick = () => {
    console.log("Share button click");
  };

  const handleLearnMoreClick = () => {
    console.log("Learn More button click");
  };

  const handleFavouriteIconClick = () => {
    console.log("Favourite Icon click");
  };

  const CardActionButtons: ActionButton[] = [
    {
      buttonText: "Share",
      onClickFunction: handleShareClick,
    },
    {
      buttonText: "Learn More",
      onClickFunction: handleLearnMoreClick,
    },
  ];

  const HeaderActionButtons: ActionButton[] = [
    {
      buttonText: FavoriteIcon,
      onClickFunction: handleFavouriteIconClick,
    },
  ];
  return (
    <OptxComplexCard
      title="Sample Title"
      width="300px"
      subTitle="September 14, 2016"
      avatar="S"
      avatarColor="red"
      headerActionButtons={HeaderActionButtons}
      cardActionButtons={CardActionButtons}
    >
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </OptxComplexCard>
  );
};

export const DateRangePickerComponent = () => {
  const [dateRangeValues, setDateRangeValues] = useState<DateRangeValues[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <OptxDateRangePicker
      dateRangeValues={dateRangeValues}
      setDateRangeValues={setDateRangeValues}
    />
  );
};

export const AccordianComponent = () => (
  <OptxAccordian accordians={accordianValues} />
);

export const AccordianSubMenuComponent = () => (
  <OptxAccordianSubMenu accordians={accordianSubMenuValues} width="400px" />
);

export const LabelComponent = () => <OptxLabel name="FirstName" />;

export const LineBreakComponent = () => <OptxLineBreak />;

export const SocialMediaComponent = () => <OptxSocialMedia socialMediaValues={SocialMediaValues}/>;
