import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateSidebarState } from "../../../utils/sideBarSlice";
import { useSelector } from "react-redux";

const SidebarLink = styled(NavLink)<{ depth: any; depthstep: any }>`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px ${(props) => (props.depth * (props.depthstep+5))}px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-size: 0.8125rem;

  &:hover {
    color: blue;
    background: #F2F2F2;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`;

interface SubMenuProps {
  item: any;
  depth: number;
  depthstep: any;
}

const SubMenu = ({ item, depth, depthstep}: SubMenuProps) => {

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const device = useSelector((store: any) => store.sidebar.device);

  const dispatch = useDispatch();

  const handleSideBarToggle = (state: any) => {
    dispatch(updateSidebarState(state));
  };

  const handleClickOnLink = (e: any) => {
    if (item.subNav) {
      e.preventDefault();
      showSubnav();
    } else {
      if (device === "mobile") {
        handleSideBarToggle(false);
      }
    }
  };

  return (
    <>
      <SidebarLink
        to={item.path}
        depth={depth}
        depthstep={depthstep}
        onClick={handleClickOnLink}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <SubMenuContainer>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </SubMenuContainer>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item: any, index: number) => {
          return (
            <SubMenu
              depth={depth + 1}
              depthstep={depthstep}
              item={item}
              key={index}
            />
          );
        })}
    </>
  );
};

export default SubMenu;
