import styled from "styled-components";
import { Tabs, TabsData } from "../constants/OptxTabsData";
import MenuItems from "./MenuItems";

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #d0d0dc;
  height: 48px;
  color: #000;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavBarMenus = styled.ul`
  display: flex;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  list-style: none;
`;

const OptxTopMenu = () => {
  const depthlevel = 0;

  return (
    <NavBar>
      <NavBarMenus>
        {TabsData.map((menu: Tabs, index: number) => {
          return <MenuItems items={menu} key={index} depthlevel={depthlevel} />;
        })}
      </NavBarMenus>
    </NavBar>
  );
};

export default OptxTopMenu;
