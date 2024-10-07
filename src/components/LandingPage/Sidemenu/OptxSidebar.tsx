
import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "../constants/OptxSidebarData";
import SubMenu from "./OptxSubMenu";
import { useSelector } from "react-redux";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { extraColor } from "../../../shared/styles/muiTheme";

const SidebarNav = styled.nav<{ sidebar: any }>`
  overflow-y: auto;
  background: #EBEBEB;
  width: 240px;
  min-width: 240px;
  height: 100%;
  display: flex;
  padding-top: 5px;
  justify-content: center;
  position: relative;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  display: ${({ sidebar }) => (sidebar ? "block" : "none")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const OptxSidebar = () => {
    const sidebarState = useSelector((store: any) => store.sidebar.show);

    return (
      <SidebarNav sidebar={sidebarState ? 1 : undefined}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} depth={1} depthstep={10}/>
          })}
        </SidebarWrap>
      </SidebarNav>
    );
  };
  export default OptxSidebar;