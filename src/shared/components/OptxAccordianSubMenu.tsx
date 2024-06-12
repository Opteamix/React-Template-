import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Item {
  itemName: string;
  subMenuItems?: string[];
}

export interface AccordianSubMenuType {
  name: string;
  items: Item[];
}

interface OptxAccordianSubMenuProps {
  accordians: AccordianSubMenuType[];
  width?: string;
}

const OptxAccordianSubMenu = ({
  accordians,
  width = "500px",
}: OptxAccordianSubMenuProps) => {
  const SubMenu = ({ subMenuName, items }: any) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <div>
        <ListItem onClick={handleClick}>
          <ListItemText primary={subMenuName} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((item: string, index: number) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    );
  };

  return (
    <>
      {accordians.map((accordian: AccordianSubMenuType) => (
        <Accordion sx={{ width: width }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={accordian.name}
            id={accordian.name}
          >
            <Typography>{accordian.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {accordian.items.map((item: Item) => (
                <>
                  {item.subMenuItems?.length ? (
                    <SubMenu
                      subMenuName={item.itemName}
                      items={item.subMenuItems}
                    />
                  ) : (
                    <ListItem>
                      <ListItemText primary={item.itemName} />
                    </ListItem>
                  )}
                </>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default OptxAccordianSubMenu;
