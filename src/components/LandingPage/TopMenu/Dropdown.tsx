import { Tabs } from "../constants/OptxTabsData";
import MenuItems from "./MenuItems";
import styled from "styled-components";

const DropDownMenu = styled.ul<{
  dropdown?: number | undefined;
  depthlevel: number;
}>`
  position: absolute;
  left: auto;
  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
  font-size: 0.875rem;
  z-index: 9999;
  min-width: 10rem;
  padding: 0.5rem 0;
  list-style: none;
  background: white;
  color: black;
  border-radius: 0.5rem;
  display: ${(props) => (!!props.dropdown ? "block" : "none")};

  left: ${(props) => (props.depthlevel > 1 ? "100%" : "auto")};
  top: ${(props) => (props.depthlevel > 1 ? "-7px" : "auto")};
`;

export interface DropdownProps {
  submenus: Tabs[];
  dropdown?: boolean;
  depthlevel: number;
}

const Dropdown = ({ submenus, dropdown, depthlevel }: DropdownProps) => {
  depthlevel = depthlevel + 1;
  return (
    <DropDownMenu dropdown={dropdown ? 1 : undefined} depthlevel={depthlevel}>
      {submenus.map((submenu: Tabs, index: number) => (
        <MenuItems items={submenu} key={index} depthlevel={depthlevel} />
      ))}
    </DropDownMenu>
  );
};

export default Dropdown;
