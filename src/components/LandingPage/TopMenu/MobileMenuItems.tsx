import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileDropdown from "./MobileDropdown";
import { Tabs } from "../constants/OptxTabsData";

const MenuItems = styled.li`
  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: inherit;
    text-decoration: none;
    text-align: left;
    padding: 0.7rem 1rem;
  }

  a:hover {
    color: #1a2980;
  }
`;

const MenuItemsButton = styled.button`
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 0.7rem 1rem;

  &:hover {
    color: #1a2980;
  }
`;

const Arrow = styled.span`
  &::after {
    content: "";
    display: inline-block;
    margin-left: 1.2em;
    vertical-align: 0.09em;
    border-top: 0.42em solid;
    border-right: 0.32em solid transparent;
    border-left: 0.32em solid transparent;
  }
`;

const ArrowClose = styled.span`
  &::after {
    content: "";
    display: inline-block;
    margin-left: 1.2em;
    vertical-align: 0.09em;
    border-bottom: 0.42em solid;
    border-right: 0.32em solid transparent;
    border-left: 0.32em solid transparent;
  }
`;

const ItemsTitle = styled.span`
  margin-left: 3px;
`;

interface MobileMenuItemsProps {
  items: Tabs;
  depthlevel: number;
  showMenu?: boolean;
  setShowMenu?: (showMenu: boolean) => void;
}

const MobileMenuItems = ({
  items,
  depthlevel,
  showMenu,
  setShowMenu,
}: MobileMenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu?.(false);
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  const Icon = items.icon || undefined;

  return (
    <MenuItems onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          <MenuItemsButton
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            <Link to={items.url} onClick={closeDropdown}>
              {Icon && <Icon />}
              <ItemsTitle>{items.title}</ItemsTitle>
            </Link>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? <ArrowClose /> : <Arrow />}
            </div>
          </MenuItemsButton>
          <MobileDropdown
            depthlevel={depthlevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <MenuItemsButton
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {Icon && <Icon />}
            <ItemsTitle>{items.title} </ItemsTitle>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? <ArrowClose /> : <Arrow />}
            </div>
          </MenuItemsButton>
          <MobileDropdown
            depthlevel={depthlevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>
          {Icon && <Icon />}
          <ItemsTitle>{items.title}</ItemsTitle>
        </Link>
      )}
    </MenuItems>
  );
};

export default MobileMenuItems;
