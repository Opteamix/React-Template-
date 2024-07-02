import styled from "styled-components";
import MobileMenuItems from "./MobileMenuItems";
import { DropdownProps } from "./Dropdown";
import { Tabs } from "../constants/OptxTabsData";

const DropdownMenu = styled.ul<{ dropdown?: boolean }>`
  margin-left: 1em;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  list-style: none;
  display: ${(props) => (props.dropdown ? "block" : "none")};
`;

const MobileDropdown = ({ submenus, dropdown, depthlevel }: DropdownProps) => {
  depthlevel = depthlevel + 1;

  return (
    <DropdownMenu dropdown={dropdown}>
      {submenus.map((submenu: Tabs, index: number) => (
        <MobileMenuItems items={submenu} key={index} depthlevel={depthlevel} />
      ))}
    </DropdownMenu>
  );
};

export default MobileDropdown;
