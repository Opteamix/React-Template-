import { useEffect, useRef, useState } from "react";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import styled from "styled-components";
import { Tabs, TabsData } from "../constants/OptxTabsData";
import MobileMenuItems from "./MobileMenuItems";

const MobileNavBar = styled.nav`
  display: none;
  @media screen and (max-width: 960px) {
    background-color: #d0d0dc;
    display: flex;
    justify-content: end;
    padding: 10px;
    font-size: 1.5rem;
  }
`;

const Menus = styled.ul`
  list-style: none;
  position: absolute;
  top: 75px;
  right: 13px;
  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
  z-index: 9999;
  color: black;
  min-width: 14rem;
  padding: 0.5rem 0;
  background: white;
  border-radius: 0.5rem;
`;

const MenuRightAligned = styled(FormatAlignRightIcon)`
  color: black;
`;

const OptxMobileTopMenu = () => {
  const depthlevel = 0;
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showMenu]);

  return (
    <MobileNavBar>
      <MenuRightAligned onClick={() => setShowMenu((prev) => !prev)} />

      {showMenu && (
        <Menus ref={ref}>
          {TabsData.map((menu: Tabs, index: number) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthlevel={depthlevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </Menus>
      )}
    </MobileNavBar>
  );
};

export default OptxMobileTopMenu;
