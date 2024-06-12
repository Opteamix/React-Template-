import { useState } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  AutocompletDropdownOptions,
  RadioGroupLabelValues,
  SelectFieldOptions,
  accordianSubMenuValues,
  accordianValues,
  dataGridColumns,
  dataGridRows,
} from "./constants/fieldValues";
import OptxTextField from "../../shared/components/OptxTextField";
import OptxSelect from "../../shared/components/OptxSelect";
import OptxAutoComplete from "../../shared/components/OptxAutocomplete";
import OptxButton from "../../shared/components/OptxButton";
import OptxCheckbox from "../../shared/components/OptxCheckbox";
import OptxRadioGroup from "../../shared/components/OptxRadioGroup";
import OptxGrid from "../../shared/components/OptxGrid";
import OptxSwitch from "../../shared/components/OptxSwitch";
import OptxTooltip from "../../shared/components/OptxTooltip";
import OptxCard, { ActionButton } from "../../shared/components/OptxCard";
import OptxModal from "../../shared/components/OptxModal";
import OptxAlertModal from "../../shared/components/OptxAlertModal";
import OptxLoader from "../../shared/components/OptxLoader";
import OptxDatePicker from "../../shared/components/OptxDatePicker";
import dayjs, { Dayjs } from "dayjs";
import OptxAccordian from "../../shared/components/OptxAccordian";
import OptxAccordianSubMenu from "../../shared/components/OptxAccordianSubMenu";
import { OptxNotistack } from "../../shared/components/OptxNotistack/OptxNotistack";

const TemplateWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const CustomCard = styled(Card)<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : 400)}px;
  height: ${({ height }) => (height ? height : 200)}px;
  margin: 10px;
  .MuiCardHeader-title {
    text-align: left;
    color: #000;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.15;
  }
`;

const OptxTemplates = () => {
  const [checked, setChecked] = useState(true);
  const [toggleSwitch, setToggleSwitch] = useState(true);
  const [radioGroupValue, setRadioGroupValue] = useState("female");
  const [displayModal, setDisplayModal] = useState(false);
  const [displayAlertModal, setDisplayAlertModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs(new Date()));

  const handleShowLoader = () => {
    setShowLoader(true);
  };

  const handleRadioGroupChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRadioGroupValue((event.target as HTMLInputElement).value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleToggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggleSwitch(event.target.checked);
  };

  const handleShareClick = () => {
    console.log("Share button click");
  };

  const handleLearMoreClick = () => {
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
      onClickFunction: handleLearMoreClick,
    },
  ];

  const HeaderActionButtons: ActionButton[] = [
    {
      buttonText: FavoriteIcon,
      onClickFunction: handleFavouriteIconClick,
    },
  ];

  const handleModalClose = () => {
    setDisplayModal(false);
  };

  const openModal = () => {
    setDisplayModal(true);
  };

  const openAlertModal = () => {
    setDisplayAlertModal(true);
  };

  const showSuccessNotistack = () => {
    OptxNotistack.successMessage("This is success message");
  };

  const showInfoNotistack = () => {
    OptxNotistack.infoMessage("This is info message");
  };

  const showErrorNotistack = () => {
    OptxNotistack.generalError("This is error message");
    //OR Notistack.generalError();
  };

  return (
    <>
      <TemplateWrapper>
        <CustomCard>
          <CardHeader title="Text Field" />
          <CardContent>
            <OptxTextField
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
            <OptxSelect
              id="select-dropdown"
              label="Select"
              options={SelectFieldOptions}
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Autocomplete" />
          <CardContent>
            <OptxAutoComplete
              id="autocomplete-dropdown"
              label="Options"
              options={AutocompletDropdownOptions}
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Text Button" />
          <CardContent>
            <OptxButton buttonText="Text" variant="text" />
          </CardContent>
        </CustomCard>
      </TemplateWrapper>
      <TemplateWrapper>
        <CustomCard>
          <CardHeader title="Filled Button" />
          <CardContent>
            <OptxButton buttonText="Contained" variant="contained" />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Outlined Button" />
          <CardContent>
            <OptxButton buttonText="Outlined" variant="outlined" />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Checkbox" />
          <CardContent>
            <OptxCheckbox checked={checked} onChange={handleCheckboxChange} />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Radio Button" />
          <CardContent>
            <OptxRadioGroup
              groupLabel="Gender"
              radioGroupValue={radioGroupValue}
              labelValues={RadioGroupLabelValues}
              onChange={handleRadioGroupChange}
            />
          </CardContent>
        </CustomCard>
      </TemplateWrapper>
      <TemplateWrapper>
        <CustomCard>
          <CardHeader title="Switch" />
          <CardContent>
            <OptxSwitch
              label="Label"
              checked={toggleSwitch}
              onChange={handleToggleSwitch}
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Tooltip" />
          <CardContent>
            <OptxTooltip title="Tooltip text" placement="bottom" arrow={true}>
              <div>Hover on Text</div>
            </OptxTooltip>
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Simple Modal" />
          <CardContent>
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
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Alert Modal" />
          <CardContent>
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
          </CardContent>
        </CustomCard>
      </TemplateWrapper>
      <TemplateWrapper>
        <CustomCard>
          <CardHeader title="Loader Backdrop" />
          <CardContent>
            <OptxButton
              handleClick={handleShowLoader}
              buttonText="Show Loader"
              variant="text"
            />
            <OptxLoader
              open={showLoader}
              handleClose={() => setShowLoader(false)}
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Date Picker" />
          <CardContent>
            <OptxDatePicker
              label="Date picker"
              value={dateValue}
              handleChange={(newValue: Dayjs) => setDateValue(newValue)}
              disabled={false}
              readOnly={false}
              clearable={false}
            />
          </CardContent>
        </CustomCard>
        <CustomCard>
          <CardHeader title="Notistack Messages" />
          <CardContent>
            <OptxButton
              handleClick={showSuccessNotistack}
              buttonText="Show Success Message"
              variant="text"
            />
            <OptxButton
              handleClick={showInfoNotistack}
              buttonText="Show Info Message"
              variant="text"
            />
            <OptxButton
              handleClick={showErrorNotistack}
              buttonText="Show Error Message"
              variant="text"
            />
          </CardContent>
        </CustomCard>
      </TemplateWrapper>
      <TemplateWrapper>
        <CustomCard width="1000px" height="500px">
          <CardHeader title="Table" />
          <CardContent>
            <OptxGrid
              rows={dataGridRows}
              columns={dataGridColumns}
              pageSizeOptions={[5, 10]}
            />
          </CardContent>
        </CustomCard>
        <CustomCard width="600px" height="400px">
          <CardHeader title="Card" />
          <CardContent>
            <OptxCard
              title="Sample Title"
              width="300px"
              subTitle="September 14, 2016"
              avatar="S"
              avatarColor="red"
              headerActionButtons={HeaderActionButtons}
              cardActionButtons={CardActionButtons}
            >
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </OptxCard>
          </CardContent>
        </CustomCard>
      </TemplateWrapper>
      <TemplateWrapper>
        <CustomCard width="500px" height="800px">
          <CardHeader title="Accordian" />
          <CardContent>
            <OptxAccordian accordians={accordianValues} />
          </CardContent>
        </CustomCard>
        <CustomCard width="500px" height="800px">
          <CardHeader title="Accordian Sub Menu" />
          <CardContent>
            <OptxAccordianSubMenu
              accordians={accordianSubMenuValues}
              width="400px"
            />
          </CardContent>
        </CustomCard>
      </TemplateWrapper>
    </>
  );
};

export default OptxTemplates;
