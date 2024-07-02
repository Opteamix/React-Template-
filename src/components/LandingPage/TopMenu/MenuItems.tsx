import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tabs } from "../constants/OptxTabsData";

const List = styled.li`
  position: relative;
  font-size: 14px;

  a {
    display: flex;
    align-items: center;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    text-align: left;
    padding: 0.7rem 1rem;
  }

  a:hover {
    color: #1a2980;
  }
`;

const ArrowSpan = styled.span`
  content: "";
  display: inline-block;
  margin-left: 0.28em;
  vertical-align: 0.09em;
  border-top: 0.42em solid;
  border-right: 0.32em solid transparent;
  border-left: 0.32em solid transparent;
`;

const ListButton = styled.button`
  display: flex;
  align-items: center;
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  padding: 0.7rem 1rem;

  &:hover {
    color: #1a2980;
  }

  span {
    margin-left: 5px;
  }
`;

const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 3px;
  }
`;

interface MenuItemsProps {
  items: Tabs;
  depthlevel: number;
}

const MenuItems = ({ items, depthlevel }: MenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const Icon = items.icon || undefined;

  return (
    <List
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <ListButton
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => toggleDropdown()}
          >
            <ItemTitle>
              {Icon && <Icon />}
              <span>{items.title}</span>
            </ItemTitle>
            {depthlevel > 0 ? <span>&raquo;</span> : <ArrowSpan />}
          </ListButton>
          <Dropdown
            depthlevel={depthlevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <ListButton
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            <ItemTitle>
              {Icon && <Icon />}
              <span>{items.title}</span>
            </ItemTitle>
            {depthlevel > 0 ? <span>&raquo;</span> : <ArrowSpan />}
          </ListButton>
          <Dropdown
            depthlevel={depthlevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>
          <ItemTitle>
            {Icon && <Icon />}
            <span>{items.title}</span>
          </ItemTitle>
        </Link>
      )}
    </List>
  );
};

export default MenuItems;
