import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordianType {
  name: string;
  details: string;
}

interface OptxAccordianProps {
  accordians: AccordianType[];
  width?: string;
}

const OptxAccordian = ({ accordians, width = "300px" }: OptxAccordianProps) => {
  return (
    <>
      {accordians.map((accordian: AccordianType) => (
        <Accordion sx={{ width: width }} key={accordian.name}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={accordian.name}
            id={accordian.name}
          >
            <Typography>{accordian.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordian.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default OptxAccordian;
